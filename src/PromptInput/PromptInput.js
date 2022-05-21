import React, {useState} from "react";
import './PromptInput.scss';
import { postNewResponse } from "../utilities/apiCalls";
import { cleanResponseData } from "../utilities/cleanData";
import Loader from '../Loader/Loader';

const PromptInput = ({addNewResponse}) => {
    const [ promptInput, setPromptInput ] = useState('')
    const [ isLoading, setLoader ] = useState(false)
    const [ error, setError ] = useState('')
    // const [ response, setResponse ] = useState('')

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
                console.log('New Response in PromptInput Line 25', newResponse)
                // setResponse(cleanedData)
                addNewResponse(newResponse)
                setPromptInput('')

            })
            .catch(error =>{ 
                setError(error)
            })
            .finally(() => {
                setLoader(false)
            })
    }


    const checkForError = error && <h4 className='error-message' data-testid='error-message'>{error}</h4>;
    const displayLoader = isLoading && <Loader />;

    return (
        <>
        {displayLoader}
        {!isLoading &&
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
        }
    </>
    )
}


export default PromptInput