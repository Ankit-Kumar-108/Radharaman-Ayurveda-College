'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createNewsEvent(formData: FormData) {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("imageUrl") as string

    if (!title || !content || !imageUrl) {
        return { success: false, error: "Title, content, and image URL are required" }
    }

    try {
        await prisma.newsEvent.create({
            data: {
                title,
                content,
                imageUrl,
            },
        })

        revalidatePath('/admin/newsevent')
        revalidatePath('/news-events')
        return { success: true }
    } catch (error) {
        console.error("Failed to create news & event:", error)
        return { success: false, error: "Failed to create news & event" }
    }
}
