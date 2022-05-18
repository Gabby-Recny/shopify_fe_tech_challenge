import React, {useState} from "react";
import './TextArea.scss';
import { postNewResponse } from "../utilities/apiCalls";
import { cleanResponseData } from "../utilities/cleanData";

const TextArea = ({createNewResponse}) => {
    const [ promptInput, setPromptInput ] = useState('')

    const submitPrompt = (event) => {
        event.preventDefault()
        console.log('line 10 Prompt:', promptInput)

        postNewResponse(prompt)
            .then(data => cleanResponseData(data))
            .then(cleanedData => {
                // console.log('Cleaned Data TextArea Line 16', cleanedData)
                // console.log('Prompt Input TextArea Line 17', promptInput)
                createNewResponse(cleanedData, promptInput)
                setPromptInput('')
            })
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
                        value={promptInput} 
                        onChange={e => setPromptInput(e.target.value)} 
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