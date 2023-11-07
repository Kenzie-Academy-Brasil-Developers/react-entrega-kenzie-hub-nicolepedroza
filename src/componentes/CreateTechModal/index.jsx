import { MdClose } from "react-icons/md"
import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import styles from "./style.module.scss"
export const CreateTechModal = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const { setIsOpen, submitTech } = useContext(TechContext)
    const submit = (formData) => {
        submitTech(formData)
    }

    return(
        <>

        <div className={styles.containerModal} role="dialog" >
            <div className={styles.divModalTop}>
                <div className={styles.divHeader}>
                    <h2 className="title7">Cadastrar Tecnologia</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <MdClose color="white"/>
                    </button>
                </div>

                <div className={styles.divForm}>
                <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui a tecnologia"
                {...register("title")}
                errors={errors.title}
                />
            <p className="title5">Selecionar status</p>
                <select {...register("status")}>
                    <option value="Iniciante">
                        Iniciante</option>
                    <option value="Intermediário">
                        Intermediário</option>
                    <option value="Avançado">
                        Avançado</option>
                </select>
                <button className="button4">Cadastrar Tecnologia</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
} 