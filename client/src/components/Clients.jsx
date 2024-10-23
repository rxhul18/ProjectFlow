import { useQuery} from '@apollo/client'
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';



const Client = () => {
  const {loading, error, data} = useQuery(GET_CLIENTS);

  if (loading) return <p><Spinner /></p>
  if (error) return <p>SomeThing Went Wrong!!</p>
    
  return (
    <>
    { !loading && !error && (
        <table className='table-auto w-full'>
            <thead >
                <tr className='border-b-2 border-gray-300'>
                    <th className=' p-3 text-start'>Name</th>
                    <th className=' p-3 text-start'>Email</th>
                    <th className='p-3 text-start'>Phone</th>
                    <th className='p-3 text-start'></th>
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