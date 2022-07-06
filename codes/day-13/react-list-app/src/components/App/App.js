import './App.css';
//import ElementList from '../../ElementList';
import ProductList from '../product/productlist/ProductList';

function App() {
  // return <ElementList />
  const appDesign = (
    <div className='container'>
      <h2>Product Management System</h2>
      <br />
      <ProductList />
    </div>
  )
  return appDesign
}

export default App;
