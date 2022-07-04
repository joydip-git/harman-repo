import './App.css';
import Comp from './Comp';
import Sample from './Sample';

function App() {

  const call = () => {
    console.log('called')
  }
  const data = 'Joydip'
  const value = 100
  const someData = 'Joydip'
  const someFn = () => {
    window.alert('passed from one to another component')
  }

  const style = {
    backgroundColor: 'aliceblue',
    fontSize: 'large',
    fontFamily: 'Segoe UI'
  }

  const design = (
    <div className="App">
      Name:&nbsp;<span>{data}</span>
      <br />
      <button className='btnStyle' style={style} onClick={call}>Click Me!!!</button>
      <br />
      <Sample
        someValue={value}
        name={someData} someFnHandler={someFn}
        x={10}
      />
      <br />
      <Comp />
    </div>
  );
  return design
}

export default App;

/**
 * 
 * const propsObject = {
 *    someValue:100,
 *    name: 'Joydip',
 *    someFnHandler:()=>{}
 * }
 * Sample(propsObject)
 */
