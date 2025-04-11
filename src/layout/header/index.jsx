'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// Local Components
import { paths } from '@/routes/paths';
import Magnetic from '@/shared/components/magnetic';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Header({ isAboutPage, isContactPage, mood }) {
  /* ----------------- CONSTANTS ------------------ */
  const HEADER_STYLE = {
    ...(isAboutPage && { color: mood?.text_color }),
    ...(isContactPage && { background: '#333', color: '#fff' })
  };

  const { links: { root, project,  about, contact } } = paths;

  /* ***************** RENDERING ****************** */
  return (
    <nav style={HEADER_STYLE} className={`${styles.headerContainer} w-screen`}>
      <div className='flex justify-between items-center container'>
        <Link href={root}><h1>ZK</h1></Link>
        <div className={`${styles.links} flex`}>
          <Link href={project.list}><Magnetic><h6>Work</h6></Magnetic></Link>
          <Link href={about}><Magnetic><h6>About</h6></Magnetic></Link>
          <Link href={contact}><Magnetic><h6>Let&apos;s Talk</h6></Magnetic></Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;