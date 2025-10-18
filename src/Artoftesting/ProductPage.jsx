import SortByName from '../component/SortByName.jsx'
import { books } from '../data/data.js';
import Counter from '../component/Counter.jsx';
import { sortItem } from '../component/SortItem';
import { useState } from 'react';
import { useCart } from '../component/useCart.jsx';

export default function ProductPage() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [sortType, setSortType] = useState('');

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: value,
    }));
  };


  const sortedBooks = sortItem(books, sortType);

  return (
    <div className='container max-auto mx-auto mt-[80px] mb-8'>
      <SortByName onSortChange={setSortType} />
      <ul className='w-full mx-auto gap-y-10 md:w-full grid grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4'>
        {sortedBooks.map((book) => (
          <li key={book.id} className='w-[250px] h-auto flex flex-col justify-between mx-auto shadow-xl rounded'>
            <div>
              <img
                src={book.img}
                alt={book.name}
                className='w-full h-[200px] sm:w-full sm:h-[200px] hover:scale-105 transition-transform duration-300 rounded'
              />
            </div>
            <div className='mt-3 text-center text-[20px] font-bold'>
              {book.name}
            </div>
            <div className='mt-3 text-[15px] ms-2'>
              {book.description}
            </div>
            <div>
              <Counter value={quantities[book.id] || 1} onChange={val => handleQuantityChange(book.id, val)} />
            </div>

            <div className='flex justify-around py-5 mt-5 bg-gray-200'>
              <div className='text-[18px] font-bold'>${book.price}</div>
              <div className='bg-[#2db9c9] text-[10px] text-white font-semibold px-3 py-1 rounded-2xl hover:shadow-[0_4px_6px_-1px_rgba(107,110,150,0.5)]'>

                <button
                  className='cursor-pointer text-[15px]'
                  onClick={() => addToCart(book, quantities[book.id] || 1)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
