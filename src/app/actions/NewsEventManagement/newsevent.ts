'use server'

import { prisma } from "@/lib/prisma"

export async function getNewsEvents() {
    try {
        const newsEvents = await prisma.newsEvent.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        })
        return { success: true, data: newsEvents} 
    } catch (error) {
        console.error("Failed to fetch news & events:", error)
        return { success: false, error: "Failed to fetch news & events" }
    }
}
