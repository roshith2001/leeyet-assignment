import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = (props) => {

    const[productName, setProductName] = useState('');
    const[productDesc, setProductDesc] = useState('');
    const[productPrice, setProductPrice] = useState('');
    const[productImg1, setProductImg1] = useState(null);
    const[productId, setProductId] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('description', productDesc);
        formData.append('price', productPrice);
        formData.append('file', productImg1);
        formData.append('_id', productId);

        try{
            const response = await axios.post('http://apitextile.eyeterp.com/product/addproduct', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            console.log(response.data);
        }
        catch(err){
            console.error(err);
        }
    }


    return(
        <div className='w-full z-50 flex justify-center items-center my-4'>
            <button className='p-8 bg-red-400 hover:bg-red-500' onClick={props.onClose}>X</button>
            <form onSubmit={handleSubmit} className='flex w-5/6 shadow-lg flex-col my-4'>
                Add Product
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
                <label htmlFor='product-image1' className='my-4'>
                    Product Image: 
                    <input type='file' name='product-image1' onChange={(e) => setProductImg1(e.target.files[0])} className='w-2/3 border-2 mx-4'></input>
                </label><br />
                <label htmlFor='product-id' className='my-4'>
                    Product Id: 
                    <input type='text' name='product-id' value={productId} onChange={(e) => setProductId(e.target.value)} className='w-2/3 border-2 mx-4'></input>
                </label>
                <button type='submit' name='product-image2' className='bg-green-200 w-1/6 self-center hover:bg-green-400'>Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;