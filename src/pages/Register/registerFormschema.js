import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, "Campo obrigatório."),
    email: z.string().email("E-mail inválido").min(1, "Campo obrigatório."),
    password: z
    .string()
    .min(8, "São necessários pelo menos oito caracteres.")
    .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
    .regex(/[0-9]+/, "É necessário conter pelo menos um número."),
    confirmPassword: z.string().min(1, "Campo obrigatório."),
    bio: z.string().min(1, "Campo obrigatório."),
    contact: z.string().min(1, "Campo obrigatório."),
    course_module: z.string(),

}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
})