import React from 'react';
import './SpectrumContinuum.css';

const SpectrumIndicator = ({ leftLabel, rightLabel, value }) => {
  const positions = 10;

  return (
    <div className='spectrum-row-full'>
    <div className="spectrum-row">
      <span className="spectrum-label">{leftLabel}</span>
      <div className="spectrum-container">
        {[...Array(positions)].map((_, index) => (
          <div
            key={index}
            className={`spectrum-dot ${index === value ? 'active' : ''}`}
            style={{ left: `${(index / (positions - 1)) * 100}%` }}
          />
        ))}
      </div>
      <span className="spectrum-label">{rightLabel}</span>
    </div>
    </div>
  );
};

const SpectrumContinuum = ({ spectrums }) => {
    return (
        <div className="spectrum-continuum">
            <div className='subtitle'>
                <h3>Characteristics</h3>
            </div>
            {spectrums.map((spectrum, index) => (
                <SpectrumIndicator
                    key={index}
                    leftLabel={spectrum.leftLabel}
                    rightLabel={spectrum.rightLabel}
                    value={spectrum.value}
                />
            ))}
        </div>
    );
};


export default SpectrumContinuum;
