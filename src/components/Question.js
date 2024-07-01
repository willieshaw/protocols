import React from 'react';
import './Question.css';

function Question({ question, answer }) {
  return (
    <div className='question'>
      <h4>{question}</h4>
        <div className='answer'>
            <p>{answer}</p>
        </div>
    </div>
  );
}

export default Question;