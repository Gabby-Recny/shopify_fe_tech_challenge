import React from "react";
import './Responses.scss';
import ResponseCard from '../ResponseCard/ResponseCard.js'

const Responses = ({responses}) => {

    // const formatResponses = () => {
    //     return responses.map(response => {
    //         return (
    //             <ResponseCard
    //                 key={response.responseData.id}
    //                 generatedResponse={response.responseData.generatedResponse}
    //                 prompt={response.prompt}
    //                 created={response.responseData.created}
    //             />
    //         )
    //     }).sort((a, b) => {
    //         return b.created - a.created
    //     })
    // }

    const formattedResponses = responses.map(response => {
        return (
            <ResponseCard
                key={response.responseData.id}
                generatedResponse={response.responseData.generatedResponse}
                prompt={response.prompt}
                created={response.responseData.created}
            />
        )
    }).sort((a, b) => b.created - a.created)

    // console.log('Formatted Responses Line 19 in Responses', formattedResponses)
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