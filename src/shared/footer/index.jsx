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
        <div className={`${styles.footerContent} flex justify-between `}>
            <div className={styles.footerEmail}>
                <h4> Let&apos;s get in touch </h4>
                <h6> kaabizahra@gmail.com </h6>
            </div>
        </div>
    </footer>
  )
}

export default Footer;