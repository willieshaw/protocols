import React from 'react';
import './DetailedDescription.css';

function DetailedDescription({ description1, description2 }) {
  return (
    <div className='detailed-description'>
        <p>{description1}</p><br/>
        <p>{description2}</p>
    </div>
  );
}

export default DetailedDescription;