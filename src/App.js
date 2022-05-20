import React, {useState} from 'react';
import './App.scss';
import TextArea from './TextArea/TextArea';
import Responses from './Responses/Responses';

function App() {
  const [ allResponses, setAllResponses ] = useState([])

  const createNewResponse = (newResponse) => {
    // console.log('New Response App Line 11', newResponse)

    setAllResponses([...allResponses, newResponse])

  }


  return (
    <main>
      <section className='App'>
        <h1>Fun with API</h1>
        <TextArea createNewResponse={createNewResponse}/>
        <Responses responses={allResponses}/>
      </section>
      {/* <section className='curve'></section> */}
    </main>
  );
}

export default App;
