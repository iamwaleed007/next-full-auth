import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be 6 characters long.")
})

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be 6 characters long."),
    name: z.string().min(1, "Name is required.").max(20, "Name is too long.")
})