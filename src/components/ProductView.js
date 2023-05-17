import React, {useState} from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';
import EditImage from './EditImage';

const ProductView = ({items}) => {

    const[showEdit, setShowEdit] = useState(false);
    const[showImageEdit, setShowImageEdit] = useState(false);

    const productIdDel = items._id;

    const handleDeleteClick = async () => {
        try {
          const response = await axios.delete(
            "http://apitextile.eyeterp.com/product/deleteproduct",
            {
              data: {_id: productIdDel} ,
            }
          );
          console.log(response.data); 

        } catch (error) {
          console.error(error); 
        }
      };

      const handleEditClick = () => {
        setShowEdit(true);
      }
      const handleEditClose = () => {
        setShowEdit(false);
      }
      const handleEditImageClick = () => {
        setShowImageEdit(true);
      }

      const handleEditImageClose = () => {
        setShowImageEdit(false);
      }

      return(
        <div className='w-1/3 shadow-md py-4 relative'>
            <div className='w-11/12 mx-auto'>
                <img src={items.file} alt='Product' />
                <button className='z-90 absolute top-8 right-8 bg-amber-400 p-2 hover:opacity-70' onClick={handleEditImageClick}>Edit</button>
            </div>
            <h1 className='font-bold text-2xl'>{items.productName}</h1>
            <p className=''>{items.description}</p>
            <p className='font-bold text-xl'>Rs.{items.price}</p>
            <p className='text-zinc-200'>ID: {items._id}</p>
            <div className='w-full flex justify-evenly'>
                <button onClick={handleDeleteClick} className='bg-red-400 p-4 hover:bg-red-500'>Delete</button>
                <button onClick={handleEditClick} className='bg-amber-400 p-4 hover:bg-amber-500'>Edit</button>
            </div>
            {showEdit ? <EditProduct onClose={handleEditClose}/> : ''}
            {showImageEdit ? <EditImage onClose={handleEditImageClose} items={items}/> : ''}
        </div>
      );

    }

export default ProductView;

// import React, {useState} from 'react';
// import axios from 'axios';
// import EditProduct from './EditProduct';
// import EditImage from './EditImage';

// const ProductView = (props) => {

//     const[showEdit, setShowEdit] = useState(false);
//     const[showImageEdit, setShowImageEdit] = useState(false);

//     const productIdDel = 1;

//     const handleDeleteClick = async () => {
//         try {
//           const response = await axios.delete(
//             "http://apitextile.eyeterp.com/product/deleteproduct",
//             {
//               data: {_id: productIdDel} ,
//             }
//           );
//           console.log(response.data); 

//         } catch (error) {
//           console.error(error); 
//         }
//       };

//       const handleEditClick = () => {
//         setShowEdit(true);
//       }
//       const handleEditClose = () => {
//         setShowEdit(false);
//       }
//       const handleEditImageClick = () => {
//         setShowImageEdit(true);
//       }

//       const handleEditImageClose = () => {
//         setShowImageEdit(false);
//       }

//       return(
//         <div className='w-1/3 shadow-md py-4 relative'>
//             <div className='w-11/12 mx-auto'>
//                 <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='Product' />
//                 <button className='z-90 absolute top-8 right-8 bg-amber-400 p-2 hover:opacity-70' onClick={handleEditImageClick}>Edit</button>
//             </div>
//             <h1 className='font-bold text-2xl'>T-Shirt</h1>
//             <p className=''>Nice One, This is Good</p>
//             <p className='font-bold text-xl'>Rs. 76</p>
//             <p className='text-zinc-200'>ID: 1</p>
//             <div className='w-full flex justify-evenly'>
//                 <button onClick={handleDeleteClick} className='bg-red-400 p-4 hover:bg-red-500'>Delete</button>
//                 <button onClick={handleEditClick} className='bg-amber-400 p-4 hover:bg-amber-500'>Edit</button>
//             </div>
//             {showEdit ? <EditProduct onClose={handleEditClose}/> : ''}
//             {showImageEdit ? <EditImage onClose={handleEditImageClose} items='1'/> : ''}
//         </div>
//       );

//     }

// export default ProductView;
