/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import { Suspense } from "react";

// UI Local Components
import WorkPage from "@/components/work-page-components";

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function Projects() {
  /* ***************** RENDERING ****************** */
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkPage />
    </Suspense>
  );
}

export default Projects;