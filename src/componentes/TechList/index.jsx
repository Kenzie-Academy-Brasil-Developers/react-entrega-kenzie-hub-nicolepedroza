import { useContext } from "react"
import { VscAdd } from "react-icons/vsc"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard"
import { CreateTechModal } from "../CreateTechModal"
import { UserContext } from "../../providers/UserContext"
import styles from "./style.module.scss"
import { EditTechModal } from "../EditTechModal"
export const TechList = () => {
    const {isOpen, setIsOpen, editingTech, setEditingTech } = useContext(TechContext)
    const { technologies } = useContext(UserContext)

    const handleCreate = () => {
        setEditingTech(null)
        setIsOpen(true)
    }

    return(
    <div className={styles.list}>
        <div className={styles.divHeader}>
            <h1>Tecnologias</h1>
            <button onClick={handleCreate} > <VscAdd color="white"/> </button>

        </div>
        <ul className={styles.listUl}>
            {
                technologies.map((tech) => (
                    <TechCard key={tech.id} tech={tech} />
                ))
            }
        </ul>
        {isOpen ? (
        <div>
          {editingTech ? <EditTechModal /> : <CreateTechModal />}

        </div>
      ) : null }
    </div>

    )
}