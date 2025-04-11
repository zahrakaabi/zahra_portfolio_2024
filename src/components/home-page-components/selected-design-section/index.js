'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Image from 'next/image';

// Images
import BEAUTY_UI_DESIGN from '../../../assets/images/designs/beauty.gif';
import BUTTON from '../../../assets/images/home-page/services-section/Group.png';

// UI Local Components
import SectionTitle from '../../../shared/components/section-title';
import CtaButton from '../../../shared/components/cta-button';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                          SELECTED DESIGN COMPONENT                         */
/* -------------------------------------------------------------------------- */
function SelectedDesignSection() {
/* ---------------------------------- HOOKS --------------------------------- */

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <section className={`${styles.services} flex container`}>
        <div className={`${styles.descp}`}>
            <SectionTitle sectionTitle='UI Services' />
            <div className={styles.content}>
                <div className={styles.btn}>
                    <h2>Z.</h2>
                    <Image src={BUTTON} alt='services' />
                </div>
                <div>
                    <p> 
                        Beyond just writing code, Zahra brings a passion for design to her work. Driven by a love for creativity, she dove deep into learning how to transform spaces into captivating visuals, turning abstract ideas into functional, beautiful designs that speak to both the mind and the eye.
                    </p>
                    <CtaButton link='/work?filter=design' content='More design' value='design' />
                </div>
            </div>
        </div>
        <div className="w-screen">
            <Image className="w-screen h-auto" src={BEAUTY_UI_DESIGN} alt='ui design of a beauty store (e-commerce)' />
        </div>
    </section>
  )
}

export default SelectedDesignSection;