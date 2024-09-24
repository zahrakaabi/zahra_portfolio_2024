'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                                PTOJECT ITEM                                */
/* -------------------------------------------------------------------------- */
function Project({ project }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [isActive, setIsActive] = useState(false);

/* -------------------------------- CONSTANTS ------------------------------- */
  const { src, title, image } = project;
  const anim = {
    initial: {width: 0, height: 0},
    open: {width: "auto", height: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
  }

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Link 
        className={`${styles.project} flex items-center justify-center pointer`}
        href={src}
        target='_blank'
        onMouseEnter={() => setIsActive(true)} 
        onMouseLeave={() => setIsActive(false)} 
    >
        <p>{title}</p>
        <motion.div 
            variants={anim} 
            animate={isActive ? "open" : "closed"} 
            className={`${styles.imgContainer} flex justify-center`}
        >
            <Image 
                src={`/images/projects/${image}`}
                width={250}
                height={0}
                alt="project image"   
            />
        </motion.div>
        <p>{title}</p>
    </Link>
  )
}

export default Project;