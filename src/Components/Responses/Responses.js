import React from "react";
import './Responses.scss';
import ResponseCard from '../ResponseCard/ResponseCard.js'

const Responses = ({responseLog}) => {

    const errorMessage = `You don't have any responses from our API yet, type up and prompt and see what comes out!`

    const formattedResponses = responseLog.map((response, index) => {
        return (
            <ResponseCard
                key={index}
                generatedResponse={response.responseData.generatedResponse}
                prompt={response.prompt}
            />
        )
    })

    return (
        <>
            <h2 className='responses-title'>Responses</h2>
            <section className='responses-container'>
                {!formattedResponses.length ? errorMessage : formattedResponses}
            </section>  
        </>
    )
}

export default Responses;