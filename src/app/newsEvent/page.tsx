import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"

export default function NewsEvent(){
    return(
        <>
        <Navbar/>
        <div className="w-dvw h-dvh bg-amber-300 flex justify-center items-center">
            <h1>News and Event</h1>
            <p>Here will be News and Event</p>
        </div>
        <Footer/>
        </>
    )
}