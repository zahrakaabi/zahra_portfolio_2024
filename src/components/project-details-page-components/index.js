'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Image from 'next/image';

// UI Local Components
import Magnetic from '@/shared/components/magnetic';

// Images
import DEVICE_PC from '@/assets/images/project-details-page/device-mbp-16-lower.png';

// APIs
import { projects } from '@/_mock';

// Styles
import styles from "./index.module.scss";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function ProjectDetails({ params }) {
  /* ***************** RENDERING ****************** */
  return (
    <main className={styles.projectDetailsContainer}>
        <div className={styles.overlay}></div>
        {projects?.filter((product) => product.$id === params.devProjectId)?.map((product) => {
          const { $id, title_1, title_2, description, image } = product;
          return (
            <div key={$id} className="container">
              <div className={styles.projectdetails}>
                <h1> {title_1}{title_2} </h1>
                <p> {description} </p>
                <div className="pos-r">
                  <Magnetic>
                    <button className="animated" type="button">
                      <span>View</span>
                      <span className="arrow">&nbsp;&#129109;</span>
                    </button>
                  </Magnetic>
                  <Image className="w-screen" src={`/images/projects/${image}`} width={300} height={200} alt='device' />
                </div>
              </div> 

              <div className={styles.projectPlayer}>
                <Image src={DEVICE_PC} alt='device' />
                <div></div>
              </div>
            </div>
          )
        })}
    </main>
  );
}
  
export default ProjectDetails;