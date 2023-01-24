import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items =useSelector((state)=>state.cart);
  
  return (
    <div>

        <div className=' text-3xl bg-black text-white  px-4 text-center'>
            < Link className='hover:text-blue-600 focus:text-red-300' to ="/">Home</Link>
            < Link className='px-4 hover:text-blue-600 focus:text-red-300' to="/cart">Cart</Link>
        </div>
        <div className="text-white bg-black">cart items count: {items.length}</div>
    </div>
  )
}

export default Navbar