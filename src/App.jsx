import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Showcase from "./components/Showcase"
import VisaoProduto from "./components/Visaoproduto"
import Performace from "./components/Performace"
import Features from "./components/Features"
import Highlights from "./components/Highlights";
import Footer from "./components/Footer"

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
