import Contact from "./Component/Contact/Contact";
import Cursor from "./Component/Cursor/Cursor";
import Hero from "./Component/Hero/Hero";
import NavBar from "./Component/NavBar/NavBar";
import Parallax from "./Component/Parallax/Parallax";
import Portfolio from "./Component/Portfolio/Portfolio";
import Services from "./Component/Services/Services";
import "./app.scss";

const App = () => {
  return( <div>
     <Cursor/>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
      </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="contact">
      <Contact/>
    </section>
    
  </div>
  );
};

export default App;
