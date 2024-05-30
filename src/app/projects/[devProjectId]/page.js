/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages

// APIs
import { projects } from '@/shared/api/projects';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
// every page in the app router receives a parameter
// params is a destruction from that 
function DevProjectDetails({ params }) {
  /* ***************** RENDERING ****************** */
  return (
    <main>
        <h1> Details about the dev project {params.devProjectId} </h1>
        {projects?.filter((product) => product.$id === params.devProjectId)?.map((product) =>  product.title)}
    </main>
  );
}
  
export default DevProjectDetails;