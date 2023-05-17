import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductView from './ProductView';

const ViewProducts = (props) => {

    const[productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get('http://apitextile.eyeterp.com/product/viewproduct')
        .then(response => {
            console.log(response);
            setProductData(response);
        })
        .catch(err => {
            console.error(err);
        })
    },[]);

    return(
        <div className='flex items-around'>
           {productData.map((item,index) => {
            return(
                <ProductView items={item} key={index}/>
            );
           })}
        </div>
    );
}

export default ViewProducts;