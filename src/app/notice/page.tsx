import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"

export default function noticess(){
    return(
        <>
        <Navbar/>
        <div className="w-dvw h-dvh bg-amber-300 flex justify-center items-center">
            <h1>notice</h1>
            <p>Here will be noticess</p>
        </div>
        <Footer/>
        </>
    )
}