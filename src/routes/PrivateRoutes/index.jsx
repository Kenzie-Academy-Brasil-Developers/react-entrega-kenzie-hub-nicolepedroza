import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
    const {user} = useContext(UserContext)
    return user ? <Outlet/> : <Navigate to="/"/>
}