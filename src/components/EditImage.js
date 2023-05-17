import React, { useState } from 'react';
import axios from 'axios';

const EditImage = (props) => {

    const[newUrl, setNewUrl] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        
        const formData = new FormData(); 
        formData.append('deleteUrl', props.items.deletUrl);
        formData.append('addUrl', newUrl);
        formData.append('_id', props.items._id);
        
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
                Edit Image
                <label htmlFor='product-new-image' className='my-4'>
                    New Image: 
                    <input type='file' name='product-new-image' onChange={(e) => setNewUrl(e.target.file[0])} className='w-2/3 border-2 mx-4'></input>
                </label>
                <button type='submit' className='bg-green-200 w-1/6 self-center hover:bg-green-400'>Submit</button>
            </form>
        </div>
    );
}

export default EditImage;
