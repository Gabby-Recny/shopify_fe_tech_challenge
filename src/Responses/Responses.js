import React from "react";
import './Responses.scss';

const Responses = () => {
    return (
        <section className='responses-section'>
            <h2>Responses</h2>
            <section className='responses-container'>
                <article className='single-response'>
                    <section className='response-layout'>
                        <label htmlFor='prompt'>Prompt:</label>
                        <p name='prompt' id='prompt'>This is a prompt about dinosaurs making sandwiches</p>
                    </section>
                    <section className='response-layout'>
                        <label htmlFor='written-response'>Response:</label>
                        <p name='written-response' id='written-response'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur, massa eu maximus dictum, dui orci aliquam dolor, sed pretium nulla erat eget orci. Donec vitae dui eget justo gravida lacinia. Ut in tempor leo, ut convallis tortor. Sed dapibus vitae metus et volutpat. Mauris eget tortor fringilla odio semper pretium. Mauris pulvinar eget elit eu tempus. Aliquam sodales, nisi quis egestas fringilla, urna elit porta neque, at vehicula eros ipsum at augue. Fusce hendrerit ligula quis molestie dapibus.
                        </p>
                    </section>
                </article>
            </section>
        </section>
    )
}

export default Responses;