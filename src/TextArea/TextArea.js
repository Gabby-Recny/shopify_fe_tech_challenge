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