"use client"
import { DeleteTeacher } from "@/app/actions/TeacherManagement/deleteTeacher";
import toast from "react-hot-toast";

interface DeleteTeacherProp {
    id: number
}
export default function DeleteTeacherProfile({ id }: DeleteTeacherProp) {

    async function DeleteProfile() {
        try {
            if (!confirm('Are you sure you want to delete this event?')) return
            const result = await DeleteTeacher(id)
            toast.success("Teacher Profile Deleted")
        } catch (error: unknown) {
            console.log("error deleting teacher profile", error)
            toast.error("Error Deleting Teacher Profile")
        }

    }

    return (
        <button className="w-20 h-10 bg-green-200 border border-green-500 shadow hover:shadow-black rounded-lg duration-200 transition-all" onClick={DeleteProfile}>
            <span className="text-red-400 text-sm font-bold">DELETE</span>
        </button>
    )
}