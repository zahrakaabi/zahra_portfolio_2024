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
import { projects } from '@/shared/api/projects';

// Images
import RIGHT_ARROW from '../../assets/images/icons/right_arrow.svg';

// Styles
import styles from './index.module.scss';

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function SelectedWorkSection() {
    const [modal, setModal] = useState({active: false, index: 0});
    const PROJECTS_NUM = 3;

    /* **************** RENDERING ***************** */
    return (
        <>
            <div className={`${styles.selectedWorkContainer} container`}>
                <SectionTitle sectionTitle='Some of my selected work' />
                {projects?.slice(0,PROJECTS_NUM)?.map((project, index) => {
                    const { $id, title, details, src } = project;
                    return (
                        <Link className={`${styles.project} block w-screen pointer`}
                            href={src}
                            key={index}
                            target='_blank'
                            onMouseEnter={() => {setModal({active: true, index})}}
                            onMouseLeave={() => {setModal({active: false, index})}}
                        >
                            <div className={`${modal.active && modal.index === index ? 'flex justify-between items-center' : ''}`}>
                                <h2 className={`${modal.active && modal.index === index ? 'isVisible' : 'isHidden'}`}>
                                    /{$id} 
                                </h2>
                                <div className={styles.project__name}>
                                    <h2> {title} </h2>
                                    <p> {details} </p>
                                </div>
                            </div>
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