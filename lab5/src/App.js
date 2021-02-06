import './App.css';
import TroubleMaker from './TroubleMaker.jsx';
import SawTrouble from './SawTrouble.jsx';
import React, {useState} from 'react';



function App(props) {
  
  const [trouble, setTrouble] = useState(0);

  const incrementTrouble = () => {
      setTrouble(prev => prev + 1);
  }

  return (
    <div>
      <TroubleMaker 
        incrementTrouble={incrementTrouble}
        />
      <SawTrouble
        trouble={trouble}
      />
    </div>
  );
}

export default App;
