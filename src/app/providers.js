'use client'

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
import { ThemeProvider } from 'newt-themes';
import { useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                            PROVIRDERS COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Providers({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
   }, []);

   if (!mounted) {
    return <> {children} </>
   } 
   
/* -------------------------------- RENDERING ------------------------------- */
   return <ThemeProvider> {children} </ThemeProvider>
};

export default Providers;