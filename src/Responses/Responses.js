import React from "react";
import './Responses.scss';
import ResponseCard from '../ResponseCard/ResponseCard.js'

const Responses = ({responseLog}) => {

    const errorMessage = `You don't have any responses from our API yet, type up and prompt and see what comes out!`

    const formattedResponses = responseLog.map(response => {
        return (
            <ResponseCard
                key={response.responseData.id}
                generatedResponse={response.responseData.generatedResponse}
                prompt={response.prompt}
                created={response.responseData.created}
            />
        )
    })

    return (
        <>
            <h2>Responses</h2>
            <section className='responses-container'>
                {!formattedResponses.length ? errorMessage : formattedResponses}
            </section>  
        </>
    )
}

export default Responses;