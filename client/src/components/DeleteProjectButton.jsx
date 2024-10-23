import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='flex mt-5 ml-auto'>
      <button className='bg-red-600 text-white m-2 p-2 rounded hover:bg-red-700' onClick={deleteProject}>
        <p className='flex items-center justify-between gap-3'><span><FaTrash className='icon' /></span> Delete Project</p>
      </button>
    </div>
  );
}
