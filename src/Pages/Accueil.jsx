import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Container from "../Components/Container";
import CurriculumVitæ from "../Components/CurriculumVitæ";
import Footer from "../Components/Footer";


function Accueil() {
    return (
      <main>
        {/* Appel du composant Container */}

        {/* Appel du composant Hero */}
        <Hero />
        <Container>
          {/* Appel du composant Projects */}
          <Projects />
        </Container>

        
          {/* Appel du composant CurriculumVitæ */}
          <CurriculumVitæ />


        {/* Appel du composant Footer */}
        <Footer />
      </main>
    );

};

export default Accueil;