/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Footer() {
  /* ***************** RENDERING ****************** */
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerContactCredits} container`}>
          <div className={styles.footerCol}>
            <div className={styles.contactLinksList}>
              <ul>
                <li><a href='' target='blank'>Dribbble</a></li>
                <li><a href='' target='blank'>Medium</a></li>
                <li><a href='' target='blank'>Github 1</a></li>
                <li><a href='' target='blank'>Github 2</a></li>
                <li><a href='' target='blank'>LinkedIn</a></li>
              </ul>
            </div>
            <div className={styles.contactLinksList}>
              <span>kaabizahra@gmail.com</span>
            </div>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.fontsCredits}>
              <span>Want to know more?</span>
              <br></br>
              <span>Contact me</span>
            </div>
            <div className={styles.fontsCredits}>
              <a href='/work' target='blank'>Work</a>
              <br></br>
              <a href='/about' target='blank'>About</a>
            </div>
          </div>

          <div className={`${styles.footerCol} flex flex-row items-end justify-between`}>
            <div className={styles.credits}>
              Development by
              <br></br>
              <a href='/about' target="_blank" title='about zahra' rel='noopener noreferrer'>
                zahra kaabi
              </a>
            </div>
            <button type="button">Back to top</button>
          </div>
        </div>
        <h5>GET IN TOUCH</h5>
      </div>
    </footer>
  )
}

export default Footer;