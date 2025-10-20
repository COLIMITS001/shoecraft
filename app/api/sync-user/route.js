import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureUserExists } from "@/lib/userUtils";

// Sync user with database (useful for debugging)
export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        
        if (!userId) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const user = await ensureUserExists(userId);
        
        return NextResponse.json({ 
            message: "User synced successfully", 
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        console.error("Error syncing user:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
