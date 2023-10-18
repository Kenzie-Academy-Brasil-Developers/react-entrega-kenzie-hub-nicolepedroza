import { set, useForm } from "react-hook-form"
import { Input } from "../../componentes/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormschema"
import { api } from "../../api/axios"
import { Link ,useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import styles from "./style.module.scss"


export const Register = () => {

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(registerFormSchema),
    })

    const navigate = useNavigate()

    const submit = async (payload) => {

        try {
            await api.post("/users", payload)
            navigate("/")
            toast.success("Conta criada com sucesso!")
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado!")
        }
    }

    return(
        <>
        <div className={styles.containerRegister}>
                <div className={styles.divHeader}>
                    <h1>Kenzie Hub</h1>
                    <Link className="button3" to="/">
                        Voltar
                    </Link>
                </div>

            <div className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h3 className="title1">Crie sua conta</h3>
                <p className="title5">Rapido e gratís, vamos nessa</p>

                <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                errors= {errors.name}
                {...register("name")}
                />

                <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                errors= {errors.email}
                {...register("email")}
                />

                <Input
                label="Senha"
                type="text"
                placeholder="Digite aqui sua senha"
                errors= {errors.password}
                {...register("password")}

                />

                <Input
                label="Confirmar senha"
                type="text"
                placeholder="Digite novamente sua senha"
                errors= {errors.confirmPassword}
                {...register("confirmPassword")}
                />

                <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                errors= {errors.bio}
                {...register("bio")}
                />

                <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                errors= {errors.contact}
                {...register("contact")}
                />
                <div className={styles.divSelect}>
                <p className="title5">Selecionar módulo</p>
                <select {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">
                        Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">
                        Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">
                        Quarto módulo (Backend Avançado)</option>
                </select>
                <button className="button4">Cadastrar</button>
                </div>

            </form>
            </div>
        </div>
        </>
    )
}