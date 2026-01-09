'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function loginAdmin(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    if (!username || !password) {
        return { error: 'Please provide both username and password' }
    }

    try {
        console.log('Login attempt for:', username)
        const admin = await prisma.admin.findUnique({
            where: { username },
        })
        console.log('Found admin user:', admin)

        if (!admin || admin.password.trim() !== password.trim()) { // Note: In production, verify hash
            console.log('Password mismatch or user not found')
            console.log('Input password:', password)
            console.log('Stored password:', admin?.password)
            return { error: 'Invalid credentials' }
        }

        // Set a simple session cookie
        const cookieStore = await cookies()
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })

        return { success: true }
    } catch (error) {
        console.error('Login error:', error)
        return { error: 'Something went wrong. Please try again.' }
    }
}

export async function logoutAdmin() {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    redirect('/admin/login')
}
