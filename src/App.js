import './App.css';
import Add from './components/Add';
import Multiply from './components/Multiply';
import Subtract from './components/Subtract';
import Divide from './components/Divide';

function App() {
  return (
    <div className="App">
      <Add />
      <Subtract />
      <Multiply />
      <Divide />
    </div>
  );
}

export default App;
