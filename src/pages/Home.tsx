import Header from "../sections/Header/Header"
import Hero from "../sections/Hero/Hero"
import Specialties from "../sections/Specialties/Specialties"
import WhyChoose from "../sections/WhyChoose/WhyChoose"
import About from "../sections/About/About"
// import BeforeAfter from "../sections/BeforeAfter/BeforeAfter"
import Testimonials from "../sections/Testimonials/Testimonials"
import FAQ from "../sections/FAQ/FAQ"
import Contact from "../sections/Contact/Contact"
import Footer from "../sections/Footer/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Specialties/>
                <WhyChoose/>
                <About/>
                {/* <BeforeAfter/> */}
                <Testimonials/>
                <FAQ/>
                <Contact/>
            </main>
            <Footer/>
            <FloatingWhatsApp/>
        </>
    )
}