"use server"
import { prisma } from "@/lib/prisma";

export async function GetTeacher() {
    try {
        const teachers = await prisma.teacher.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return teachers
    } catch (error: unknown) {
        console.log("error fetching Teacher profile", error)
        return
    }
}