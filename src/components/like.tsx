import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

interface LabelProps {
  inputProps: {
    'aria-label': string;
  };
}

const IconCheckboxes: React.FC = () => {
 
  const label: LabelProps = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <Checkbox
        {...label}
        icon={
          <div style={{ color: 'blue', fontSize: 20 }}>
            <CiHeart />
          </div>
        } 
        checkedIcon={
          <div style={{ color: 'red', fontSize: 20 }}>
            <FaHeart />
          </div>
        }  
      />
    </div>
  );
}

export default IconCheckboxes;
