/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Package
import Image from 'next/image';

// Images
import ABOUT_ARROW from '@/assets/images/about-section/about-arrow.svg';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function AboutMeSection() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.aboutMeContainer} flex justify-between container`}>
      <h1 className={`${styles.aboutMeTitle} pos-r`}> Intro </h1>
      <div className={styles.aboutMeContent}>
        <h1> Together towards a journey of innovation, helping YOU stand out in the digital era. </h1>
        <p> Let&apos;s collaborate to design and develop FUTURE-ORIENTED website. </p>
        <button className='bg-none border-none pointer flex items-end' type='button' value='about'>
          <span className='underlined'> KNOW MORE ABOUT ZAHRA </span>
          <Image src={ABOUT_ARROW} alt='about-zahra' />
        </button>
      </div>
    </div>
  )
}

export default AboutMeSection;