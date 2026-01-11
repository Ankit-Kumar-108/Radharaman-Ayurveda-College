"use client"
export default function Footer() {

    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-section about">
                        <img src="/ASSETS/logo.png" alt="College Logo" className="footer-logo" />
                        <p>
                            Radharaman Ayurveda Medical College Research Hospital is dedicated to imparting ancient Ayurvedic
                            wisdom with a modern approach to create future leaders in healthcare.
                        </p>
                        <div className="socials">
                            <a href="https://www.facebook.com/RGIbhopalof" target="_blank" rel="noopener noreferrer"><img
                                src="/ASSETS/image/facebook-svgrepo-com.svg" alt="Visit our Facebook page" /></a>
                            <a href="https://x.com/rgi1bhopal" target="_blank" rel="noopener noreferrer"><img
                                src="/ASSETS/image/twitter-color-svgrepo-com.svg" alt="Visit our X (Twitter) page" /></a>
                            <a href="https://www.instagram.com/rgibhopalofficial/" target="_blank"
                                rel="noopener noreferrer"><img src="/ASSETS/image/instagram-1-svgrepo-com.svg"
                                    alt="Visit our Instagram page" /></a>
                            <a href="https://www.linkedin.com/school/radharaman-institute-of-technology-and-science/posts/?feedView=all"
                                target="_blank" rel="noopener noreferrer"><img src="/ASSETS/image/linkedin-svgrepo-com.svg"
                                    alt="Visit our LinkedIn page" /></a>
                        </div>
                    </div>
                    <div className="footer-section links-footer">
                        <h4 className="text-center font-bold">Quick Links</h4>
                        <ul>
                            <li><a href="#About">About</a></li>
                            <li><a href="#College">College</a></li>
                            <li><a href="#Hospital">Hospital</a></li>
                            <li><a href="/faculty">Faculty</a></li>
                            <li><a href="#Events">Events</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact-footer">
                        <h4 className="font-bold">Contact Us</h4>
                        <span> Radharaman Ayurveda Medical College, Fatehpur Dobra,
                            Ratibad, Bhopal (M.P.)</span>
                        <span>&nbsp; +91-9876543210</span>
                        <span>&nbsp; info@radharamanayurved.com</span>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2026 Radharaman Ayurveda Medical College Research Hospital | All Rights Reserved <a
                        href="https://www.linkedin.com/in/ankit-kumar-98102b24a/" target="_blank"
                        rel="noopener noreferrer">Created By Ankit <img src="/ASSETS/image/linkedin-svgrepo-com.svg" alt="Ankit's LinkedIn Profile" /></a>
                </div>
            </footer>
        </>
    )
}