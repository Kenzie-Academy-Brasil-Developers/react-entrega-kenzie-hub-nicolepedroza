import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "../../componentes/TechList"
export const Dashboard = () => {

    const { user, userLogout } = useContext(UserContext)
    return (
        <div className={styles.containerDashboard}>
            <header className={styles.header}>
                <h1 className={styles.h1}>Kenzie Hub</h1>
                <Link onClick={() => userLogout()} className="button3" to="/">
                    Sair
                </Link>
            </header>
            <div className={styles.divContent}>
                <h1 className="title1">Ola, {user ? user.name : ''}</h1>
                <p className="title5">{user.course_module}</p>
            </div>
            <TechList/>
        </div>
    )
}