'use client';

/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Packages
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Local UI Components
import CtaButton from '../../shared/components/cta-button';
import SectionTitle from '../../shared/components/section-title';
import ProjectModal from '../project-modal';

// APIs
import { projects } from '../../app/api/projects';

// Images
import RIGHT_ARROW from '../../assets/images/icons/right_arrow.svg';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function SelectedWorkSection() {
    const [modal, setModal] = useState({active: false, index: 0});
    const PROJECTS_NUMB = 3;

    /* **************** RENDERING ***************** */
    return (
        <>
            <div className={`${styles.selectedWorkContainer} container`}>
                <SectionTitle sectionTitle='Some of my selected work' />
                {projects?.slice(0,PROJECTS_NUMB)?.map((project, index) => {
                    const { title, details, src } = project;
                    return (
                        <Link className={`${styles.project} flex justify-between items-center pointer`}
                            href={src}
                            key={index}
                            target='_blank'
                            onMouseEnter={() => {setModal({active: true, index})}}
                            onMouseLeave={() => {setModal({active: false, index})}}
                        >
                            <div className={styles.project__name}>
                                <h2> {title} </h2>
                                <p> {details} </p>
                            </div>
                            <Image className={`${styles.project__arrow} 
                                ${modal.active && modal.index === index ? 'isVisible' : 'isHidden'}`}
                                src={RIGHT_ARROW}
                                width={60}
                                height='auto'
                                alt="arrow_to_see_the_project_details"
                            />
                        </Link>
                    )
                })}
            </div>
            <ProjectModal modal={modal} projects={projects} />
            <CtaButton buttonValue='View all' fontSize='1.2rem' bgColor='#1C1D20' color='#ffffff' borderColor="#1C1D20" style='underlined' />
        </>  
    )
}

export default SelectedWorkSection;