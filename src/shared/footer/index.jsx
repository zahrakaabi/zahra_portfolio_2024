/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Footer() {
  /* ***************** RENDERING ****************** */
  return (
    <footer className={`${styles.footerContainer} container`}>
        <div className={styles.footerContent}>
            <div className={`${styles.socials} flex flex-wrap justify-between items-end`}>
                <h5> Copyright © Zahra Portfolio | Designed & Developed by ZAHRA KAABI </h5>
                <ul className='flex flex-wrap'>
                  <li> <a href='' target='blank'> DRIBBBLE </a> </li>
                  <li> <a href='' target='blank'> MEDIUM </a> </li>
                  <li> <a href='' target='blank'> GITHUB 1 </a> </li>
                  <li> <a href='' target='blank'> GITHUB 2 </a> </li>
                  <li> <a href='' target='blank'> LINKEDIN </a> </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;