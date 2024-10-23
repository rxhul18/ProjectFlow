import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center mt-20'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-5' />
      <h1 className='text-4xl font-bold mb-4'>404</h1>
      <p className='text-2xl mb-4'>Sorry, this page does not exist</p>
      <Link to='/' className='text-blue-500 hover:text-blue-600 transition-colors duration-300'>
        Go Back
      </Link>
    </div>
  );
}
