import './App.css'
import Client from './components/Client.jsx'
import Header from './components/Header'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri:"http://localhost:3050/graphql",
  cache: new InMemoryCache()

})
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='flex w-full justify-center'>
          <div className='container'>
            <Client />
          </div>
        </div>
        
      </ApolloProvider>
    </>
  )
}

export default App
