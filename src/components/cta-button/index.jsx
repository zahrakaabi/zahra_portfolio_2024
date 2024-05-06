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
function CtaButton({ buttonValue, bgColor }) {
  /* ***************** RENDERING ****************** */
  return (
    <Link className={`${styles.ctaButton} flex justify-center`} href="/#">
        <button className="flex justify-center items-center pointer underlined" style={{backgroundColor: bgColor}} type="button" value={buttonValue}>
            {buttonValue}
        </button>
    </Link>
  )
}

CtaButton.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
}

export default CtaButton;