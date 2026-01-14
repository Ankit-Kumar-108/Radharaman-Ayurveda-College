'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { CreateClient } from "@/utils/supabase/server"

export async function createNotice(formData: FormData) {
    const title = formData.get("title") as string
    const img = formData.get("photo") as File // Assuming URL for now, or handle upload separately

    const supabase = await CreateClient()

    if (!title || !img) {
        return { success: false, error: "Title and Image are required" }
    }

     const imgName = `${Date.now()}-${img.name}`

    const { error: uploadError } = await supabase.storage
        .from("notices")
        .upload(imgName, img)

    if (uploadError) {
        console.error("Upload Error", uploadError)
        // throw new Error("Failed to upload image");
    }

    const { data: { publicUrl } } = supabase.storage
        .from("notices")
        .getPublicUrl(imgName)


    try {
        await prisma.notice.create({
            data: {
                title,
                imageUrl: publicUrl
            },
        })

        revalidatePath('/admin/notice')
        revalidatePath('/notice')
        return { success: true }
    } catch (error) {
        console.error("Failed to create notice:", error)
        return { success: false, error: "Failed to create notice" }
    }
}
