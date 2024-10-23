import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='space-y-2 flex w-full justify-start gap-10'>
        <li className='flex items-center p-3 bg-white rounded shadow'>
          <FaIdBadge className='mr-2' /> {client.name}
        </li>
        <li className='flex items-center p-3 bg-white rounded shadow'>
          <FaEnvelope className='mr-2' /> {client.email}
        </li>
        <li className='flex items-center p-3 bg-white rounded shadow'>
          <FaPhone className='mr-2' /> {client.phone}
        </li>
      </ul>
    </>
  );
}
