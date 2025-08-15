import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Counter({ value = 1, onChange}) {
    const[count, setCount] = useState(value);

      React.useEffect(() => {
    setCount(value);
  }, [value]);

      const decrease = () => {
       if (count > 1) {
      setCount(count - 1);
      onChange(count - 1);
    }
    };

    const increase = () => {
      setCount(count + 1);
      onChange(count + 1)
    };

    
  return (
    <div className='flex justify-center mt-'>
        <div className='text-[14px] font-bold mt-1 text-blue-600 px-2 cursor-pointer ' onClick={decrease}
                >
           <FaChevronLeft/> 
        </div>
        <div className='text-[14px] font-bold'>{count}</div>
            
         <div className='text-[14px] mt-1 cursor-pointer text-blue-600 px-2 ' onClick={increase}><FaChevronRight/></div>
        
    </div>
  )
}
