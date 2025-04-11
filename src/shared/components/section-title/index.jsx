/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
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

export default ProjectModal;