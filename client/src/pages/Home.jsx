import Client from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModel';
import AddProjectModal from '../components/AddProjectModel';
import { useState } from 'react';
import { FaProjectDiagram, FaUser } from 'react-icons/fa';

export default function Home() {

    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openClientModal = () => setIsClientModalOpen(true);
  const closeClientModal = () => setIsClientModalOpen(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <>
      <div className='flex w-full justify-center'>
          <div className='container'>
            <div className='flex gap-4 mb-4 mt-6'>
              <button
                onClick={openClientModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <p className='flex items-center gap-4'>Add Client <span><FaUser /></span></p>
              </button>
              <button
                onClick={openProjectModal}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                <p className='flex items-center gap-4'>Add Project <span><FaProjectDiagram /></span></p>
              </button>
            </div>
            <Projects />
            <hr className='my-6'/>
            <Client />
          </div>
        </div>
        <AddClientModal isOpen={isClientModalOpen} onClose={closeClientModal} />
        <AddProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />
    </>
  );
}