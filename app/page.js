import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

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
