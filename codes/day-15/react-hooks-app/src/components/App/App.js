import { useState } from 'react';
import Another from '../Others/Another';
import EffectHookComponent from '../Others/EffectHookComponent';
import Parent from '../Others/Parent';
import Sample from '../Others/Sample';
import './App.css';

function App() {
  const [show, changeShow] = useState(false)
  const ids = [1, 2, 3, 4]
  /*
  return (
    <div className="App">
      <button onClick={
        () => {
          changeShow(
            (prevValue) => {
              return !prevValue
            }
          )
        }
      }>
        {show ? 'Hide' : 'Show'}
      </button>
      {
        show && <Sample />
      }
      <br />
      <br />
      <br />
      <Another />
      <br />
      <br />
      {
        ids.map(
          (id) => <div><EffectHookComponent postId={id} /><br /><br /></div>
        )
      }
    </div>
  );
  */
  return <div className='App'><Parent /></div>
}

export default App;
