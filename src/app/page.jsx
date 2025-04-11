/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// UI Local Components
import AboutMeSection from "@/components/home-page-components/about-me-section";
import HeroSection from "@/components/home-page-components/hero-section";
import SelectedDesignSection from "@/components/home-page-components/selected-design-section";
import SelectedWorkSection from "@/components/home-page-components/selected-work-section";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  /* ***************** RENDERING ****************** */
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SelectedWorkSection />
      <SelectedDesignSection />
    </>
  );
}

export default Home;