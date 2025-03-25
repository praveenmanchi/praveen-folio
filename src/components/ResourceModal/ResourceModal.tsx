import React from 'react';
import './ResourceModal.css';
import CaseStudyModalCard from '../CaseStudyModalCard/CaseStudyModalCard';
import cs from '../../assets/caseStudiesModal/cs.png';

const resourceModalData = [
  {
    img: cs,
    chipContent: 'UX/UI Design',
    title: 'Q3 Releases & Product Updates Q3 Releases & Product Updates',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: '',
  },
  {
    img: cs,
    chipContent: 'UX/UI Design',
    title: 'Q3 Releases & Product Updates Q3 Releases & Product Updates',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: '',
  },
  {
    img: cs,
    chipContent: 'UX/UI Design',
    title: 'Q3 Releases & Product Updates Q3 Releases & Product Updates',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: '',
  },
  {
    img: cs,
    chipContent: 'UX/UI Design',
    title: 'Q3 Releases & Product Updates Q3 Releases & Product Updates',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: '',
  },
];

const ResourceModal: React.FC = () => {
  return (
    <div className='resource-modal-header'>
      <span className='resource-modal-title'>My contribution</span>
      <span className='resource-modal-description'>
        This personal space aims to showcase how I think and work and become a
        place where I can share my thoughts and my journey as a product designer
        in this industry.
      </span>
      <div className='recent-case-studies'>
        {resourceModalData?.map((eachCard, idx) => (
          <CaseStudyModalCard data={eachCard} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ResourceModal;
