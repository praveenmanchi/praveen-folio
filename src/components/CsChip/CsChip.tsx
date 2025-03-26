import React from 'react';
import './CsChip.css';

interface Props {
  label: string;
  count: number;
  handleChipSelect?: (label: string) => void;
}

const CsChip: React.FC<Props> = ({ label, count, handleChipSelect }) => {
  const handleSelectedChip = (label: string) => {
    if (handleChipSelect) {
      handleChipSelect(label);
    }
  };

  return (
    <div className='cs-chip' onClick={() => handleSelectedChip(label)}>
      <span className='cs-chip__label'>{label}</span>
      <div className='cs-chip__counter'>
        <span>{count < 10 ? `0${count}` : count}</span>
      </div>
    </div>
  );
};

export default CsChip;
