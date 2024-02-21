import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Error404 from "./pages/ErrorPage/Error404"

function App() {

  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      <Route path="*" element={<Error404 />} />
     </Routes>
    </>
  )
}

export default App
