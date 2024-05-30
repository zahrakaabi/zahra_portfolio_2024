/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';

// APIs
import { projects } from '@/shared/api/projects';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Projects() {
  /* ***************** RENDERING ****************** */
  return (
    <main>
        <h1> Hello List of projects </h1>
        {projects?.map((project) => {
          const { $id, title } = project;
          return <Link key={$id} href={`/projects/${$id}`}> {title} </Link>
        })}
    </main>
  );
}

export default Projects;