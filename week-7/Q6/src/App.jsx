import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "./Components/Landing"
import Wish from "./Components/Wish"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
     <BrowserRouter>
     <RecoilRoot>
     <Routes>
     <Route path = "/" element = {<Landing />}></Route>
     <Route path = "/wishes" element = {<Wish />}></Route>
     </Routes>
     </RecoilRoot>
     </BrowserRouter>
    </>
  )
}

export default App
