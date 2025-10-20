import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureUserExists } from "@/lib/userUtils";


// Update user cart 
export async function POST(request){
    try {
        const { userId } = getAuth(request)
        if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { cart } = await request.json()

        // Ensure user exists in database
        await ensureUserExists(userId)

        // Save the cart to the user object
        await prisma.user.update({
            where: {id: userId},
            data: {cart: cart}
        })

        return NextResponse.json({ message: 'Cart updated' })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}

// Get user cart 
export async function GET(request){
    try {
        const { userId } = getAuth(request)
        if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        // Ensure user exists in database
        const user = await ensureUserExists(userId)

        return NextResponse.json({ cart: user.cart })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}