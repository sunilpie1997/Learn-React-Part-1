import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import HelloWithoutJsx from './components/HelloWithoutJsx';
import HelloWithJsx from './components/HelloWithJsx';

function App() {
  return (
    
    /*
    <div className="App">
    
      
     <Greet/>
     <Welcome/>
     
    </div>
    */
   <div className="App">
    
      
     <HelloWithoutJsx/>
     <HelloWithJsx/>
     
    </div>

  );
}

export default App;
