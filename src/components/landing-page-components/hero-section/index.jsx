/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages

// UI Local Components
import Header from '../../../shared/header';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function HeroSection() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={styles.heroContainer}>
      <Header />   
    </div>
  )
}

export default HeroSection;