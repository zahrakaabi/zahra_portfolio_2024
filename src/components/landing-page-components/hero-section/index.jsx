/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages

// UI Local Components
import CtaButton from '../../../shared/components/cta-button';
import Header from '../../../shared/header';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function HeroSection() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.heroContainer} h-full pos-r`}>
      <Header />  

      <div className={`${styles.guides} flex container`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`${styles.heroContent} flex flex-column justify-center pos-r container`}>
        <h1> I&apos;m creative freelancer! </h1>
        <h1> Ask me about web design </h1>
        <h1> and front-end development </h1>

        <div className={`${styles.heroCTABtns} flex`}>
          <button className="border-none pointer" type="button" value="view projects"> <span> View projects </span> </button>
          <button className="border-none pointer bg-none underlined" type="button" value="download cv"> <span> Download CV </span> </button>
        </div>
      </div> 

      <div className={`${styles.scrollDown} pos-r container`}>
        <CtaButton buttonValue='Scroll down' fontSize='1.2rem' bgColor='#FF4D00' color='#ffffff' borderColor='#FF4D00' width='6ch' />
      </div>
    </div>
  )
}

export default HeroSection;