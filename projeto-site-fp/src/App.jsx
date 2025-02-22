import { useState } from 'react'
import './App.css'
import Header from "./components/Header/header";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Help from "./components/Help/help";
import HelpAreas from "./components/HelpAreas/help-areas";
import Benefits from "./components/Benefits/benefits";
import Doubts from "./components/Doubts/doubts";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Services />
      <Help />
      <Benefits />
      <HelpAreas />
      <Doubts />
      <Contact />
      <Footer />
    </>
  )
}

export default App
