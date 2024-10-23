import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clients from './components/Clients'
import Header from './components/Header'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import AddClientModal from './components/AddClientModel'
import AddProjectModal from './components/AddProjectModel'
import { useState } from 'react'
import { FaUser, FaProjectDiagram } from 'react-icons/fa'
import Projects from './components/Projects'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import Home from './pages/Home';


const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri:"http://localhost:3050/graphql",
  cache,
})

function App() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openClientModal = () => setIsClientModalOpen(true);
  const closeClientModal = () => setIsClientModalOpen(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <>
      {/* <ApolloProvider client={client}>
        <Header />
        <div className='flex w-full justify-center'>
          <div className='container'>
            <div className='flex gap-4 mb-4'>
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
            <Clients />
          </div>
        </div>
        <AddClientModal isOpen={isClientModalOpen} onClose={closeClientModal} />
        <AddProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />
      </ApolloProvider> */}
      <ApolloProvider client={client}>
        <Router>
          <Header />
          {/* <div className='container'> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          {/* </div> */}
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
