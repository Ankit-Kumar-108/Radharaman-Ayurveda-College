import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"

export default function Notice(){
    return(
        <>
        <Navbar/>
        <div className="w-dvw h-dvh bg-amber-300 flex justify-center items-center">
            <h1>Notice</h1>
            <p>Here will be notice</p>
        </div>
        <Footer/>
        </>
    )
}