//import Calculator from '../Calculator/Calculator';
import CalculatorWithState from '../Calculator/CalculatorWithState';
import CallbackRefClassComp from '../CallbackRef/CallbackRefClassComp';
import Sample from '../Sample/Sample';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <Calculator /> */}
      <CalculatorWithState />
      <br />
      <Sample />
      <br />
      <br />
      <CallbackRefClassComp />
    </div>
  );
}

export default App;
