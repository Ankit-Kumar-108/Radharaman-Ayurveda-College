'use client'

import { useState, useEffect } from 'react'
import { getNewsEvents } from '@/app/actions/NewsEventManagement/newsevent'
import { createNewsEvent } from '@/app/actions/NewsEventManagement/createNewsEvent'
import { deleteNewsEvent } from '@/app/actions/NewsEventManagement/deleteNewsEvent'

interface NewsEvent {
    id: number
    title: string
    content: string
    imageUrl: string
    createdAt: Date 
}

export default function NewsEventManagement() {
    const [events, setEvents] = useState<NewsEvent[]>([])
    const [loading, setLoading] = useState(true)
    const [isCreating, setIsCreating] = useState(false)

    async function fetchEvents() {
        setLoading(true)
        const result = await getNewsEvents()
        if (result.success && result.data) {
            setEvents(result.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    async function handleCreate(formData: FormData) {
        setIsCreating(true)
        const result = await createNewsEvent(formData) 
        if (result.success) {
            fetchEvents()
            const form = document.getElementById('create-event-form') as HTMLFormElement
            form?.reset()
        } else {
            alert(result.error)
        }
        setIsCreating(false)
    }

    async function handleDelete(id: number) {
        if (!confirm('Are you sure you want to delete this event?')) return
        const result = await deleteNewsEvent(id)
        if (result.success) {
            setEvents(events.filter(e => e.id !== id))
        } else {
            alert(result.error)
        }
    }

    return (
        <div className="space-y-6 flex flex-col justify-center items-center gap-12 bg-green-200">
            <h1 className="text-3xl font-bold dark:text-black mt-12 ">News & Events Management</h1>

            <div className="rounded-lg bg-white p-6 shadow-md  w-87 h-110">
                <h2 className="mb-4 text-xl font-semibold text-center">Create New Event</h2>
                <form id="create-event-form" action={handleCreate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input name="title" type="text" required className="mt-1 block w-full rounded-md border border-gray-300 p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Content</label>
                        <textarea name="content" required className="mt-1 block w-full rounded-md border border-gray-300 p-2" rows={3}></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">News&Event Photo</label>
                        <input type="file" name="photo" accept="image/*" required className="w-full border p-2 rounded bg-gray-50" />
                    </div>
                    <button type="submit" disabled={isCreating} className="rounded-md bg-indigo-600 px-4 py-2  hover:bg-indigo-700 disabled:opacity-50 text-white">
                        {isCreating ? 'Creating...' : 'Post Event'}
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-center pb-12">Existing Events</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : events.length === 0 ? (
                    <p className="text-gray-500">No events found.</p>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-6">
                        {events.map((event) => (
                            <div key={event.id} className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                                <h3 className="font-bold dark:text-white">{event.title}</h3>
                                {event.imageUrl && (
                                    <div className="mt-2 relative h-40 w-full overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
                                        <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
                                    </div>
                                )}
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{event.content}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{new Date(event.createdAt).toLocaleDateString()}</span>
                                    <button onClick={() => handleDelete(event.id)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
