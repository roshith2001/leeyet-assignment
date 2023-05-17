import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = (props) => {

    const[productName, setProductName] = useState('');
    const[productDesc, setProductDesc] = useState('');
    const[productPrice, setProductPrice] = useState('');
    const[productId, setProductId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const form = event.target;
        const formData = new FormData(form); 
        try {
          const response = await axios.put(
            "http://apitextile.eyeterp.com/product/editproduct",
            formData 
          );
          console.log(response.data); 
         
        } catch (error) {
          console.error(error); 
        }
      };

    return(
        <div className='w-full z-50 flex fixed top-0 left- 0  justify-center items-center my-4'>
            <button className='p-8 bg-red-400 hover:bg-red-500' onClick={props.onClose}>X</button>
            <form onSubmit={handleSubmit} className='flex w-5/6 shadow-lg bg-zinc-100 flex-col my-4'>
                Edit Product
                <label htmlFor='product-name' className='my-4'>
                    Product Name: 
                    <input type='text' name='product-name' value={productName} onChange={(e) => setProductName(e.target.value)} className='w-2/3 border-2 mx-4'></input>
                </label>
                <label htmlFor='product-description' className='my-4'>
                    Product Description: 
                    <input type='text' name='product-description' value={productDesc} onChange={(e) => setProductDesc(e.target.value)} className='w-2/3 border-2 mx-4'></input>
                </label>
                <label htmlFor='product-price' className='my-4'>
                    Product Price: 
                    <input type='number' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='w-2/3 border-2 mx-4'></input>
                </label>
                <label htmlFor='product-id' className='my-4'>
                    Product Id: 
                    <input type='text' name='product-id' value={productId} onChange={(e) => setProductId(e.target.value)} className='w-2/3 border-2 mx-4'></input>
                </label>
                <button type='submit' className='bg-green-200 w-1/6 self-center hover:bg-green-400'>Submit</button>
            </form>
        </div>
    );
}

export default EditProduct;
