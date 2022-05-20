import React, {useState} from 'react';
import './App.scss';
import TextArea from './TextArea/TextArea';
import Responses from './Responses/Responses';

function App() {
  const [ responseLog, setResponseLog ] = useState([])

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
      {/* <section className='curve'></section> */}
    </main>
  );
}

export default App;
