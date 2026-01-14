"use client"
import { GetTeacher } from "@/app/actions/TeacherManagement/teacher";
import Image from "next/image";
import CreateTeacherPage from "./create/createTeacher";
import DeleteTeacherProfile from "./delete/deleteTeacherProfile";
import { useState, useEffect } from "react";

type Teachers = {
  id: number
  email: string
  fullName: string
  createdAt: Date
  dateOfBirth: Date
  mobileNo: string
  whatsappNo: string | null
  gender: string
  localAddress: string
  permanentAddress: string
  fatherName: string
  motherName: string
  highestQualification: string
  experience: string
  photo: string
  aadharNo : string

}
export default function TeachersPage() {
    const [isVisible, setIsVisible] = useState(true)
    const [teachers, setTeachers] = useState<Teachers[]>([])

    useEffect(() => {
        const FetchTeacher = async() =>{
            const Data = await GetTeacher()
            setTeachers(Data || [])
        }
        FetchTeacher()
    }, [])

    return (
        <div className="container mx-auto px-4 py-8 bg-[#d9efd0] flex flex-col justify-center items-center">

        {isVisible?(
            <button className="w-56 h-12 rounded-lg text-white font-bold bg-green-500 hover:bg-green-600 transition-all duration-200" onClick={() =>(setIsVisible(false))}>
                Create New Teacher Profile
            </button>
        ):(
            <CreateTeacherPage OnClose={() => (setIsVisible(true))} />
        )}

            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 mt-30">
                Faculties
            </h1>

            {teachers.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    <p>No faculty members found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 w-full bg-gray-100 overflow-hidden" style={{ position: 'relative' }}>
                                <Image
                                    src={teacher.photo}
                                    alt={teacher.fullName}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-5">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">
                                    {teacher.fullName}
                                </h2>
                                <p className="text-sm font-semibold text-blue-600 mb-3">
                                    {teacher.highestQualification}
                                </p>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Experience:</span>
                                        <span>{teacher.experience}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Email:</span>
                                        <span className="truncate">{teacher.email}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Phone:</span>
                                        <span>{teacher.mobileNo}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Aadhar No:</span>
                                        <span>{teacher.aadharNo}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Father&apos;s Name:</span>
                                        <span>{teacher.fatherName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Mother&apos;s Name:</span>
                                        <span>{teacher.motherName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Gender:</span>
                                        <span>{teacher.gender}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">WhatsApp No:</span>
                                        <span>{teacher.whatsappNo}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Date Of Birth:</span>
                                        <span>{teacher.dateOfBirth.toDateString()}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Local Address:</span>
                                        <span>{teacher.localAddress}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Permanent Address:</span>
                                        <span>{teacher.permanentAddress}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Joined:</span>
                                        <span>{teacher.createdAt.toDateString()}</span>
                                    </div>
                                    <div className="relative left-60">
                                        <DeleteTeacherProfile id={teacher.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}