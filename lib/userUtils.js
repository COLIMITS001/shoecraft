import prisma from './prisma';
import { currentUser } from '@clerk/nextjs/server';

/**
 * Ensures a user exists in the database, creates them if they don't exist
 * @param {string} userId - The Clerk user ID
 * @param {Object} userData - Optional user data from Clerk
 * @returns {Object} The user object from the database
 */
export async function ensureUserExists(userId, userData = null) {
    if (!userId) {
        const err = new Error('Unauthorized: missing userId');
        err.code = 'UNAUTHORIZED';
        throw err;
    }
    try {
        // First, try to find the user
        let user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (user) {
            return user;
        }

        // If user doesn't exist and we have userData, create them
        if (userData) {
            user = await prisma.user.create({
                data: {
                    id: userId,
                    email: userData.emailAddresses[0].emailAddress,
                    name: `${userData.firstName} ${userData.lastName}`,
                    image: userData.imageUrl,
                }
            });
            return user;
        }

        // If no userData provided, get it from Clerk
        const clerkUser = await currentUser();
        if (clerkUser) {
            user = await prisma.user.create({
                data: {
                    id: userId,
                    email: clerkUser.emailAddresses[0].emailAddress,
                    name: `${clerkUser.firstName} ${clerkUser.lastName}`,
                    image: clerkUser.imageUrl,
                }
            });
            return user;
        }

        throw new Error('Unable to create user - no user data available');
    } catch (error) {
        console.error('Error in ensureUserExists:', error);
        throw error;
    }
}

