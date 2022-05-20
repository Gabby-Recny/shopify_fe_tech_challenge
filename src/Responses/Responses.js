import React from "react";
import './Responses.scss';
import ResponseCard from '../ResponseCard/ResponseCard.js'

const Responses = ({responseLog}) => {

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
                {formattedResponses}
            </section>  
        </>
    )
}

export default Responses;