import { GetTeacher } from "../actions/TeacherManagement/teacher";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import "../landing.css"

export default async function Faculty() {
    // 1. Fetch data directly on the server
    const teachers = await GetTeacher() || []

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">

                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Our Faculty Members
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}