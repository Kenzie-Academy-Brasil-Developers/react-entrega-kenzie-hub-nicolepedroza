import { forwardRef } from "react"
import styles from "./style.module.scss"
export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
    return (
        <div className={styles.inputContainer}>
            <label className="title5">{label}</label>
            <input className="title3" ref={ref} {...rest} />
            <span>{errors && errors.message}</span>
        </div>
    )
})
