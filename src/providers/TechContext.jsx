import { createContext, useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { api } from "../api/axios"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [editingTech, setEditingTech] = useState(null)
    const { technologies, setTechnologies } = useContext(UserContext)

    
    const submitTech = async (formData) => {

        try {
           const token = localStorage.getItem("@token")
           const {data} = await api.post("/users/techs", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
           })
           setTechnologies([...technologies, data])
           toast.success("Tech adicionada com sucesso", {
            position:"bottom-right"
        })
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado!")
        }
    }

    const deleteTech = async (removingId) => {
        try {
            const token = localStorage.getItem("@token")
            await api.delete(`/users/techs/${removingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            const newTechList = technologies.filter(tech => tech.id !== removingId)
            setTechnologies(newTechList)
            toast.success("Exclusão realizada com sucesso", {
                position:"bottom-right"
            })
        } catch (error) {
            console.log(error)
        }
    }

    const editTech = async (formData) => {
        try {
            const token = localStorage.getItem("@token")
            const {data} = await api.put(`/users/techs/${editingTech.id}`,  formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
               }) 
               const newTechList = technologies.map(tech => {
                if(tech.id === editingTech.id){
                    return data
                } else{
                    return tech
                }
               })
               setTechnologies(newTechList)
               toast.success("Tecnologia atualizada com sucesso")
               
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TechContext.Provider value={{isOpen, setIsOpen, technologies, setTechnologies, editingTech, setEditingTech, submitTech, deleteTech, editTech}}>
            {children}
        </TechContext.Provider>
    )
}