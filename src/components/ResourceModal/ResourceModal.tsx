import React from 'react';
import './ResourceModal.css';
import CaseStudyModalCard from '../CaseStudyModalCard/CaseStudyModalCard';
import cs from '../../assets/caseStudiesModal/cs.png';
// import designboard from '../assets/resource/Design.png';
// import UXAI from '../assets/resource/UI.png';
// import iconboard from '../assets/resource/iconboard.png';
// import protiflio from '../assets/resource/Portfolio.png';

const resourceModalData = [
  {
    img: cs,
    chipContent: 'Design Board',
    title: 'A platform for learning materials, inspiration, trends, and free design resources.',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: 'http://designboard.club/',
  },
  {
    img: cs,
    chipContent: 'AI',
    title: 'A text generative AI to assist the designers in UX UI for design inquiries and help find inspiration',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: 'https://uxai.designboard.club/',
  },
  {
    img: cs,
    chipContent: 'UX/UI Icons',
    title: 'A web app offering free icon to downloads and Reuse allowed without attribution or fee',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: 'https://www.iconboard.site/',
  },
  {
    img: cs,
    chipContent: 'Protiflio',
    title: 'Q3 Releases & Product Updates Q3 Releases & Product Updates',
    date: 'Nov 12, 2024 —',
    read: '7 min read',
    link: 'https://praveenmanchi.netlify.app/',
  },
];

const ResourceModal: React.FC = () => {
  return (
    <div className='resource-modal-header'>
      <span className='resource-modal-title'>My Contributions to Community</span>
      <span className='resource-modal-description'>
      I'm always eager to test, learn, and put new ideas into practice. As part of this I have created few open source  projects to help fellow designer. This are build  by name using different tools, AI and YouTube classes. 
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
