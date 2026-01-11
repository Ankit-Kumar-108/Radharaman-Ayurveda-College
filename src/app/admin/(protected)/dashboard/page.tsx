import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
    const studentCount = await prisma.student.count()
    const noticeCount = await prisma.notice.count()
    const newsCount = await prisma.newsEvent.count()
    const teacherCount = await prisma.teacher.count()

    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold">Dashboard</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Teacher Stats */}
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">Total Teachers</h3>
                    <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{teacherCount}</p>
                </div>
                {/* Student Stats */}
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">Total Students</h3>
                    <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{studentCount}</p>
                </div>

                {/* Notice Stats */}
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">Active Notices</h3>
                    <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{noticeCount}</p>
                </div>

                {/* News Stats */}
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">News & Events</h3>
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">{newsCount}</p>
                </div>
            </div>

            <div className="mt-10 rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold">Welcome to the RAMCRH Admin Panel</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Select an option from the sidebar to manage students, notices, or news events.
                </p>
            </div>
        </div>
    )
}
