import React from 'react';
import { useParams } from 'react-router-dom';
import csBanner from '../../assets/caseStudiesDetails/cs-banner.png';
import chain from '../../assets/caseStudiesDetails/chain.svg';
import dots from '../../assets/caseStudiesDetails/dots.svg';
import figma from '../../assets/caseStudiesDetails/figma-1.svg.svg';
import xd from '../../assets/caseStudiesDetails/adobe-xd-2.svg.svg';
import sketch from '../../assets/caseStudiesDetails/sketch-2.svg.svg';
import invision from '../../assets/caseStudiesDetails/invision.svg.svg';
import './caseStudyDetails.css';

const caseStudies = {
  'amg-driving-academy': {
    title: 'AMG Driving Academy Case Study',
    description:
      'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
    images: [csBanner, csBanner, csBanner],
  },
  'psychology-of-ux': {
    title: 'The Psychology Behind Effective UX Design',
    description:
      'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users.',
    images: [csBanner, csBanner, csBanner],
  },
  'e-commerce-optimization': {
    title: 'E-commerce UX Optimization Case Study',
    description:
      'A case study on improving the user experience of an online store to increase conversion rates and customer satisfaction.',
    images: [csBanner, csBanner, csBanner],
  },
  'mobile-app-design': {
    title: 'Mobile App Design for Social Engagement',
    description:
      'Designing a social media app with an engaging and user-friendly interface to boost interaction and user retention.',
    images: [csBanner, csBanner, csBanner],
  },
  'saas-dashboard-redesign': {
    title: 'SaaS Dashboard Redesign Case Study',
    description:
      'Redesigning a SaaS dashboard for better usability, functionality, and overall aesthetics.',
    images: [csBanner, csBanner, csBanner],
  },
};

const CaseStudyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return <h2>Case Study Not Found</h2>;
  }

  return (
    <div className='case-study-details-container'>
      <img
        className='case-study-details-banner'
        src={caseStudy.images[0]}
        alt=''
      />
      <div className='case-study-details-content'>
        <div className='case-study-details-header'>
          <span className='case-study-details-title'>{caseStudy.title}</span>
          <div className='case-study-details-link-container'>
            <div className='link-container'>
              <img src={chain} alt='' />
            </div>
            <div className='link-container'>
              <img src={dots} alt='' />
            </div>
          </div>
        </div>
        <div className='case-study-details-footer'>
          <div className='footer-section-desc'>{caseStudy.description}</div>
          <div className='footer-section-desc-icons'>
            <img src={figma} alt='' className='desc-icon' />
            <img src={xd} alt='' className='desc-icon' />
            <img src={sketch} alt='' className='desc-icon' />
            <img src={invision} alt='' className='desc-icon' />
          </div>
        </div>
      </div>
      {caseStudy.images.map((image, index) => (
        <img
          key={index}
          className='case-study-details-banner'
          src={image}
          alt=''
        />
      ))}
    </div>
  );
};

export default CaseStudyDetails;
