import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProjectsSection.css';
import arrow from '../../assets/forward-arrow.svg';
import { featuresProjectCardsData } from '../../constants/featuredConstants';
import CaseStudyCardNew from '../../components/CaseStudyCardNew/CaseStudyCardNew';

const FeaturedProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/casestudies');
  };

  return (
    <div className='featured-projects-section'>
      <h2 className='featured-projects-heading'>Featured Projects</h2>
      <p className='featured-projects-description'>
        This personal space aims to showcase how I think and work and solve a
        problems with my thoughts and my process to dlivery the top-noch quality.
      </p>
      {featuresProjectCardsData?.caseStudyLg?.map((card, idx) => (
        <CaseStudyCardNew key={idx} data={card} microTool={true} />
      ))}
      <div className='case-study-read-more-btn-container'>
        <div className='case-study-button-container'>
          <button className='case-study-button' onClick={handleViewMore}>
            VIEW MORE CASESTUDIES
            <img src={arrow} alt='' className='case-study-arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
