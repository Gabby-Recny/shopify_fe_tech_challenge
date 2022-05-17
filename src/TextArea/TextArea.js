import React, {useState} from "react";
import './TextArea.scss';

const TextArea = () => {
    const [ prompt, setPrompt ] = useState('')

    const submitPrompt = (event) => {
        event.preventDefault()
        console.log('Response submitted')
        console.log(prompt)
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