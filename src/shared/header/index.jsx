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
    <nav className={`${styles.headerContainer} flex justify-between items-center`}>
      <h1> ZK </h1>
      <div className={`${styles.links} flex`}>
        <Link href="/#"><h6> Work </h6></Link>
        <Link href="/#"><h6> About  </h6></Link>
        <Link href="/#"><h6> Contact  </h6></Link>
      </div>
    </nav>
  )
}

export default Header;