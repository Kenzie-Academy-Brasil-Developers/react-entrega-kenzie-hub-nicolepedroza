import LoadingIcon from "../../assets/LoadingSvg.svg"
import styles from "./style.module.scss"
export const Loading = () => {
    return(
        <div className={styles.loadingBox}>
            <img src={LoadingIcon} alt="Loading Icon" />
        </div>
    )
}