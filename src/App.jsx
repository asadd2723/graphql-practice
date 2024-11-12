import './App.css'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { ApolloProvider} from '@apollo/client';
import UserCard from './Components/UserCard';


function App() {

  const client = new ApolloClient({
    uri: "https://jsonplaceholder.typicode.com/posts",
   cache: new InMemoryCache(),
  });
  
  return (
    <>
      <ApolloProvider client={client}>
        <UserCard />
      </ApolloProvider>
    </>
  )
}

export default App
