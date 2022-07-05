//import Calculator from '../Calculator/Calculator';
import CalculatorWithState from '../Calculator/CalculatorWithState';
import Sample from '../Sample/Sample';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <Calculator /> */}
      <CalculatorWithState />
      <br />
      <Sample />
    </div>
  );
}

export default App;
