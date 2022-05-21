import React from 'react';
import './Main.scss'; 
import PromptInput from '../PromptInput/PromptInput';
import Responses from '../Responses/Responses';
import useLocalStorage from '../utilities/useLocalStorage';

const Main = () => {

  // const [ responseLog, setResponseLog ] = useLocalStorage("responseLog", [])

  const [ responseLog, setResponseLog ] = React.useState([])


  const addNewResponse = (newResponse) => {
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

  return (
    <main>
      <section className='main-container'>
        <h1>Fun with API</h1>
        <PromptInput checkResponse={checkResponse}/>
        <Responses responseLog={responseLog}/>
      </section>
    </main>
  );
}

export default Main;
