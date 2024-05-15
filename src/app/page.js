/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import HeroSection from '../components/landing-page-components/hero-section';
import SelectedWorkSection from '../components/selected-work-section';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  /* ***************** RENDERING ****************** */
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection />
    </main>
  );
}

export default Home;