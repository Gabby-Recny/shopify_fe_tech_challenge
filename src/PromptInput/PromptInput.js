import React, {useState} from "react";
import './PromptInput.scss';
import { postNewResponse } from "../utilities/apiCalls";
import { cleanResponseData } from "../utilities/cleanData";

const PromptInput = ({addNewResponse}) => {
    const [ promptInput, setPromptInput ] = useState('')

    const submitPrompt = (event) => {
        event.preventDefault()

        postNewResponse(prompt)
            .then(data => cleanResponseData(data))
            .then(cleanedData => {
                console.log('CLEANED DATA', cleanedData)
                const newResponse = {
                    prompt: promptInput,
                    responseData: cleanedData,
                }
                addNewResponse(newResponse)
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
                        name='textArea'
                        value={promptInput} 
                        onChange={e => setPromptInput(e.target.value)} 
                    />
                </section>
                <button
                    className='submit-btn'
                    type='submit'
                    disabled={!promptInput}
                    onClick={e => submitPrompt(e)}
                    >Submit</button>
            </form>
    )
}


export default PromptInput