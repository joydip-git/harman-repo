import Click from '../Others/Click';
import ClickWithHook from '../Others/ClickWithHook';
import Hover from '../Others/Hover';
import HoverWithHook from '../Others/HoverWithHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Click x={100} />
      <br />
      <br />
      <Hover y={200} />
      <br />
      <br />
      <ClickWithHook x={100} />
      <br />
      <br />
      <HoverWithHook y={200} />
    </div>
  );
}

export default App;
