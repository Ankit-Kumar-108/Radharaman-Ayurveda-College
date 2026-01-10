'use server'

import { prisma } from "@/lib/prisma"

export async function getNotices() {
    try {
        const notices = await prisma.notice.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        })
        return { success: true, data: notices }
    } catch (error) {
        console.error("Failed to fetch notices:", error)
        return { success: false, error: "Failed to fetch notices" }
    }
}
