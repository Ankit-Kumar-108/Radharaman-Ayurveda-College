"use server"
import { prisma } from "@/lib/prisma";
import { CreateClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";


export async function CreateTeacher(formData: FormData) {

    const supabase = await CreateClient()

    const fullName = formData.get("fullName") as string
    const gender = formData.get("gender") as string
    const email = formData.get("email") as string
    const dateOfBirth = formData.get("dateOfBirth") as string
    const aadharNo = formData.get("aadharNo") as string
    const mobileNo = formData.get("mobileNo") as string
    const whatsappNo = formData.get("whatsappNo") as string || null
    const localAddress = formData.get("localAddress") as string
    const permanentAddress = formData.get("permanentAddress") as string
    const experience = formData.get("experience") as string
    const highestQualification = formData.get("highestQualification") as string
    const img = formData.get("photo") as File
    const fatherName = formData.get("fatherName") as string
    const motherName = formData.get("motherName") as string

    if (!img || img.size === 0) {
        console.log("teacher image is needed")
        return; // Stop execution if no image
    }

    const imgName = `${Date.now()}-${img.name}`

    const { error: uploadError } = await supabase.storage
        .from("teachers")
        .upload(imgName, img)

    if (uploadError) {
        console.error("Upload Error", uploadError)
        // throw new Error("Failed to upload image");
    }

    const { data: { publicUrl } } = supabase.storage
        .from("teachers")
        .getPublicUrl(imgName)

    try {
        await prisma.teacher.create({
            data: {
                email,
                aadharNo,
                dateOfBirth: new Date(dateOfBirth),
                experience,
                fatherName,
                fullName,
                gender,
                mobileNo,
                whatsappNo,
                localAddress,
                permanentAddress,
                highestQualification,
                motherName,
                photo: publicUrl,
            }
        })
    } catch (error: any) {
        console.log("Error Creating Teacher Profile", error)
    }
    revalidatePath("/admin/teacher")
    revalidatePath("/faculty")
}