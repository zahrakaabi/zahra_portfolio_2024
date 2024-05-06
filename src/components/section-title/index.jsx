/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import PropTypes from 'prop-types';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function ProjectModal({ sectionTitle }) {
  /* ***************** RENDERING ****************** */
  return (
    <div className={styles.sectionTitle}>
        <h6> {sectionTitle} </h6>    
    </div>
  )
}

ProjectModal.propTypes = {
  sectionTitle: PropTypes.string.isRequired
}

export default ProjectModal;