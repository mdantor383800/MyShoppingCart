import React, { useState } from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials');

    }
  }
  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>

      <form onSubmit={handleSubmit} className='bg-white w-[400px] h-[300px] rounded '>
        <div className='flex flex-col gap-2 justify-center items-center mt-15'>
            <p className='text-[15px] font-bold'>Username</p>
            <input type='text' placeholder='User name' value={username} onChange={(e) => setUsername(e.target.value)} required className='border px-2 rounded w-[200px]' />
            <p className='text-[15px] font-bold'>Password</p>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required className='border px-2 rounded w-[200px]' />
        </div>
        <div className='text-center my-4'>
          <button
            type='submit' className='bg-[#2f4468] py-1 text-white px-5 rounded-[6px] cursor-pointer w-[200px]'>
            Login</button>

          {error && <p className='text-red-600 mt-2'>{error}</p>}
        </div>
      </form>
    </div>
  )
}
