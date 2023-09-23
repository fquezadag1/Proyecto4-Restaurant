import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Contact } from "./routes/Contact"
import { Container } from 'react-bootstrap';
import { Footer } from "./components/Footer"
import './App.css'

export const App = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/proyecto-4/" element={<Home />} />
                    <Route path="/proyecto-4/about" element={<About />} />
                    <Route path="/proyecto-4/contact" element={<Contact />} />
                </Routes>
            </Container>
            <Footer />
        </>
    )
}