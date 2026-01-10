'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteNewsEvent(id: number) {
    try {
        await prisma.newsEvent.delete({
            where: {
                id: id,
            },
        })

        revalidatePath('/admin/newsevent')
        revalidatePath('/news-events')
        return { success: true }
    } catch (error) {
        console.error("Failed to delete news & event:", error)
        return { success: false, error: "Failed to delete news & event" }
    }
}
