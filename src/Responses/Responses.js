import React from "react";
import './Responses.scss';
import ResponseCard from '../ResponseCard/ResponseCard.js'

const Responses = ({responses, prompt}) => {

    const formattedResponses = responses.map(response => {
        return (
            <ResponseCard
                key={response.id}
                id={response.id}
                generatedResponse={response.generatedResponse}
                prompt={prompt}
            />
        )
    })

    console.log('Formatted Responses Line 19 in Responses', formattedResponses)
    return (
        <>
            <h2>Responses</h2>
            <section className='responses-container'>
                {formattedResponses}
            </section>  
        </>
    )
}

export default Responses;