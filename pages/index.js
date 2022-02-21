import { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const QUERY = gql`
  query {
    getUsers{
      id
    }
  }
`;

const MUTATION = gql`
  mutation createUser($id: ID){
    createUser(id: $id){
      id
    }
  }
`

const Home = () => {

  const [ newUser, setNewUser ] = useState(null);
  const { data, loading, error } = useQuery(QUERY);
  const [ createUser ] = useMutation(MUTATION, {
    variables: {
      id: newUser
    }
  })

  console.log(loading, error, data)

  return (

    <div className="text-xl">
      <input className="border" value={newUser} onChange={(e)=> setNewUser(e.target.value)} type="text"/>
      <button onClick={() => createUser()}>Create New User</button>
    </div>

  )
}

export default Home
