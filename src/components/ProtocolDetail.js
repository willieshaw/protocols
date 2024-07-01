import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DetailedDescription from './DetailedDescription';
import Question from './Question';
import SpectrumContinuum from './SpectrumContinuum';
import './ProtocolDetail.css';
import sharedQuestions from '../sharedQuestions';
import protocols from '../protocols';
import spectrumLabels from '../spectrumLabels';

function ProtocolDetail({ protocol, index, total }) {
    const navigate = useNavigate();

    const handleNext = () => {
        if (index < total - 1) { // Check if it's not the last protocol
            const nextProtocol = protocols[index + 1];
            navigate(`/${nextProtocol.title.toLowerCase().replace(/ /g, '-')}`);
            window.scrollTo(0, 0); // Scroll to the top of the page
        } else {
            const nextProtocol = protocols[0];
            navigate(`/${nextProtocol.title.toLowerCase().replace(/ /g, '-')}`);
        }
    };

    const spectrums = protocol.spectrums.map(spectrum => {
        const label = spectrumLabels.find(label => label.id === spectrum.id);
        return {
            leftLabel: label ? label.leftLabel : 'Label missing',
            rightLabel: label ? label.rightLabel : 'Label missing',
            value: spectrum.value
        };
    });

    return (
        <div className="protocol-detail">
            <div className="protocol-detail-header">
                <Link to="/" className="home-link">
                    <div className="protocol-detail-number">{protocol.number}</div>
                    <div className='title'>

                        <h2>{protocol.title}</h2>

                    </div>
                </Link>
            </div>
            <div className="protocol-detail-content">

                <DetailedDescription description1={protocol.description} description2={protocol.detailedDescription}/>
                {protocol.qa && protocol.qa.length > 0 ? (
                    protocol.qa.map((q, index) => {
                        const questionDetail = sharedQuestions[q.id];
                        if (!questionDetail) {
                            console.error("Question ID not found:", q.id);
                            return null;
                        }
                        return (
                            <Question key={index} question={questionDetail.question} answer={q.answer} />
                        );
                    })
                ) : (
                    <p>No questions available.</p>
                )}

                <div className='spectrum'>
                    <SpectrumContinuum spectrums={spectrums} />  {/* Pass the spectrum data */}
                </div>
                <div className='next'>
                    <a onClick={handleNext}>Next</a>
                </div>
            </div>
        </div>
    );
}

export default ProtocolDetail;
