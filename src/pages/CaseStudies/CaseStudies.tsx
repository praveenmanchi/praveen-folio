import React from 'react';
import './CaseStudies.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';
import CsChip from '../../components/CsChip/CsChip';
import { csChipData } from '../../constants/csConstants';
import circle from '../../assets/circle.svg';
import CaseStudyCardNew from '../../components/CaseStudyCardNew/CaseStudyCardNew';
// import benzbanner from '../assets/dataimages/benz.png';
// import paysafe from '../assets/dataimages/Paysafe.png';
// import nobroker from '../assets/dataimages/NoBroker.png';
// import cisco from '../assets/dataimages/Cisco.png';
// import cluster from '../assets/dataimages/';
// import nobroker from '../assets/dataimages/NoBroker.png';

const caseStudyCardsData = {
  caseStudyLg: [
    {
      insight: true,
      insight1: '5%',
      insight1Desc: 'Increase in resume building',
      insight2: '5%',
      insight2Desc: 'Increase in resume building',
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Lead Designer',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'benzbanner',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'amg-driving-academy',
    },
    {
      insight: true,
      insight1: '5%',
      insight1Desc: 'Increase in resume building',
      insight2: '5%',
      insight2Desc: 'Increase in resume building',
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Lead Designer',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'nobroker',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'psychology-of-ux',
    },
    {
      insight: true,
      insight1: '5%',
      insight1Desc: 'Increase in resume building',
      insight2: '5%',
      insight2Desc: 'Increase in resume building',
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Lead Designer',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'benzbanner',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'amg-driving-academy',
    },
    {
      insight: true,
      insight1: '5%',
      insight1Desc: 'Increase in resume building',
      insight2: '5%',
      insight2Desc: 'Increase in resume building',
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Lead Designer',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'nobroker',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'psychology-of-ux',
    },
  ],
  caseStudySm: [
    {
      insight: false,
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Nov 5, 2023',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'https://media.nngroup.com/static/img/banners/home-consulting_2x.webp',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'e-commerce-optimization',
    },
    {
      insight: false,
      title: 'The Psychology Behind Effective UX Design',
      description:
        'Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.',
      position: 'Nov 5, 2023',
      client: 'ge',
      tools: '8 min',
      imgSrc:
        'https://media.nngroup.com/static/img/banners/home-consulting_2x.webp',
      link: 'https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      pathName: 'mobile-app-design',
    },
  ],
  
};

const CaseStudies: React.FC = () => {
  // const [selectedChips, setSelectedChips] = useState(['web app']);

  // const handleChipSelect = (chipLabel: string) => {
  //   console.log(chipLabel);
  //   setSelectedChips((prevSelected: any) =>
  //     prevSelected.includes(chipLabel)
  //       ? prevSelected.filter((label) => label !== chipLabel)
  //       : [...prevSelected, chipLabel]
  //   );
  // };
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
        <button className='case-studies-open-document-button'>
          Open Document
          <img src={arrow} alt='arrow' />
        </button>
      </div>
      <div className='case-studies-footer'>
        <span className='case-studies-footer-text'>// Casestudies</span>
        <div className='cs-chip-container-holder'>
          {csChipData.map((eachChip, idx) => (
            <CsChip
              label={eachChip?.label}
              count={eachChip?.number}
              key={idx}
              // onClick={() => handleChipSelect(eachChip.label)}
            />
          ))}
        </div>
      </div>
      <div className='cs-card-container'>
        {caseStudyCardsData?.caseStudyLg?.map((card, idx) => (
          <CaseStudyCardNew key={idx} data={card} />
        ))}

        <div className='cs-horz-container'>
          {/* <CasestudyCard expertise={true} img={csSm} />
          <CasestudyCard expertise={true} img={csSm} /> */}
          {caseStudyCardsData?.caseStudySm?.map((card, idx) => (
            <CaseStudyCardNew key={idx} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
