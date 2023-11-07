import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes"
import "react-toastify/dist/ReactToastify.css"
import "./styles/index.scss"
import { useContext } from "react"
import { UserContext } from "./providers/UserContext"
import { Loading } from "./componentes/Loading"

function App() {
  const {loading} = useContext(UserContext)

  return (
    <>
      {loading ? <Loading/> : <RoutesMain/>}
      <ToastContainer position="top-right" autoClose={2*1000}/>
    </>
  )
}

export default App
