import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

// Paystack sends events with a header 'x-paystack-signature'
export async function POST(request){
    try {
        const bodyText = await request.text()
        const signature = request.headers.get('x-paystack-signature')

        // Verify signature using PAYSTACK_SECRET_KEY
        if(process.env.PAYSTACK_SECRET_KEY && signature){
            const crypto = await import('crypto')
            const expected = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY).update(bodyText).digest('hex')
            if(expected !== signature){
                return NextResponse.json({ received: false, message: 'Invalid signature' }, { status: 400 })
            }
        }

        const event = JSON.parse(bodyText)
        const eventType = event?.event

        if(eventType === 'charge.success'){
            const metadata = event?.data?.metadata || {}
            const { orderIds, userId, appId } = metadata
            if(appId !== 'shoecraft'){
                return NextResponse.json({ received: true })
            }
            const orderIdsArray = (orderIds || '').split(',').filter(Boolean)

            await Promise.all(orderIdsArray.map(async (orderId) => {
                await prisma.order.update({ where: { id: orderId }, data: { isPaid: true } })
            }))

            if(userId){
                await prisma.user.update({ where: { id: userId }, data: { cart: {} } })
            }
        }

        if(eventType === 'charge.failed'){
            const metadata = event?.data?.metadata || {}
            const { orderIds } = metadata
            const orderIdsArray = (orderIds || '').split(',').filter(Boolean)
            await Promise.all(orderIdsArray.map(async (orderId) => {
                await prisma.order.delete({ where: { id: orderId } })
            }))
        }

        return NextResponse.json({ received: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}

export const config = { api: { bodyParser: false } }


