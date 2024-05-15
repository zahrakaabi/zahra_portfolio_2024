"use client"

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Images
import RIGHT_ARROW from '../../../assets/images/icons/about_me_cta_btn_arrow.svg';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function CtaButton({ buttonValue, fontSize, bgColor, color, borderColor, width, style, showArrow }) {
  /* ***************** RENDERING ****************** */
  return (
    <div className="w-full flex justify-center items-center">
      <button 
        className={`${styles.ctaBtn} flex justify-center items-center pointer`} 
        style={{backgroundColor: bgColor, borderColor: borderColor}} 
        type="button"
        value={buttonValue}
      >
        <Link 
          className={`${style ? style : ''} flex items-end pos-r`} 
          href="/#"
          style={{width: width ? width : '', color: color, fontSize: fontSize}}
        >
          {buttonValue} 
          {showArrow ? <Image className='pos-a'  src={RIGHT_ARROW} alt="arrow to visit about me page" /> : ''}
        </Link>
      </button>
    </div>
  )
}

CtaButton.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  style: PropTypes.string,
  showArrow: PropTypes.boolean
}

export default CtaButton;