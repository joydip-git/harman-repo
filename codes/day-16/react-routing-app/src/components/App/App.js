import DashBoard from '../common/DashBoard/DashBoard';
import AppRoutes from '../routes/AppRoutes';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      {/* <Check val={100}>
        Welcome to children props
      </Check> */}
      <DashBoard />
      <AppRoutes />
    </Fragment>
  );
}

/**
 *
 * {
 *  val:100,
 *  children:[RE, RE, RE, RE]
 * }
 */


// function Check(props) {
//   const { val, children } = props
//   return <div>{children}</div>
// }

export default App;

// function Fragment(props) {
//     return props.children
// }
