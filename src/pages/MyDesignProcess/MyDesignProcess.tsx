import React from 'react';
import './MyDesignProcess.css';

const MyDesignProcess: React.FC = () => {
  return (
    <div className='design-process'>
      <div className='design-process-header'>
        <span className='design-process-title'>My Design Process</span>
        <span className='design-process-description'>
          Every project and partnership is unique and requires an original,
          personalized solution. That said, the common denominator in all our
          projects is data and complexity. We have therefore developed a
          proprietary, highly collaborative process and toolkit for our data
          design thinking approach.
        </span>
      </div>
      <div className='design-process-miro-board'>
        <iframe
          src='https://miro.com/app/live-embed/uXjVP4zvFWQ=/?moveToViewport=-500,-500,1000,1000'
          width='100%'
          height='600'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MyDesignProcess;
