'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// UI Local Components
import Footer from '@/shared/footer';
import Header from '@/shared/header';
import About from '@/components/about-page-components';

// _hepers
import { MOOD_OPTIONS } from '../_helpers/_APIs/_mood-options';

// Styles
import '../shared/styles/styles.globals.scss';
import styles from '../components/about-page-components/index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function RootLayout({ children }) {
  const storedMoodIndex = localStorage.getItem('moodIndex');
  const INITIAL_MOOD_INDEX = storedMoodIndex ? parseInt(storedMoodIndex, 10) : 0
  /* ------------------- HOOKS -------------------- */ 
  const pathname = usePathname();
  const [moodIndex, setMoodIndex] = useState(INITIAL_MOOD_INDEX);

  const isAboutPage = pathname === '/about';

  useEffect(() => {
    localStorage.setItem('moodIndex', moodIndex);
  }, [moodIndex]);

  /* ----------------- CONSTANTS ----------------- */ 
  const handleMood = () => {
    const imageContainer = document.querySelector(`.${styles.imageContainer}`);
    imageContainer.classList.add('fade-out');

    setTimeout(() => {
      setMoodIndex((prevMoodIndex) => (prevMoodIndex < MOOD_OPTIONS.length - 1 ? prevMoodIndex + 1 : 0));
      imageContainer.classList.remove('fade-out');
    }, 500);
  };

  /* ***************** RENDERING ****************** */
  return (
    <html lang="en">
      <Head>
        <title>Zahra_Kaabi</title>
        <meta name="description" content="Designed and created by Zahra Kaabi" />
      </Head>
      <body>
        <Header
          isAboutPage={isAboutPage}
          mood={MOOD_OPTIONS[moodIndex]}
        />
        <main>
          {isAboutPage ? <About handleMood={handleMood} mood={MOOD_OPTIONS[moodIndex]} /> : children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;