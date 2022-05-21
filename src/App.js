import React from 'react';
import './App.scss'; 
import PromptInput from './PromptInput/PromptInput';
import Responses from './Responses/Responses';
import useLocalStorage from './utilities/useLocalStorage';

function App() {

  // const [ responseLog, setResponseLog ] = useLocalStorage("responseLog", [])

  const [ responseLog, setResponseLog ] = React.useState([])
  // const [ response, setResponse ] = React.useState('')


  const addNewResponse = (newResponse) => {
    console.log('New Response: App Line 14', newResponse)
    // setResponse(newResponse)
    setResponseLog([newResponse, ...responseLog])
  }

  // const checkResponses = response.responseData && <Responses responseLog={responseLog}/>;



  return (
    <main>
      <section className='App'>
        <h1>Fun with API</h1>
        <PromptInput addNewResponse={addNewResponse}/>
        {/* {checkResponses} */}
        <Responses responseLog={responseLog}/>
      </section>
    </main>
  );
}

export default App;
