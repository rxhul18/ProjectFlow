// import { useMutation } from '@apollo/client'
import deleteIcon from './assets/delete.png'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries';
import { FaTrash } from 'react-icons/fa';
import { gql, useQuery, useMutation } from "@apollo/client";
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS_BY_CLIENT } from '../queries/projectQueries';

const ClientRow = ({client}) => {

  const { data, loading, error } = useQuery(GET_PROJECTS_BY_CLIENT, {
    variables: { clientId: client.id }, // Updated variable name to match the query
  });
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const [deleteClient] = useMutation(DELETE_CLIENT);
  
  const handleDeleteClient = async () => {
    if (loading) return;

    if (data && data.projectsByClient) {
      const projectDeletionPromises = data.projectsByClient.map((project) =>
        deleteProject({ variables: { id: project.id } })
      );
      await Promise.all(projectDeletionPromises);
    }

    await deleteClient({ variables: { id: client.id } }); // Added await here
  };


  return (
    <tr className="border-b-[0.5px] border-gray-300 hover:bg-slate-100">
        <td className="p-3">{client.name}</td>
        <td className="p-3">{client.email}</td>
        <td className="p-3">{client.phone}</td>
        <td className="p-3">
            <button className="bg-red-600 px-3 py-2 rounded text-sm" onClick={handleDeleteClient}>
              <FaTrash color='white'/>
            </button>
        </td>
    </tr>
  )
}

export default ClientRow
