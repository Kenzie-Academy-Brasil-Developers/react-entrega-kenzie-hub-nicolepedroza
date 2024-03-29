import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/axios"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(false)
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("@token")
        const getUser = async () => {
            try{
                setLoading(true)
                const {data} = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                if(data.techs){
                    setTechnologies(data.techs)
                }
                navigate("/dashboard")
            }catch(error){
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        getUser()
    }, [])

    const navigate = useNavigate()

    const userLogout = () => {
        setUser("")
        navigate("/")
        localStorage.removeItem("@token")
    }

    const submitLogin = async (payload) => {
        try {
           const {data} = await api.post("/sessions", payload) 
           localStorage.setItem("@token", data.token)
           setUser(data.user)
           if(data.user.techs){
               setTechnologies(data.user.techs)
            }
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado!")
        }
    }

    const submitRegister = async (payload) => {

        try {
            await api.post("/users", payload)
            navigate("/")
            toast.success("Conta criada com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado!")
        }
    }
    return <UserContext.Provider value={{loading, user, userLogout, submitLogin, submitRegister, technologies, setTechnologies}}>
            {children}
    </UserContext.Provider>
}