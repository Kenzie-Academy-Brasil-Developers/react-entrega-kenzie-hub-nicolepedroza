import { Link } from "react-router-dom"
import styles from "./style.module.scss"
export const Dashboard = ({user, userLogout}) => {
    console.log(user)
    return(
        <><div className={styles.containerDashboard}>
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
            <div className={styles.divFooter}>
                <h1 className="title1">Que pena! Estamos em desenvolvimento:(</h1>
                <h2 className="title6">Nossa aplicação está em desenvolvimento, em breve teremos novidade</h2>
            </div>
            </div>
        </>
    )
}