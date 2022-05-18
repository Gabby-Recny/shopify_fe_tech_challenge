import React, {useState} from 'react';
import './App.scss';
import TextArea from './TextArea/TextArea';
import Responses from './Responses/Responses';

function App() {
  const [ allResponses, setAllResponses ] = useState([])
  const [ prompt, setPrompt ] = useState('')

  const createNewResponse = (newResponse, newPrompt) => {
    console.log('New Response App Line 11', newResponse)
    console.log('New Prompt App Line 12', newPrompt)

    setAllResponses([...allResponses, newResponse])
    setPrompt(newPrompt)
    console.log('Set prompt App Line 16', prompt)
  }
  return (
    <section className='App'>
      <h1>Fun with API</h1>
      <TextArea createNewResponse={createNewResponse}/>
      <Responses responses={allResponses} prompt={prompt}/>
    </section>
  );
}

export default App;
