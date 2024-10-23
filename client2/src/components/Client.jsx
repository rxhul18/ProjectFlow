import { gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow';

const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`

const Client = () => {
  const {loading, error, data} = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>SomeThing Went Wrong!!</p>
    
  return (
    <>
    { !loading && !error && (
        <table className='table-auto'>
            <thead >
                <tr className=''>
                    <th className='border border-gray-300 p-3'>Name</th>
                    <th className='border border-gray-300 p-3'>Email</th>
                    <th className='border border-gray-3003 p-3'>Phone</th>
                    <th className='border border-gray-300 p-3'></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client => (
                    <ClientRow key={client.id} client={client}/>
                ))}
            </tbody>
        </table>
    )}
    </>
  )
}

export default Client