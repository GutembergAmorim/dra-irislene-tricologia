import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Specialties from "./sections/Specialties/Specialties"

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Specialties/>
            </main>
        </>
    )
}