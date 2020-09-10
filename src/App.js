import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloWithoutJsx from './components/HelloWithoutJsx';
import HelloWithJsx from './components/HelloWithJsx';
import Message from './components/Message';

function App() {
  return (
    
    <div className="App">

    <Message/>

    </div>
    
    /*

    <div className="App">
    
      
      <Greet name="PIE" heroName="Superman">

        <p>This is children props</p>

     </Greet>


     <Greet name="RAJU" heroName="Batman">

        <button>Action</button>

     </Greet>


     <Greet name="BATARI" heroName="Flash">

     </Greet>

     
     <Welcome name="KANHAI" heroName="Aquaman">

     </Welcome>
     
    </div>
    

    /*
   <div className="App">
    
      
     <HelloWithoutJsx/>
     <HelloWithJsx/>
     
    </div>

    */

    
  );
}

export default App;
