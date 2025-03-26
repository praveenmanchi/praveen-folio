import React, { useState } from 'react';
import './CaseStudies.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';
import CsChip from '../../components/CsChip/CsChip';
import { csChipData } from '../../constants/csConstants';
import circle from '../../assets/circle.svg';
import CaseStudyCardNew from '../../components/CaseStudyCardNew/CaseStudyCardNew';
import benzbanner from '../../assets/dataimages/benz.png';
import paysafe from '../../assets/dataimages/Paysafe.png';
import nobroker from '../../assets/dataimages/NoBroker.png';
import cisco from '../../assets/dataimages/Cisco.png';
import cluster from '../../assets/dataimages/';
import { Link } from 'react-router';
import { caseStudyCardDataDummy } from '../../constants/caseStudyDummyData';

interface CaseStudy {
  title: string;
  description: string;
  imgSrc: string;
  pathName: string;
}

interface CaseStudyCategory {
  caseStudyLg?: CaseStudy[];
  caseStudySm?: CaseStudy[];
}

interface CaseStudyData {
  [key: string]: CaseStudyCategory; // "Web App" or "Mobile App"
}

const CaseStudies: React.FC = () => {
  const [selectedChips, setSelectedChips] = useState(['']);

  const handleChipSelect = (chipLabel: string) => {
    setSelectedChips((prevSelected) =>
      prevSelected.includes(chipLabel)
        ? prevSelected.filter((label: string) => label !== chipLabel)
        : [...prevSelected, chipLabel]
    );
  };

  console.log(selectedChips);

  const filteredData = caseStudyCardDataDummy.filter((item) => {
    const key = Object.keys(item)[0];
    return selectedChips.some(
      (chip) => chip.toLowerCase() === key.toLowerCase()
    );
  });

  const extractCaseStudies = (
    data: CaseStudyData[],
    type: keyof CaseStudyCategory
  ): CaseStudy[] =>
    data.flatMap((appCategory) =>
      Object.values(appCategory).flatMap((app) => app[type] ?? [])
    );

  const caseStudyLg = extractCaseStudies(filteredData, 'caseStudyLg');
  // const caseStudySm = extractCaseStudies(filteredData, 'caseStudySm');

  return (
    <div className='case-studies-container'>
      <div className='case-studies-header'>
        <span className='case-studies-header-creativity'>creativity</span>
        <div className='case-studies-header-divider'>
          <span className='with'>WITH</span>
          <img
            src={circle}
            alt='circle'
            style={{
              marginTop: '-75px',
              marginLeft: '-18px',
              marginRight: '-135px',
              width: '454px',
            }}
          />
        </div>
        <div className='case-studies-header-purpose'>
          <span>purpose</span>
        </div>
      </div>
      <div className='case-studies-intro'>
        <span className='case-studies-intro-text'>
          Looking for my portfolio? You’ll find here some shots of my most
          recent projects, an exhaustive list of all the projects I contributed
          to, as well as a few words about my role and my inspirations.
        </span>
      </div>
      <div className='case-studies-design-process'>
        <div className='case-studies-process-details'>
          <span className='case-studies-process-title'>My Design Process</span>
          <span className='case-studies-process-description'>
            My design process varies slightly depending on the nature of the
            project at hand. Am I redesigning an existing product, creating a
            new product from scratch, adding new features to an already existing
            product.
          </span>
        </div>
        <Link to='/designprocess' style={{ textDecoration: 'none' }}>
          <button className='case-studies-open-document-button'>
            Open Document
            <img src={arrow} alt='arrow' />
          </button>
        </Link>
      </div>
      <div className='case-studies-footer'>
        <span className='case-studies-footer-text'>// Casestudies</span>
        <div className='cs-chip-container-holder'>
          {csChipData.map((eachChip, idx) => (
            <CsChip
              label={eachChip?.label}
              count={eachChip?.number}
              key={idx}
              handleChipSelect={handleChipSelect}
            />
          ))}
        </div>
      </div>
      <div className='cs-card-container'>
        {/* {caseStudyCardsData?.caseStudyLg?.map((card, idx) => (
          <CaseStudyCardNew key={idx} data={card} />
        ))} */}

        {caseStudyLg.map((card: object, idx: number) => (
          <CaseStudyCardNew key={idx} data={card} />
        ))}

        {/* //small cards */}

        {/* <div className='cs-horz-container'>
          {caseStudyCardsData?.caseStudySm?.map((card, idx) => (
            <CaseStudyCardNew key={idx} data={card} />
          ))}
        </div>
        <div className='cs-horz-container'>
          {caseStudyCardsData?.caseStudyXs?.map((card, idx) => (
            <CaseStudyCardNew key={idx} data={card} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudies;
