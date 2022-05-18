import React from 'react';
import './ResponseCard.scss';

const ResponseCard = ({created, generatedResponse, prompt}) => {
    return (
        <article className='response-card'>
            <section className='response-layout'>
                <label htmlFor='prompt'>Prompt:</label>
                <span name='prompt' id='prompt'>{prompt}</span>
            </section>
            <br></br>
            <section className='response-layout'>
                <label htmlFor='written-response'>Response:</label>
                <span name='written-response' id='written-response'>
                    <p>This is a response RIGHT HERE{generatedResponse}</p>
                    {/* {generatedResponse} */}
                </span>
            </section>

        </article>

    )
}

export default ResponseCard;