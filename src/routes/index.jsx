import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from '../pages/Dashboard'
import { ErrorPage } from "../pages/ErrorPage"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route element={<PrivateRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}
