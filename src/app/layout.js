'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

// UI Local Components
import Footer from '@/shared/footer';
import Header from '@/shared/header';
import About from '@/components/about-page-components';

// _hepers
import { MOOD_OPTIONS } from '../_helpers/_mood-options';

// Styles
import '../shared/styles/styles.globals.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function RootLayout({ children }) {
  /* ------------------- HOOKS -------------------- */ 
  const pathname = usePathname();
  const [moodIndex, setMoodIndex] = useState(0);

  /* ----------------- CONSTANTS ----------------- */ 
  const handleMood = () => setMoodIndex((prevMoodIndex) => (prevMoodIndex < MOOD_OPTIONS.length - 1 ? prevMoodIndex + 1 : 0));
  const isAboutPage = pathname === '/about';

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
          {isAboutPage ? <About mood={MOOD_OPTIONS[moodIndex]} handleMood={handleMood} /> : children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;