// import {FaTrash } from 'react-icon'


const ClientRow = ({client}) => {
  return (
    <tr className="border border-gray-400">
        <td className="border p-3">{client.name}</td>
        <td className="border p-3">{client.email}</td>
        <td className="border p-3">{client.phone}</td>
        <td className="border p-3">
            {/* <button className="bg-purple-500 px-4 py-2 rounded text-sm"><FaTrash /></button> */}
        </td>
    </tr>
  )
}

export default ClientRow