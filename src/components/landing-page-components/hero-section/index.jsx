/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Image from 'next/image';

// Images
import FREE_PALESTINE from '@/assets/images/home-page/hero-section/palestin_icon.svg';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function HeroSection() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.heroContainer} container`}>
      <div className={`${styles.heroContent} flex flex-column justify-center`}>
        <span className='flex items-end'>
          <Image src={FREE_PALESTINE} alt='free_palestine' />
          <span> Zahra Kaabi </span>
        </span>
        <h1> UI WEB DESIGNER </h1>
        <h1> AND FRONT-END </h1>
        <div className='flex flex-wrap'>
          <h1> DEVELOPER </h1>
          <div className={`${styles.ctaBtns} flex items-center`}>
            <button className='border-none pointer flex flex-column justify-center items-center' type='button' value='view-projects'> <span> View </span> <span> projects </span> </button>
            <button className='border-none pointer bg-none underlined' type='button' value='download-cv'> Download CV </button>
          </div>
        </div>
      </div> 

      <div className={`${styles.scrollDown} flex justify-between`}>
        <h6> SCROLL DOWN </h6>
        <h6> BASED IN <span> TUNISIA </span> </h6>
      </div>
    </div>
  )
}

export default HeroSection;