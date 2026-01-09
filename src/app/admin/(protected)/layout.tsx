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
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md dark:bg-gray-800">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">RAMCRH Admin</h1>
                </div>
                <nav className="mt-6 px-4">
                    <div className="space-y-2">
                        <Link href="/admin/dashboard" className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700">
                            Dashboard
                        </Link>
                        <Link href="/admin/students" className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700">
                            Students
                        </Link>
                        <Link href="/admin/notices" className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700">
                            Notices & News
                        </Link>
                    </div>

                    <div className="mt-10 border-t pt-4 dark:border-gray-700">
                        <form action={logoutAdmin}>
                            <button type="submit" className="w-full rounded-lg px-4 py-2 text-left text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8 text-gray-800 dark:text-gray-100">
                {children}
            </main>
        </div>
    )
}
