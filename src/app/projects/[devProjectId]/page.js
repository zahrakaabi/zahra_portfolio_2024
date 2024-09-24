/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Image from 'next/image';

// APIs
import { projects } from '@/shared/api/projects';

// Images
import DEVICE_PC from '../../../assets/images/project-details-page/device-mbp-16-lower.png';

// Styles
import styles from "./page.module.scss";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
// every page in the app router receives a parameter
// params is a destruction from that 
function DevProjectDetails({ params }) {
  /* ***************** RENDERING ****************** */
  return (
    <main className={styles.projectDetailsContainer}>
        <div className={styles.overlay}></div>
        {projects?.filter((product) => product.$id === params.devProjectId)?.map((product) => {
          const { $id, title, description, techs } = product;
          return (
            <div key={$id}>
              <div className={`${styles.projectdetails} flex justify-between flex-wrap`}>
                <div className="container">
                  <h1> EXPLORE </h1>
                  <h2> {title} </h2>
                </div>

                <div className="container">
                  <h3> Description </h3>
                  <p> {description} </p>
                  <h3> Techs </h3>
                  <p> {techs} </p>
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
  
export default DevProjectDetails;