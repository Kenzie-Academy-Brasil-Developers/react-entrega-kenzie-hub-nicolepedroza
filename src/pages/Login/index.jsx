import { useForm } from "react-hook-form"
import {Input} from "../../componentes/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormschema"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../api/axios"
import { toast } from "react-toastify"
import styles from "./style.module.scss"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import { useState } from "react"
export const Login = ({setUser}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginFormSchema),
    })
    
    const [isHidden, setIsHidden] = useState(true)
    const navigate = useNavigate()

    const submit = async (payload) => {
        try {
           const {data} = await api.post("/sessions", payload) 
           localStorage.setItem("@token", data.token)
           navigate("/dashboard")
           setUser(data.user)
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado!")
        }
    }
    return(
        <>
        <div className={styles.container}>
        <header>
            <h1>Kenzie Hub</h1>
        </header>
        <div className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h3 className="title7">Login</h3>
                <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                errors={errors.email}
                style={{color: "#F8F9FA"}}
                />

                <Input
                label="Senha"
                type={isHidden ? "password" : "text"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
                errors={errors.password}
                style={{position: "relative",
            color:"#F8F9FA"}}
                />
                <button onClick={() => setIsHidden(!isHidden)}
                style={{
                    position:"absolute",
                    right:"10px",
                    top:"50%",
                    transform:"translateY(-50)",
                }}>
                    {isHidden ? <MdVisibilityOff/> : <MdVisibility/>}
                </button>

                <button className="button1">Entrar</button>
                <div className={styles.divFooter}>
                <p className="title4">Ainda não possui uma conta?</p>
                <Link className="button2" to="/register">
                    Cadastre-se
                </Link>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}