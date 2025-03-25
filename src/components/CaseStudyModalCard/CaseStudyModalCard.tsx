import React from 'react';
import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';
import './CaseStudyModalCard.css';
interface Props {
  data: {
    img: string;
    chipContent: string;
    title: string;
    date: string;
    read: string;
    link: string;
  };
}

const CaseStudyModalCard: React.FC<Props> = ({ data }) => {
  return (
    <div className='case-study-comp'>
      <div className='case-study-comp-header'>
        <img src={data?.img} alt='cs' className='case-study-comp-image' />
        <div className='case-study-comp-title'>{data?.chipContent}</div>
        <span className='case-study-comp-description'>{data?.title}</span>
        <div className='case-study-comp-date date'>
          {data?.date}
          <span className='case-study-comp-read-time time'>{data?.read} </span>
        </div>
      </div>
      <div className='case-study-comp-footer'>
        View
        <img src={arrow} alt='cs' className='case-study-comp-arrow' />
      </div>
    </div>
  );
};

export default CaseStudyModalCard;
