import { useEffect, useState } from 'react';
import { products } from '../data';

export default function ProductList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = localStorage.getItem('cart');
    if (saveCart) {
      setCart(JSON.parse(saveCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updateCart = cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  };


  const removeFromCart = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) =>
      acc + item.price * item.quantity, 0)
  };

  return (
    <div className='max-w-3xl mx-auto bg-gray-200 h-screen pt-3'>
      <div className='flex justify-between px-6'>
        <div className='bg-emerald-200 me-30 pe-3 rounded'>
          <h1 className='text-xl font-semibold'>🛒 Cart Items: {cart.length}</h1>
          <p className='text-[18px] ps-1'>Total:  ৳-{totalPrice()}</p>
        </div>
        {cart.length > 0 && (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}- ৳-{item.price} × {item.quantity}</span>
                <button
                  className='text-red-500 hover:text-red-700 text-sm bg-gray-800 px-2 rounded ms-2 cursor-pointer'
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}

          </ul>
        )}
      </div>
      <div className='pt-10 ps-8'>

        <div className='grid grid-cols-2 gap-4'>
          {products.map(product => (
            <div className='bg-blue-100 px-4 h-[150px] w-[150px] pt-4 rounded shadow-xl' key={product.id}><p className=' font-semibold'>{product.name} </p>
              <div className='flex justify-between mt-17'>
                <span>৳-{product.price}</span>
                <button className='bg-blue-500 px-3 font-semibold text-white rounded hover:bg-blue-600 cursor-pointer' onClick={() => handleCart(product)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}