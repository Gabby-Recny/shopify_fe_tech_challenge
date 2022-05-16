import React, {useState} from "react";
import './TextArea.scss';

const TextArea = () => {
    const [ textAreaInput, setTextAreaInput ] = useState('')

    const submitResponse = (event) => {
        event.preventDefault()
        console.log('Response submitted')
    }
    return (
        <section className='form-section'>
            <form>
                <label htmlFor='textArea'>Enter prompt</label>
                <section className='input-area'>
                    <textarea 
                        type='text'
                        className='text-area'
                        // rows='20'
                        // columns='50'
                        value={textAreaInput} 
                        onChange={e => setTextAreaInput(e.target.value)} 
                    />
                </section>
                <button
                    className='submit-btn'
                    type='submit'
                    onClick={e => submitResponse(e)}
                    >Submit</button>
            </form>
        </section>
    )
}


export default TextArea;