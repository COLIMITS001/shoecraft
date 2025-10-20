import prisma from '@/lib/prisma';
import { ensureUserExists } from '@/lib/userUtils';


const authSeller = async (userId) => {
    try {
        // Ensure user exists in database
        await ensureUserExists(userId)

        // IMPORTANT: fetch user with store relation included
        const userWithStore = await prisma.user.findUnique({
            where: { id: userId },
            include: { store: true },
        })

        if (!userWithStore) return false

        if (userWithStore.store && userWithStore.store.status === 'approved') {
            return userWithStore.store.id
        }

        return false
    } catch (error) {
        console.error(error)
        return false
    }
}

export default authSeller