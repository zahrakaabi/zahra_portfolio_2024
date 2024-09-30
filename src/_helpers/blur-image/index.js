/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import Image from 'next/image';
import { useState } from 'react';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                                 BLUR IMAGE                                 */
/* -------------------------------------------------------------------------- */
const BlurImage = ({ image }) => {
/* ---------------------------------- HOOKS --------------------------------- */
   const [loading, setLoading] = useState(true);

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <div className={`${styles.imageWrapper} ${loading ? styles.loading : ''}`}>
            <Image
                src={image}
                alt="image"
                priority={true}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    )
}

export default BlurImage;