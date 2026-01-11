"use server"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"

export async function DeleteTeacher(id: number) {
    try {
        await prisma.teacher.delete({
            where: {
                id: id
            }
        })
        revalidatePath("/admin/teacher")
        revalidatePath("/faculty")
    } catch (error: unknown) {
        console.log("error deleting teacher profile", error)
        return { success: false, error: "error deleting teacher profile" }
    }
}