/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

/* -------------------------------------------------------------------------- */
/*                             MAGNETIC COMPONENT                             */
/* -------------------------------------------------------------------------- */
function Magnetic({children}) {
/* ---------------------------------- HOOKS --------------------------------- */
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2);
            const y = clientY - (top + height/2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };
    
        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magnetic.current.addEventListener("mousemove", handleMouseMove);
        magnetic.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [children]);

/* -------------------------------- RENDERING ------------------------------- */
    return React.cloneElement(children, {ref:magnetic});
};

export default Magnetic;