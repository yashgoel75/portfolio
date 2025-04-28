import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <section id="home"></section>
      <Navbar></Navbar>
      <Hero></Hero>
      <section id="about"></section>
      <About></About>
      <section id="project"></section>
      <Project></Project>
      <section id="contact"></section>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
