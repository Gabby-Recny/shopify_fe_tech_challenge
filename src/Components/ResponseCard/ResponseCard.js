import React from 'react';
import './ResponseCard.scss';

const ResponseCard = ({generatedResponse, prompt}) => {
    return (
        <article className='response-card' tabIndex="0">
            <section className='response-layout'>
                <h3 htmlFor='prompt'>Prompt:</h3>
                <p id='prompt'>{prompt}</p>
            </section>
            <br></br>
            <section className='response-layout'>
                <h3 htmlFor='writtenResponse'>Response:</h3>
                    <p id='writtenResponse'>
                        {generatedResponse.trim()}
                    </p>
            </section>

        </article>

    )
}

export default ResponseCard;