'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// _Mocks
import { MOOD_OPTIONS } from '@/_mock';

// UI Local Components
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import About from '@/components/about-page-components';

// Styles
import '../shared/styles/styles.globals.scss';
import styles from '../components/about-page-components/index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function RootLayout({ children }) {
  /* ------------------- HOOKS -------------------- */ 
  const pathname = usePathname();
  const [moodIndex, setMoodIndex] = useState(0);

  useEffect(() => {
    const storedMood = localStorage.getItem('moodIndex');
    if (storedMood) {
      setMoodIndex(parseInt(stored, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('moodIndex', moodIndex);
  }, [moodIndex]);

  /* ----------------- CONSTANTS ----------------- */ 
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';

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
          isContactPage={isContactPage}
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