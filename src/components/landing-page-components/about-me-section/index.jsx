/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages

// UI Local Components
import CtaButton from '../../../shared/components/cta-button';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function AboutMeSection() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.aboutMeContainer} flex justify-between container`}>
      <div className={`${styles.aboutMeContent}`}>
        <h1> Together towards helping YOU digitalize and stand out online. </h1>
        <p> Let&apos;s collaborate to design and develop exceptional, out of the ordinary and responsive websites for YOU! </p>
      </div>
      <div className={`${styles.aboutMeCTA} pos-r`}>
        <div className={styles.aboutMeBtn}>
          <CtaButton buttonValue='About me' fontSize='2rem' bgColor='transparent' color='#1C1D20' borderColor='#1C1D20' showArrow />
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection;