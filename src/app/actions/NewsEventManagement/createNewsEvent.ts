'use server'
import { CreateClient } from "@/utils/supabase/server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createNewsEvent(formData: FormData) {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const img = formData.get("photo") as File

    const supabase = await CreateClient()
    if (!img || img.size === 0) {
        console.log("News or Event image is needed")
        return{ success: false, error: "Title, content, and valid image are required" }
    }

    const imgName = `${Date.now()}-${img.name}`

    const { error: uploadError } = await supabase.storage
        .from("newsEvent")
        .upload(imgName, img)

    if (uploadError) {
        console.error("Upload Error", uploadError)
        // throw new Error("Failed to upload image");
    }

    const { data: { publicUrl } } = supabase.storage
        .from("newsEvent")
        .getPublicUrl(imgName)

    if (!title || !content || !img) {
        return { success: false, error: "Title, content, and image URL are required" }
    }

    try {
        await prisma.newsEvent.create({
            data: {
                title,
                content,
                imageUrl: publicUrl,
            },
        })

        revalidatePath('/admin/newsevent')
        revalidatePath('/news-events')
        return { success: true || [] } 
    } catch (error) {
        console.error("Failed to create news & event:", error)
        return { success: false, error: "Failed to create news & event" }
    }
}
