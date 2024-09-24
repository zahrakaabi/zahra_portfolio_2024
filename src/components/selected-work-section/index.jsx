/* -------------------------------------------------------------------------- */
/*                               DEEPENDENICIES                               */
/* -------------------------------------------------------------------------- */
// Local UI Components
import Project from '@/shared/components/project';
import CtaButton from '../../shared/components/cta-button';
import SectionTitle from '../../shared/components/section-title';

// APIs
import { projects } from '@/shared/api/projects';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                            SELECTED WORK SECTION                           */
/* -------------------------------------------------------------------------- */
function SelectedWorkSection() {
/* -------------------------------- CONSTANTS ------------------------------- */
    const PROJECTS_NUM = 3;

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <>
            <div className={`${styles.selectedWorkContainer} container`}>
                <SectionTitle sectionTitle='Some of my selected work' />
                {projects?.slice(0,PROJECTS_NUM)?.map((project) => <Project key={project.$id} project={project} />)}
            </div>
            <CtaButton buttonValue='View all' fontSize='1.2rem' bgColor='#1C1D20' color='#ffffff' borderColor="#1C1D20" style='underlined' />
        </>  
    )
}

export default SelectedWorkSection;