'use client';

/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// APIs
import { projects } from '@/_mock';

// UI Local Components
import Project from '@/shared/components/project';
import CtaButton from '@/shared/components/cta-button';

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                             WORK PAGE COMPONENT                            */
/* -------------------------------------------------------------------------- */
function WorkPage() {
/* ---------------------------------- HOOKS --------------------------------- */
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter') || 'all';
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filterParam) {
      setSelectedFilter(filterParam);
    }
  }, [filterParam]);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(projects);
    } else if (selectedFilter === 'design') {
      setFilteredProjects(projects.filter((project) => project.details.toLowerCase().includes('design')));
    } else if (selectedFilter === 'development') {
      setFilteredProjects(projects.filter((project) => project.details.toLowerCase().includes('development')));
    }
  }, [selectedFilter]);

/* -------------------------------- CONSTANTS ------------------------------- */
  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(window.location.search);
    params.set('filter', filter);
    router.push(`/work?${params.toString()}`, { scroll: false });
    setSelectedFilter(filter);
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <main className={`${styles.workPage} container`}>
      <h1 className={styles.workPageTitle}>Curious to see what we build?</h1>
      <div className="flex flex-wrap gap-1">
        {['all', 'design', 'development'].map((type) => <CtaButton 
          key={type} 
          content={type} 
          value={type}
          selectedFilter={selectedFilter} 
          onClick={() => handleFilterClick(type)} 
        />)}
      </div>
      <div className={styles.projects}>
        {filteredProjects?.map((project) => <Project key={project.$id} project={project} />)}
      </div>
    </main>
  )
}

export default WorkPage;