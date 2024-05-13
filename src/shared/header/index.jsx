/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Header() {
  /* ***************** RENDERING ****************** */
  return (
    <div className={`${styles.headerContainer} flex justify-between items-center container`}>
      <div className={`${styles.logo} flex flex-column`}>
        <h6> Zahra kaabi </h6>
        <h6 className="underlined"> Junior front-end developer </h6>
      </div>

      <div className={`${styles.links} flex`}>
        <Link href="/#"><h6> About </h6></Link>
        <Link href="/#"><h6> Projects  </h6></Link>
        <Link href="/#"><h6> Services  </h6></Link>
      </div>
    </div>
  )
}

export default Header;