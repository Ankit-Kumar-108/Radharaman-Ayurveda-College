'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic' // <--- 1. Import dynamic
import { getNotices } from '@/app/actions/NoticeManagement/notice'
import { createNotice } from '@/app/actions/NoticeManagement/createNotice'
import { deleteNotice } from '@/app/actions/NoticeManagement/deleteNotice'
import { Trash2, X } from 'lucide-react' 

// 2. DYNAMIC IMPORT (Fixes DOMMatrix Error)
// This forces the PDF component to only load in the browser, not the server.
const PdfThumbnail = dynamic(() => import('@/components/pdfViewer/pdf'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-200 animate-pulse" />
});

interface Notice {
    id: number
    title: string
    imageUrl: string 
    createdAt: Date 
}

export default function Noticet() {
    const [events, setEvents] = useState<Notice[]>([])
    const [loading, setLoading] = useState(true)
    const [isCreating, setIsCreating] = useState(false)
    const [selectedFile, setSelectedFile] = useState<{url: string, type: 'img' | 'pdf'} | null>(null)

    async function fetchNotice() {
        setLoading(true)
        const result = await getNotices()
        if (result.success && result.data) {
            setEvents(result.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchNotice()
    }, [])

    async function handleCreate(formData: FormData) {
        setIsCreating(true)
        const result = await createNotice(formData) 
        if (result.success) {
            fetchNotice()
            const form = document.getElementById('create-event-form') as HTMLFormElement
            form?.reset()
        } else {
            alert(result.error)
        }
        setIsCreating(false)
    }

    async function handleDelete(id: number) {
        if (!confirm('Are you sure you want to delete this event?')) return
        const result = await deleteNotice(id)
        if (result.success) {
            setEvents(events.filter(e => e.id !== id))
        } else {
            alert(result.error)
        }
    }

    const isPdf = (url: string) => url?.toLowerCase().endsWith('.pdf');

    const openFullScreen = (url: string) => {
        setSelectedFile({
            url,
            type: isPdf(url) ? 'pdf' : 'img'
        })
    }

    return (
        <div className="space-y-6 flex flex-col justify-center items-center gap-12 min-h-screen pb-10">
            
            {/* --- FULL SCREEN MODAL --- */}
            {selectedFile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <button 
                        onClick={() => setSelectedFile(null)}
                        className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg z-50"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl relative flex items-center justify-center">
                        {selectedFile.type === 'pdf' ? (
                            <iframe src={selectedFile.url} className="w-full h-full" title="PDF Viewer" />
                        ) : (
                            <img src={selectedFile.url} alt="Full Screen" className="max-w-full max-h-full object-contain" />
                        )}
                    </div>
                </div>
            )}

            <h1 className="text-3xl font-bold text-emerald-800 mt-12">Notice Board & Events</h1>

            {/* --- Upload Form --- */}
            <div className="rounded-lg bg-white p-8 shadow-md w-full max-w-md border-t-4 border-emerald-500">
                <h2 className="mb-6 text-xl font-semibold text-center text-gray-700">Upload New Notice</h2>
                <form id="create-event-form" action={handleCreate} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">Notice Title</label>
                        <input name="title" type="text" required className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">Attachment</label>
                        <input type="file" name="photo" accept="image/*,application/pdf" required className="w-full border p-2 rounded bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
                    </div>
                    <button type="submit" disabled={isCreating} className="w-full rounded-md bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-sm">
                        {isCreating ? 'Uploading...' : 'Post Notice'}
                    </button>
                </form>
            </div>

            {/* --- Display Grid --- */}
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Recent Notices</h2>
                
                {loading ? <p className="text-center text-gray-500">Loading notices...</p> : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event) => (
                            <div key={event.id} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-lg text-gray-800 line-clamp-2">{event.title}</h3>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                                        {new Date(event.createdAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {event.imageUrl && (
                                    <div 
                                        onClick={() => openFullScreen(event.imageUrl)}
                                        className="relative h-72 w-full overflow-hidden rounded-lg bg-gray-100 border border-gray-200 mb-4 group cursor-pointer"
                                    >
                                        {isPdf(event.imageUrl) ? (
                                            <PdfThumbnail url={event.imageUrl} />
                                        ) : (
                                            <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        )}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">Click to Expand</span>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto flex justify-end pt-2 border-t border-gray-50">
                                    <button onClick={() => handleDelete(event.id)} className="flex items-center gap-1 text-red-500 text-sm px-3 py-1.5 rounded hover:bg-red-50 transition-colors">
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}