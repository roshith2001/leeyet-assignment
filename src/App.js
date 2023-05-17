import { useState } from 'react';
import axios from 'axios';
import './App.css';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';
import ProductView from './components/ProductView';



function App() {
  const[showAddPro, setShowAddPro] = useState(false);
  const[findById, setFindById] = useState('');
  const[items, setItems] = useState(null);
  const[showIdItem, setShowIdItem] = useState(false);

  const handleAddClick = () => {
    setShowAddPro(true);
  }
  const handleClose = () => {
    setShowAddPro(false);
  }

const handleIdSubmit = (e) => {
  e.preventDefault();
  axios.get(`http://apitextile.eyeterp.com/product/productViewById?_id=${findById}`)
  .then(response => {
      console.log(response);
      setItems(response.data);
  })
  .catch(err => {
      console.error(err);
  })
  setShowIdItem(true);
}

  return (
    <div className="App">
      <button onClick={handleAddClick} className='bg-green-400 p-4 hover:bg-green-500'>Add Product</button>
      {showAddPro ? <AddProduct onClose={handleClose}/> : ''}
      <ViewProducts />
      <div className='bg-zinc-100 p-4'>
      <h1 className='font-bold text-xl p-3'>Show by Id</h1>
      <form className='p-2' onSubmit={handleIdSubmit}>
        <label htmlFor='find-by-id'>Enter the Id of the product: 
          <input type='text' name='find-by-id' value={findById} className='border-2 mx-4' onChange={(e) => setFindById(e.target.value)}></input>
          <button type='submit' className='bg-green-400 hover:bg-green-500 p-3'>Submit</button>
        </label>
      </form>
      {showIdItem? <ProductView items={items}/> : ''}
      </div>
    </div>
  );
}

export default App;
