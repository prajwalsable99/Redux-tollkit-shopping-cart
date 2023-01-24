import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { STATUSES } from '../store/productsSlice';
import { useSelector } from 'react-redux';

import { fetchprods } from '../store/productsSlice';

const Products = () => {

    const {data,status}=useSelector((state)=>state.products);



    const disptach =useDispatch();

    

   
    const handleadd=(product)=>{


        disptach(add(product))
        

    }
    

    useEffect(() => {
        

            disptach(fetchprods())
        


    }, []);

    if(status===STATUSES.LOADING){
        return (<div>loading...</div>)
    }
    if(status===STATUSES.ERROR){
        return(<div>error</div>)
    }


    return (
        <section className='grid grid-cols-5 g-4 p-4 bg-red'>
            {
                data.map((product, index) => (

                    <div className="flex border-solid border-1 border-gray-400" key={index}>
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg object-contain h-28 w-56" src={product.image} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{product.price}</h5>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                                onClick={()=>{handleadd(product)}}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            } 
        </section>
    )
}

export default Products