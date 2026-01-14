'use client'

import Aos from "aos"
import "aos/dist/aos.css"
import "../../app/landing.css"
import { useEffect, useState } from "react"
// 1. IMPORT DYNAMIC TO FIX "CANVAS" ERROR
import dynamic from 'next/dynamic'
import { getNewsEvents } from "@/app/actions/NewsEventManagement/newsevent"
import { getNotices } from "@/app/actions/NoticeManagement/notice"
import { deleteNotice } from "@/app/actions/NoticeManagement/deleteNotice"
import { Trash2, X } from "lucide-react"

// 2. DYNAMICALLY LOAD PDF COMPONENT (Server Side Rendering = False)
const PdfThumbnail = dynamic(() => import('../pdfViewer/pdf'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center text-xs text-gray-400">Loading PDF...</div>
});

interface NewsEvent {
    id: number
    title: string
    content: string
    imageUrl: string
    createdAt: Date
}

interface Notice {
    id: number
    title: string
    imageUrl: string
    createdAt: Date
}

export default function Body() {
    const [Data, setData] = useState<NewsEvent[]>([])
    const [Notice, setNotice] = useState<Notice[]>([])

    // State for Full Screen Modal
    const [selectedFile, setSelectedFile] = useState<{ url: string, type: 'img' | 'pdf' } | null>(null)

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" as any,
        });
    }, []);

    // --- FETCH DATA ---
    useEffect(() => {
        const FetchNotice = async () => {
            const notice = await getNotices()
            if (notice.success && notice.data) {
                setNotice(notice.data)
            }
        }
        FetchNotice()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const events = await getNewsEvents()
            if (events.success && events.data) {
                setData(events.data)
            }
        }
        fetchData()
    }, [])

    // --- HANDLERS ---
    async function handleDelete(id: number) {
        if (!confirm('Are you sure you want to delete this notice?')) return
        const result = await deleteNotice(id)
        if (result.success) {
            setNotice(Notice.filter(e => e.id !== id))
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
        <div>
            {/* --- FULL SCREEN PREVIEW MODAL --- */}
            {selectedFile && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <button
                        onClick={() => setSelectedFile(null)}
                        className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg z-10000 transition-transform hover:scale-110"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl relative flex items-center justify-center">
                        {selectedFile.type === 'pdf' ? (
                            <iframe src={selectedFile.url} className="w-full h-full" title="PDF Viewer" />
                        ) : (
                            <img src={selectedFile.url} alt="Full Screen" className="max-w-full max-h-full object-contain" />
                        )}
                    </div>
                </div>
            )}

            <main>
                <section className="video-body">
                    <video src="ASSETS/videos/v1.mp4" autoPlay muted loop />
                    <div className="opacity"></div>
                    <div className="text">
                        <h1 data-aos="fade-down">Ancient Wisdom, Modern Future</h1>
                        <span className="p-1" data-aos="fade-up" data-aos-delay="100">
                            Embrace the path to holistic wellness with
                        </span>
                        <span className="p-2" data-aos="fade-up" data-aos-delay="200">
                            Radharaman Ayurveda Medical College Research Hospital.
                        </span>
                        <button data-aos="zoom-in" data-aos-delay="400">APPLY NOW</button>
                    </div>
                </section>

                <section className="intro" id="Detail">
                    <h3>Why Radharaman Ayurvedic Medical College Research Hospital?</h3>
                    <p data-aos="fade-up" data-aos-delay="200">A Unique Blend Of Tradition And Innovation.</p>
                    <div className="grids">
                        <div data-aos="fade-up" data-aos-delay="0"><div className="item"><div className="imogi">🎓</div><h3>Faculty</h3><p>Learn from renowned masters and scholars in the field.</p></div></div>
                        <div data-aos="fade-up" data-aos-delay="0"><div className="item"><div className="imogi">🌏</div><h3>Curriculum</h3><p>A curriculum that integrates education with experience.</p></div></div>
                        <div data-aos="fade-up" data-aos-delay="0"><div className="item"><div className="imogi">🏣</div><h3>Great Facilities</h3><p>Modern labs, a vast library, and serene learning spaces.</p></div></div>
                        <div data-aos="fade-up" data-aos-delay="0"><div className="item"><div className="imogi">👥</div><h3>Holistic Student Life</h3><p>Yoga, meditation, and community events for balanced growth.</p></div></div>
                    </div>
                </section>

                <section className="info" id="About">
                    <h3 data-aos="fade-up">About Us</h3>
                    <div className="info-college">
                        <div data-aos="fade-up">
                            <div className="info-main" id="College">
                                <div className="media2">
                                    <img src="ASSETS/image/download.png" alt="Radharaman Ayurveda Medical College building" />
                                </div>
                                <div className="para2">
                                    <h4 data-aos="fade-up">Radharaman Ayurveda Medical College Research Hospital</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">The group is well known for innovation and academic excellence. RGI combines best of both the worlds. Here the technology, individuality & independence of the west are blended in right proportion with the culture, traditions & sensitivity of the east. The success story of Radharaman Group of Institutes begins in the year 2003 when the Typasya Education Society launched its first Medical College i.e.Radharaman Ayurveda Medical College Research Hospital </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-body">
                        <div data-aos="fade-up">
                            <div className="media-main">
                                <div className="media1">
                                    <img src="ASSETS/image/principle.png" alt="Dr. (Prof.) Bhupendra Kumar Mishra, Principle RAMRCh" />
                                </div>
                                <div className="para">
                                    <h4>Principal's Desk</h4>
                                    <p data-aos="fade-up" data-aos-delay="50">Let me welcome you to our fold! Radharaman Ayurved Medical College Research Hospital, Bhopal is one of the reputed private Ayurvedic institution of Radharaman Group, Affiliated to Madhya Pradesh Medical Science University, Jabalpur. Our institution’s main objective is to deliver highest standard of education in the field of Ayurveda and as value added knowledge of yoga and integrative medicine. Our college is attached with 100 bedded hospitals with a complementary approach of Ayurveda and modern medicine.</p>
                                    <p data-aos="fade-up" data-aos-delay="100">
                                        The real strength of the Institute is highly qualified, experienced and dedicated teachers with supporting technical and excellent staff, best available infrastructure and well-behaved students. I invite the aspiring students and their parents to get started today by our campus to select the best of the educational options. I wish you all the best!
                                    </p>
                                    <h6><b>Dr. (Prof.) Bhupendra Kumar Mishra</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- NOTICES SECTION --- */}
                <section className="update" id="Events">
                    <h3 data-aos="fade-up">Notices</h3>

                    {/* Grid Container for Notices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 mb-10 w-full">
                        {Notice.map((notice) => (
                            <div key={notice.id} data-aos="fade-up" data-aos-delay="50" className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col ">

                                {notice.imageUrl && (
                                    <div
                                        onClick={() => openFullScreen(notice.imageUrl)}
                                        className="relative h-auto min-h-64 w-full overflow-hidden rounded-lg bg-gray-100 border border-gray-200 mb-4 group cursor-pointer flex justify-center items-center"
                                    >
                                        {isPdf(notice.imageUrl) ? (
                                            <PdfThumbnail url={notice.imageUrl} />
                                        ) : (
                                            <img
                                                src={notice.imageUrl}
                                                alt={notice.title}
                                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        )}
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
                                                Click to Open
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-xs p-0" style={{ fontSize: "18px", padding: "0px" }}>{notice.title}</h3>
                                    <span className="text-xs text-black bg-gray-100 rounded whitespace-nowrap">
                                        {new Date(notice.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 data-aos="fade-up">News & Events</h3>
                    <div className="update-body">
                        {Data.map((event) => (
                            <div key={event.id} data-aos="fade-up">
                                <div className="update-card">
                                    <div className="media-card">
                                        <img src={event.imageUrl} />
                                        <div className="parag">
                                            <h4><b>{event.title}</b></h4>
                                            <p>{event.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div >
    )
}