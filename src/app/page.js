"use client";

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

// Styles
import styles from "./page.module.scss";

/* ------------------------------------------------ */
/*                     JSON API                     */
/* ------------------------------------------------ */
const images = [
  "1.png",
  "2.gif",
  "3.png",
  "4.jpg",
  "5.jpg",
  "1.png",
  "2.gif",
  "3.png",
  "4.jpg",
  "5.jpg",
  "1.png",
  "2.gif",
]

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Home() {
  const GALLERY = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: GALLERY,
      offset: ['start end', 'end start']
    }
  );
  const [dimension, setDimension] = useState(
    {
      width:0,
      height:0
    }
  );

  const { height } = dimension;
  const y_1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y_2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y_3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y_4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect( () => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, []);

  /* ---------------------------------------------- */
  /*                NESTED COMPONENT                */
  /* ---------------------------------------------- */
  // Dusplay 3 images per column
  const Column = ({images, y}) => {
    return (
      <motion.div className={styles.column} style={{y}}>
        {images?.map((src, i) => {
            return (
              <div key={i} className={styles.imageContainer}>
                <Image 
                  src={`/images/${src}`}
                  alt='image'
                  fill
                />
              </div>
            )
          })
        }
      </motion.div>
    )
  }

  /* ***************** RENDERING ****************** */
  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>

      <div ref={GALLERY} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y_1}/>
        <Column images={[images[3], images[4], images[5]]} y={y_2}/>
        <Column images={[images[6], images[7], images[8]]} y={y_3}/>
        <Column images={[images[9], images[10], images[11]]} y={y_4}/>
      </div>
      
      <div className={styles.spacer}></div>
    </main>
  );
}

export default Home;