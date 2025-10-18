
import { useCart } from '../component/useCart';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function BillForm() {

  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);


  return (
    <div className='max-w-4xl mx-auto my-40'>
      <ul className='flex justify-around text-[16px] font-bold text-center'>
        <li className='w-1/6 pr-20 text-xl'>Book</li>
        <li className='w-1/6 text-xl'>Name</li>
        <li className='w-1/6 text-xl'>Price</li>
        <li className='w-1/6 text-xl'>Quantity</li>
        <li className='w-1/6 text-xl'>Total</li>
        <li className='w-1/6 text-xl '>Update</li>
      </ul>

      {cartItems.length === 0 ? (<p className='text-[22px] text-red-600 mt-8 text-center'>Your cart is Empty</p>) : (
        cartItems.map(item => (

          <ul className='flex justify-between items-center text-center  mt-6 text-[16px] ' key={item.id}>
            <li className='w-1/6'>
              <img src={item.img} alt={item.name} className='w-20 h-20 rounded-[8px] object-cover' />
            </li>
            <li className='text-[12px] font-semibold w-1/6'>{item.name}</li>
            <li className='w-1/6'>$ {item.price}</li>
            <li className='w-1/6'>{item.qty}</li>
            <li className='w-1/6 '>$ {(item.price * item.qty).toFixed(2)}</li>
            <li className='text-red-600 w-1/6' onClick={() => removeFromCart(item.id)}><button><FaTrash /></button></li>
          </ul>
        ))
      )}
      <div className='text-center mt-10'>
        <p className='text-[24px] font-semibold'>Total : ${totalPrice}</p>
      </div>
      <div className='text-center mt-9 font-semibold'>
        <Link to='/' className='text-[20px] border-none px-5 py-2 rounded-2xl bg-cyan-400 hover:bg-cyan-500'>Checkout</Link>
      </div>
    </div>
  )
}
