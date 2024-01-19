import { BrowserRouter , Routes, Route} from "react-router-dom"
import Landing from "./Components/Landing/Landing"
import Login from "./Components/Login/Login"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/login" element={<Login />}></Route>
    <Route path = "/" element= {<Landing />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
