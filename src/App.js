import React from 'react';
import './App.scss';
import TextArea from './TextArea/TextArea';
import Responses from './Responses/Responses';
import useLocalStorage from './utilities/useLocalStorage';

function App() {

  const [ responseLog, setResponseLog ] = useLocalStorage("responseLog", [])

  // const [ responseLog, setResponseLog ] = useState([])

  const addNewResponse = (newResponse) => {
    setResponseLog([newResponse, ...responseLog])
  }


  return (
    <main>
      <section className='App'>
        <h1>Fun with API</h1>
        <TextArea addNewResponse={addNewResponse}/>
        <Responses responseLog={responseLog}/>
      </section>
    </main>
  );
}

export default App;
