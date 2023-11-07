import { MdDelete, MdEdit } from "react-icons/md"
import styles from "./style.module.scss"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
export const TechCard = ({tech}) => {
    const { deleteTech, setIsOpen,setEditingTech } = useContext(TechContext)
    const handleEditTech = () => {
        setEditingTech(tech)
        setIsOpen(true)
    }
    return(
        <li className={styles.container}>
            <h1 className="title7">{tech.title}</h1>
            <div>
            <span className="title5">{tech.status}</span>
            <button onClick={handleEditTech} title="Editar" aria-label="edit">
                <MdEdit/>
            </button>
            <button onClick={() => deleteTech(tech.id)} title="Deletar" aria-label="delete">
                <MdDelete/>
            </button>
            </div>
        </li>
    )
}