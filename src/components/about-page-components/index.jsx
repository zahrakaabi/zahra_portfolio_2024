'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages

// _helpers
import { PACKAGE_OFFER_DETAILS } from '@/_helpers/_APIs/_package-offer-details';

// UI Local Components
import BlurImage from '@/_helpers/blur-image';

// Images
import SAYING_HELLO_1 from '@/assets/images/about-page/saying_hello_3.gif'; 

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                               ABOUT COMPONENT                              */
/* -------------------------------------------------------------------------- */
function About({ handleMood, mood }) {
/* -------------------------------- CONSTANTS ------------------------------- */
  const { text_color, background_color, image } = mood || {
    $id: '0000000001moodOpetions',
    text_color: '#242424',
    background_color: '#fff',
    image: SAYING_HELLO_1 // Default mood
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <div 
        className={`${styles.aboutPage} flex items-center flex-column container`}
        style={{ backgroundColor: background_color, color: text_color }} 
      >
        <button 
          className={styles.changeMood}
          style={{ borderColor: text_color, color: text_color }} 
          type='button' 
          value='change the mood'
          onClick={handleMood}
        > 
          change the mood
        </button>
        <h1 className={`${styles.heading} text-center`}> Founded with the HOPE to CHANGE an ENTIRE INDUSTRY </h1>
        <div className={`${styles.sayingHello} flex flex-column items-start`}>
          <p className='flex items-end'> 
            <span className='d-block' style={{ backgroundColor: text_color }}></span> 
            I&apos;m Zahra 
          </p>
          <BlurImage image={image} />
        </div>
        <p className='text-center'>
          Zahra Kaabi is a YOUNG Front-end Developer and a UI Web Designer GIRL. “I always loved the combination of 
          design and web development, and i always wished to get involved and adding value to a website” SHE SAID.
        </p>
        <div className={`${styles.packageWrapper} w-screen`}>
          <h2> I can help you with ... </h2>
          <div className={`${styles.packageContainer} flex flex-wrap`}>
            {PACKAGE_OFFER_DETAILS.map((item) => {
              const { $id, order, title, description } = item;
              return (
                <div key={$id} className={styles.package}>
                  <div style={{ borderBottomColor: text_color, color: text_color }}> {order} </div>
                  <h3 className='flex items-center'> 
                    {order === '03' ? <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path style={{ fill: text_color }} d="M0 15C4.69017 14.3531 14.4024 14.9617 14.9736 1.29215C14.9743 0.82752 14.9859 0.393604 15 0C15 0.444315 14.9911 0.874883 14.9736 1.29215C14.967 6.33626 16.2652 15 30 15C25.1667 15.5 15 15 15 30C14.5 25.1667 15 15 0 15Z" />
                    </svg> : ''}
                    {title} 
                  </h3>
                  <p> {description} </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default About;