'use client';

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
function Header({ isAboutPage, mood }) {
  /* ----------------- CONSTANTS ------------------ */
  const HEADER_STYLE = isAboutPage ? {
    backgroundColor: mood?.background_color, 
    color: mood?.text_color
  } : {};

  /* ***************** RENDERING ****************** */
  return (
    <nav
      style={HEADER_STYLE}
      className={`${styles.headerContainer} container flex justify-between items-center`}
    >
      <Link href="/"> <h1> ZK </h1> </Link>
      <div className={`${styles.links} flex`}>
        <Link href="/work"> <h6> Work </h6> </Link>
        <Link href="/about"> <h6> About  </h6> </Link>
        <Link href="/contact"> <h6> Contact  </h6> </Link>
      </div>
    </nav>
  )
}

export default Header;