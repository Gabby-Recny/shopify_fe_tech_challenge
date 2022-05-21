import React, {useState} from "react";
import './PromptInput.scss';
import { postNewResponse } from "../utilities/apiCalls";
import { cleanResponseData } from "../utilities/cleanData";
import Loader from '../Loader/Loader';

const PromptInput = ({checkResponse}) => {
    const [ promptInput, setPromptInput ] = useState('')
    const [ isLoading, setLoader ] = useState(false)
    const [ error, setError ] = useState('')

    const submitPrompt = (event) => {
        event.preventDefault()
        setLoader(true)

        postNewResponse()
            .then(data => cleanResponseData(data))
            .then(cleanedData => {
                const newResponse = {
                    prompt: promptInput,
                    responseData: cleanedData,
                }
                checkResponse(newResponse)
                setPromptInput('')

            })
            .catch(err => { 
                setError(err)
            })
            .finally(() => {
                setLoader(false)
            })
    }

    const displayForm = () => {
        if (!error && !isLoading) {
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
    }

    const displayLoader = isLoading && <Loader />;
    const checkForError = error && <h4 className='prompt-error-msg'>There seems to be an error on our end. Please refresh and try again!</h4>

    return (
        <>
        {displayLoader}
        {checkForError}
        {displayForm()}
    </>
    )
}


export default PromptInput