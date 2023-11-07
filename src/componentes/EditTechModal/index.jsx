import { useForm } from "react-hook-form"
import styles from "./style.module.scss"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { MdClose } from "react-icons/md"
import { Input } from "../Input"


export const EditTechModal = () => {
    const {setIsOpen, editingTech, editTech } = useContext(TechContext)
    const { register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            title: editingTech.title,
            status:editingTech.status
        }
    })
    const submit = (formData) => {
        editTech(formData)
    }

    return(
        <>

        <div className={styles.containerModal} role="dialog" >
            <div className={styles.divModalTop}>
                <div className={styles.divHeader}>
                    <h2 className="title7">Tecnologia Detalhes</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <MdClose color="white"/>
                    </button>
                </div>

                <div className={styles.divForm}>
                <form className={styles.form} onSubmit={handleSubmit(submit)} >
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
                <button className="button4">Salvar alterações</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}