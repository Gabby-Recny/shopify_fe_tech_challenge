import React, {useState} from "react";
import './TextArea.scss';
import { postNewResponse } from "../apiCalls";

const TextArea = () => {
    const [ prompt, setPrompt ] = useState('')

    const submitPrompt = (event) => {
        event.preventDefault()
        console.log('Response submitted')
        console.log(prompt)

        postNewResponse(prompt)
            .then(data => console.log('Response data', data))
            .catch(error => console.log('Line 15 Error:', error))
    }

    //Response Object from Fulfilled Promise
//     Response data 
// {id: 'cmpl-592Ly8MOcSnOCdJ8cFVYCxat4jilf', object: 'text_completion', created: 1652835682, model: 'text-curie-001', choices: Array(1)}
// choices: Array(1)
// 0: {text: '\n1. Be successful.\n\n2. Be liked by people.\n\n3. Be respected by people.\n\n4. Be feared by people.', index: 0, logprobs: null, finish_reason: 'stop'}
// length: 1
// [[Prototype]]: Array(0)
// created: 1652835682
// id: "cmpl-592Ly8MOcSnOCdJ8cFVYCxat4jilf"
// model: "text-curie-001"
// object: "text_completion"
// [[Prototype]]: Object

    return (
            <form>
                <label htmlFor='textArea'>Enter prompt</label>
                <section className='input-area'>
                    <textarea 
                        type='text'
                        id='textArea'
                        className='text-area'
                        // rows='20'
                        // columns='50'
                        value={prompt} 
                        onChange={e => setPrompt(e.target.value)} 
                    />
                </section>
                <button
                    className='submit-btn'
                    type='submit'
                    onClick={e => submitPrompt(e)}
                    >Submit</button>
            </form>
    )
}


export default TextArea;