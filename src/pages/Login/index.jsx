import { useForm } from "react-hook-form"
import {Input} from "../../componentes/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormschema"
import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
export const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginFormSchema),
    })
    const {submitLogin} = useContext(UserContext)
    
    const [isHidden, setIsHidden] = useState(true)
    return(
        <>
        <div className={styles.container}>
        <header>
            <h1>Kenzie Hub</h1>
        </header>
        <div className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit(submitLogin)}>
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