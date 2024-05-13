/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import HeroSection from '../components/landing-page-components/hero-section';
import AboutMeSection from '../components/landing-page-components/about-me-section';
import SelectedWorkSection from '../components/selected-work-section';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  /* ***************** RENDERING ****************** */
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SelectedWorkSection />
    </main>
  );
}

export default Home;