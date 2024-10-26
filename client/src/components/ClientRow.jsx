// import { useMutation } from '@apollo/client'
import deleteIcon from './assets/delete.png'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries';
import { FaTrash } from 'react-icons/fa';
import { gql, useQuery, useMutation } from "@apollo/client";
import { DELETE_PROJECT } from '../mutations/projectMutations';
// import { DELETE_CLIENT } from "./clientMutations";

// Query to get projects associated with a specific client
const GET_PROJECTS_BY_CLIENT = gql`
  query GetProjectsByClient($clientId: ID!) {
    projects(clientId: $clientId) {
      id
    }
  }
`;

const ClientRow = ({client}) => {

  // const [deleteClient] = useMutation(DELETE_CLIENT,{
  //   variables: {id: client.id},
  //   refetchQueries: [{query: GET_CLIENTS}],
  //   // update(cache, { data: { deleteClient } }) {
  //   //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
  //   //   cache.writeQuery({
  //   //     query: GET_CLIENTS,
  //   //     data: {
  //   //       clients: clients.filter((client) => client.id !== deleteClient.id),
  //   //     },
  //   //   });
  //   // },
  // });

  const { data, loading, error } = useQuery(GET_PROJECTS_BY_CLIENT, {
    variables: { clientId: client.id }, // Updated variable name to match the query
  });

  const [deleteProject] = useMutation(DELETE_PROJECT);
  const [deleteClient] = useMutation(DELETE_CLIENT);

  const handleDeleteClient = async () => {
    if (loading) return;

    // Step 1: Delete all projects associated with the client
    if (data && data.projects) {
      const projectDeletionPromises = data.projects.map((project) =>
        deleteProject({ variables: { id: project.id } })
      );

      // Wait for all projects to be deleted
      await Promise.all(projectDeletionPromises);
    }

    // Step 2: Now delete the client
    deleteClient({ variables: { id: client.id } });
  };


  return (
    <tr className="border-b-[0.5px] border-gray-300 hover:bg-slate-100">
        <td className="p-3">{client.name}</td>
        <td className="p-3">{client.email}</td>
        <td className="p-3">{client.phone}</td>
        <td className="p-3">
            <button className="bg-red-600 px-3 py-2 rounded text-sm" onClick={handleDeleteClient}>
              <FaTrash color='white'/>
              {/* <img src={deleteIcon} alt="deleteIcon" width={18} height={25} /> */}
            </button>
        </td>
    </tr>
  )
}

export default ClientRow
