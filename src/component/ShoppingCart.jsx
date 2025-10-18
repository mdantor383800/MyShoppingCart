
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useCart } from './useCart';
export default function ShoppingCart() {
  const { cartCount } = useCart();

  return (
    <div className='relative inline-block'>

        <Link to='/billform' className="text-[30px] cursor-pointer hover:text-cyan-600"><FaShoppingCart /></Link>
        <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1 rounded-full'>{cartCount}</span>

    </div>
  )
}
