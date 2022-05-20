import React from 'react';
import './ResponseCard.scss';

const ResponseCard = ({generatedResponse, prompt}) => {
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
                        {generatedResponse.trim()}
                    </span>
            </section>

        </article>

    )
}

export default ResponseCard;