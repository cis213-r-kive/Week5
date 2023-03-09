import {useState} from 'react';

import './App.css';
import Add from './components/Add';
import Multiply from './components/Multiply';
import Subtract from './components/Subtract';
import Divide from './components/Divide';
import Calculation from './components/Calculation';
import Result from './components/Result';

function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState('add');

  function changeFirstNumberHandler(event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondHandler(event) {
    setSecondNumber(event.target.value);
  }

  function updateOperationHandler(event) {
    setOperation(event.target.value);
  }

  let result;
     
  if (operation === 'add'){
    result = firstNumber + secondNumber;
  } else if (operation === 'subtract'){
    result = firstNumber - secondNumber;
  } else if (operation === 'multiply'){
    result = firstNumber * secondNumber;
  } else {
    result = firstNumber / secondNumber;
  }

  return (
    <div className="App">
      <Add />
      <Subtract />
      <Multiply />
      <Divide />
      
      <Calculation 
        props1={changeFirstNumberHandler}
        props2={changeSecondHandler}
        props3={updateOperationHandler}
      />
      <Result props4={result} />
     
    </div>

  );
}

export default App;
