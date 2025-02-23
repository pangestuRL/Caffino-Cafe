import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/HeroSection/Hero"
import About from "./components/OurStory/About"
import Menu from "./components/Menu/Menu"
import Contact from "./components/Follow Us/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  const navLinks = [
    { id: "home", name: "Home"},
    { id: "about", name: "About"},
    { id: "menu", name: "Menu"},
    { id: "contact", name: "Contact"}
  ];
  
  return (
    <div>
      <div>
        <Navbar links={navLinks}/>
        <div id="home"><Hero/></div>
        <div id="about"><About/></div>
        <div id="menu"><Menu/></div>
        <div id="contact"><Contact/></div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
