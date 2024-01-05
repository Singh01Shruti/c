import './App.css'
import Card from './Components/Card'

function App() {
  const users = 
    {
      username : 'Shruti Singh',
      description : 'Software Engineer',
      Interests : 'Nothing'

    };
  

  return (
    <>
    <Card user = {users}></Card>
    </>
  )
}

export default App
