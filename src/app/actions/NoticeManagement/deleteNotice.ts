'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteNotice(id: number) {
    try {
        await prisma.notice.delete({
            where: {
                id: id,
            },
        })

        revalidatePath('/admin/notice')
        revalidatePath('/notice')
        return { success: true }
    } catch (error) {
        console.error("Failed to delete notice:", error)
        return { success: false, error: "Failed to delete notice" }
    }
}
