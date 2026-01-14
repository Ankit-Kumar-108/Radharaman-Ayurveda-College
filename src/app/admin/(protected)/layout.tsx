import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logoutAdmin } from '@/app/actions/auth'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session) {
        redirect('/admin/login')
    }

    return (
        <div className="flex h-screen bg-[#d9efd0]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#012301] border-r-blue-500 border-2">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">RAMCRH Admin</h1>
                </div>
                <nav className="mt-6 px-4">
                    <div className="space-y-2">
                        <Link href="/" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            Back to Home
                        </Link>
                        <Link href="/admin/dashboard" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            Dashboard
                        </Link>
                        <Link href="/admin/teachers" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            Teachers
                        </Link>
                        <Link href="/admin/students" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            Students
                        </Link>
                        <Link href="/admin/notices" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            Notices
                        </Link>
                        <Link href="/admin/newsevent" className="block rounded-lg px-4 py-2 text-green-300 hover:bg-white/10">
                            News & Events
                        </Link>
                    </div>

                    <div className="mt-10 border-t pt-4 border-blue-500 fixed bottom-50 w-50  h-fit">
                        <form action={logoutAdmin}>
                            <button type="submit" className="w-full rounded-lg px-6 py-2 text-left text-red-600 hover:bg-red-50/10 ">
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
