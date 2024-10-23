import { useMutation } from '@apollo/client'
import deleteIcon from './assets/delete.png'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries';
import { FaTrash } from 'react-icons/fa';

const ClientRow = ({client}) => {

  const [deleteClient] = useMutation(DELETE_CLIENT,{
    variables: {id: client.id},
    refetchQueries: [{query: GET_CLIENTS}],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr className="border-b-[0.5px] border-gray-300 hover:bg-slate-100">
        <td className="p-3">{client.name}</td>
        <td className="p-3">{client.email}</td>
        <td className="p-3">{client.phone}</td>
        <td className="p-3">
            <button className="bg-red-600 px-3 py-2 rounded text-sm" onClick={deleteClient}>
              <FaTrash color='white'/>
              {/* <img src={deleteIcon} alt="deleteIcon" width={18} height={25} /> */}
            </button>
        </td>
    </tr>
  )
}

export default ClientRow