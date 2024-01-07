import { useState, useEffect } from "react";
import { CreateUser } from './Components/CreateUser'
import { Users} from './Components/Users';
function App() {
  const[users, setUsers] = useState([]);
  useEffect (() => {
    fetch("http://localhost:3000/user/allusers/")
    .then(async(res) => {
    const users = await res.json();
    setUsers(users);});
    },[]);

  return (
    <>
      <CreateUser></CreateUser>
      <Users users = {users}></Users>
    </>
  )
}

export default App
