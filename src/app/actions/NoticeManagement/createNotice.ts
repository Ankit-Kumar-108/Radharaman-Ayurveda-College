'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createNotice(formData: FormData) {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("imageUrl") as string // Assuming URL for now, or handle upload separately

    if (!title || !content) {
        return { success: false, error: "Title and content are required" }
    }

    try {
        await prisma.notice.create({
            data: {
                title,
                content,
                imageUrl: imageUrl || null
            },
        })

        revalidatePath('/admin/notices')
        revalidatePath('/notice')
        return { success: true }
    } catch (error) {
        console.error("Failed to create notice:", error)
        return { success: false, error: "Failed to create notice" }
    }
}
