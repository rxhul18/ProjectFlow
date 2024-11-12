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
import Footer from './components/Footer';


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
  uri:"https://projectflow-t7s2.onrender.com/graphql",
  // uri:"http://localhost:3050/graphql",
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
    <div className='relative h-[100vh]'>
      <ApolloProvider client={client}>
        <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
