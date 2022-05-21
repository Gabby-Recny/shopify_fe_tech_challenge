import React from 'react';
import './Main.scss'; 
import PromptInput from '../PromptInput/PromptInput';
import Responses from '../Responses/Responses';
import useLocalStorage from '../utilities/useLocalStorage';

const Main = () => {

  // const [ responseLog, setResponseLog ] = useLocalStorage("responseLog", [])

  const [ responseLog, setResponseLog ] = React.useState([])
  // const [ response, setResponse ] = React.useState('')


  const addNewResponse = (newResponse) => {
    console.log('New Response: App Line 14', newResponse)
    // setResponse(newResponse)
    setResponseLog([newResponse, ...responseLog])
  }

  const checkResponse = (response) => {
    if (!response.responseData) {
      return (
        <h4>There seem to be an issue on our end. Please refresh or try again in a little bit!</h4>
      )
    } else {
      addNewResponse(response)
    }
  }

  // const checkResponses = response.responseData && <Responses responseLog={responseLog}/>;



  return (
    <main>
      <section className='main-container'>
        <h1>Fun with API</h1>
        <PromptInput checkResponse={checkResponse}/>
        {/* {checkResponses} */}
        <Responses responseLog={responseLog}/>
      </section>
    </main>
  );
}

export default Main;
