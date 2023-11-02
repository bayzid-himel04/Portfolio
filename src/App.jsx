import Hero from "./Component/Hero/Hero";
import NavBar from "./Component/NavBar/NavBar";
import "./app.scss";

const App = () => {
  return <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
      </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Protfolio1</section>
    <section>Protfolio2</section>
    <section>Protfolio3</section>
    <section id="contact">Contact</section>
  </div>;
};

export default App;
