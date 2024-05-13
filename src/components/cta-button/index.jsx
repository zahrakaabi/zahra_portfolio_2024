"use client"

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';
import PropTypes from 'prop-types';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function CtaButton({ buttonValue, bgColor, color, borderColor, width, style }) {
  /* ***************** RENDERING ****************** */
  return (
    <Link className={`${styles.ctaButton} flex justify-center`} href="/#">
        <button 
          className='flex justify-center items-center pointer' 
          style={{backgroundColor: bgColor, borderColor: borderColor}} 
          type="button"
          value={buttonValue}
        >
          <h6 className={`${style ? style : ''}`} 
              style={{width: width ? width : '', color: color}}
          > 
            {buttonValue} 
          </h6>
        </button>
    </Link>
  )
}

CtaButton.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  style: PropTypes.string
}

export default CtaButton;