import React from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Cart = () => {

  const items=useSelector((state)=>state.cart);
  const dispatch=useDispatch();

  const handleremove=(id)=>{

    dispatch(remove(id));
  }
  return (
  
      <section className='grid grid-cols-5 g-4 p-4 bg-red'>
          {
              items.map((product, index) => (

                  <div className="flex border-solid border-1 border-gray-400" key={index}>
                      <div className="rounded-lg shadow-lg bg-white max-w-sm">
                          <a href="#!">
                              <img className="rounded-t-lg object-contain h-28 w-56" src={product.image} alt="" />
                          </a>
                          <div className="p-6">
                              <h5 className="text-gray-900 text-xl font-medium mb-2">{product.title}</h5>
                              <h5 className="text-gray-900 text-xl font-medium mb-2">{product.price}</h5>
                              <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                              onClick={()=>{handleremove(product.id)}}>remove</button>
                          </div>
                      </div>
                  </div>
              ))
          }
      </section>
  )
}

export default Cart