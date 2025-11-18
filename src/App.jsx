import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar"
import Showcase from "./components/Showcase"
import VisaoProduto from "./components/VisaoProduto"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Performace from "./components/Performace"
import Features from "./components/Features"
import Highlights from "./components/Highlights";
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger)

function App() {
 return (
    <main>
      <NavBar />
      <Hero />
      <VisaoProduto />
      <Showcase />
      <Performace />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
