'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// UI Local Components
import Magnetic from '../magnetic';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                                PTOJECT ITEM                                */
/* -------------------------------------------------------------------------- */
function Project({ project }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [cursor, setCursor] = useState({
    index: 0,
    hovered: false
  });
  const route = useRouter();

/* -------------------------------- CONSTANTS ------------------------------- */
  const { $id, title_1, title_2, details, color, image } = project;
  const { index, hovered } = cursor;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className={styles.project}>
      <div 
        className={`${styles.imgContainer} flex items-center justify-center pointer pos-r`} 
        style={{background: color}}
        onMouseEnter={() => setCursor({index: $id, hovered: true})}
        onMouseLeave={() => setCursor({index: $id, hovered: false})}
      >
        <Image 
          className='center'
          src={`/images/projects/${image}`}
          width={250}
          height={300}
          alt={`${title_1}${title_2}`}   
        />
        {hovered && index === $id && (
          <Magnetic>
            <div className={`${styles.magneticContainer} flex items-center justify-center pointer`}>
              <div className={`${styles.arrow} flex justify-center items-center`}
                aria-label="Click to view project"
                role="button"
                onClick={() => route.push(`/work/${$id}`)}
              >
                &#129109;
              </div>
            </div>
          </Magnetic>
        )}
      </div>
      <div className={`${styles.contentContainer} flex justify-between items-center`}>
        <h3>{title_1}{title_2}</h3>
        <p>({details})</p>
      </div>
    </div>
  )
}

export default Project;