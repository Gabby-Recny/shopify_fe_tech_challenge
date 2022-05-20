import React from 'react';
import './App.scss'; 
import PromptInput from './PromptInput/PromptInput';
import Responses from './Responses/Responses';
import useLocalStorage from './utilities/useLocalStorage';

function App() {

  const [ responseLog, setResponseLog ] = useLocalStorage("responseLog", [])

  // const [ responseLog, setResponseLog ] = React.useState([])

  const addNewResponse = (newResponse) => {
    setResponseLog([newResponse, ...responseLog])
  }


  return (
    <main>
      <section className='App'>
        <h1>Fun with API</h1>
        <PromptInput addNewResponse={addNewResponse}/>
        <Responses responseLog={responseLog}/>
      </section>
    </main>
  );
}

export default App;
