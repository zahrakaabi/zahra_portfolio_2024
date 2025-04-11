'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Images
import FREE_PALESTINE from '@/assets/images/home-page/hero-section/palestin_icon.svg';

// UI Local Componnets
import Magnetic from '@/shared/components/magnetic';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function HeroSection() {
  /* ------------------- HOOKS -------------------- */
  const router = useRouter();

  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.heroContainer} flex items-center container`}>
      <div className={`${styles.heroContent} flex flex-column justify-center`}>
        <span className='flex items-end'>
          <Image src={FREE_PALESTINE} alt='free Palestine' />
          <span>Zahra Kaabi</span>
        </span>
        <div className={styles.heroText}>
          <span>UI WEB DESIGNER</span>
          <span className={styles.indent}>AND FRONT-END</span>
          <span className='flex flex-wrap'>
            DEVELOPER 
            <div className={`${styles.ctaBtns} flex items-center`}>
              <Magnetic>
              <button 
                  className='border-none pointer flex flex-column justify-center items-center animated' 
                  type='button' 
                  value='view-projects'
                  onClick={() => router.push('/work')}
                > 
                  <span>View work</span>
                </button>
              </Magnetic>
              <Magnetic>
                <button 
                  className='border-none pointer bg-none underlined' 
                  type='button' 
                  value='download-cv'
                >
                  Download CV
                </button>
              </Magnetic>
            </div>
          </span>
        </div>
      </div> 

      <div className={`${styles.scrollDown} flex justify-between w-screen container`}>
        <h6>Scroll down</h6>
        <h6>Based in&nbsp;<span>tunisia</span></h6>
      </div>
    </div>
  )
}

export default HeroSection;