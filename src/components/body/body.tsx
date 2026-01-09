import Aos from "aos"
import "aos/dist/aos.css"
import "../../app/landing.css"
import { useEffect } from "react"
export default function Body() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" as any,
        });
    }, []);
    return (
        <>
            <main>
                <section className="video-body">
                    <video src="ASSETS/videos/v1.mp4" autoPlay muted loop />
                    <div className="opacity">
                    </div>
                    <div className="text">
                        <h1 data-aos="fade-down">
                            Ancient Wisdom, Modern Future
                        </h1>
                        <span className="p-1" data-aos="fade-up" data-aos-delay="100">
                            Embrace the path to holistic wellness with
                        </span>
                        <span className="p-2" data-aos="fade-up" data-aos-delay="200">
                            Radharaman Ayurveda Medical College Research Hospital.
                        </span>
                        <button data-aos="zoom-in" data-aos-delay="400">
                            APPLY NOW
                        </button>
                    </div>
                </section>
                <section className="intro" id="Detail">
                    <h3>
                        Why Radharaman Ayurvedic Medical College Research Hospital?
                    </h3>
                    <p data-aos="fade-up" data-aos-delay="200">
                        A Unique Blend Of Tradition And Innovation.
                    </p>
                    <div className="grids">
                        <div data-aos="fade-up" data-aos-delay="0">
                            <div className="item">
                                <div className="imogi">🎓</div>
                                <h3>Faculty</h3>
                                <p>Learn from renowned masters and scholars in the field.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="0">
                            <div className="item">
                                <div className="imogi">🌏</div>
                                <h3>Curriculum</h3>
                                <p>A curriculum that integrates education with experience.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="0">
                            <div className="item">
                                <div className="imogi">🏣</div>
                                <h3>Great Facilities</h3>
                                <p>Modern labs, a vast library, and serene learning spaces.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="0">
                            <div className="item">
                                <div className="imogi">👥</div>
                                <h3>Holistic Student Life</h3>
                                <p>Yoga, meditation, and community events for balanced growth.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="info" id="About">
                    <h3 data-aos="fade-up">
                        About Us
                    </h3>
                    <div className="info-college">
                        <div data-aos="fade-up">
                            <div className="info-main" id="College">
                                <div className="media2">
                                    <img src="ASSETS/image/download.png" alt="Radharaman Ayurveda Medical College building" />
                                </div>
                                <div className="para2">
                                    <h4 data-aos="fade-up">Radharaman Ayurveda Medical College Research Hospital</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">The group is well known for innovation and academic excellence. RGI combines best of both the
                                        worlds. Here the technology, individuality & independence of the west are blended in right
                                        proportion with the culture, traditions & sensitivity of the east. The success story of
                                        Radharaman Group of Institutes begins in the year 2003 when the Typasya Education Society
                                        launched its first Medical College i.e.Radharaman Ayurveda Medical College Research Hospital
                                    </p>
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
                                    <h4>
                                        Principal's Desk
                                    </h4>
                                    <p data-aos="fade-up" data-aos-delay="50">
                                        Let me welcome you to our fold! Radharaman Ayurved Medical College Research Hospital, Bhopal is one of the reputed private Ayurvedic institution of Radharaman Group, Affiliated to Madhya Pradesh Medical Science University, Jabalpur. Our institution’s main objective is to deliver highest standard of education in the field of Ayurveda and as value added knowledge of yoga and integrative medicine. Our college is attached with 100 bedded hospitals with a complementary approach of Ayurveda and modern medicine. </p>
                                    <p data-aos="fade-up" data-aos-delay="50">
                                        The real strength of the Institute is highly qualified, experienced and dedicated teachers with supporting technical and excellent staff, best available infrastructure and well-behaved students. I invite the aspiring students and their parents to get started today by our campus to select the best of the educational options.
                                        I wish you all the best!
                                    </p>
                                    <h6><b>Dr. (Prof.) Bhupendra Kumar Mishra</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="update" id="Events">
                    <h3 data-aos="fade-up">News&Events</h3>
                    <div className="update-body">
                        <div data-aos="fade-up">
                            <div className="update-card">
                                <div className="media-card">
                                    <img src="ASSETS/image/528649719_1213503050793366_9072583007387189483_n.jpg" alt="Students at World Breastfeeding Week 2025 event" />
                                    <div className="parag">
                                        <h4>World Breastfeeding Week 2025</h4>
                                        <p>On the occasion of World Breastfeeding Week 2025, Radharaman Institute of Nursing,
                                            Bhopal's B.Sc. Nursing and GNM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="update-card">
                                <div className="media-card">
                                    <img src="ASSETS/image/rj-green.jpg" alt="Tree plantation programme with MY FM's RJ Geet" />
                                    <div className="parag">
                                        <h4>
                                            Tree plantation programme
                                        </h4>
                                        <p>Tree plantation programme concluded at Radharaman Ayurveda College campus, MY FM's RJ
                                            Geet
                                            was present.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="update-card">
                                <div className="media-card">
                                    <img src="ASSETS/image/pcod.jpg" alt="PCOD talk show for students" />
                                    <div className="parag">
                                        <h4>Talk Show</h4>
                                        <p>Radharaman Ayurvedic College organised a PCOD talk show where students learnt about the
                                            causes, symptom and treatment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="update-card">
                                <div className="media-card">
                                    <img src="ASSETS/image/competation.jpg" alt="Inter-state Dance Competition at Radharaman" />
                                    <div className="parag">
                                        <h4>Inter-state Dance Competation</h4>
                                        <p>A wonderful confluence of culture and art at the Radharaman Interstate Dance Competition!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}