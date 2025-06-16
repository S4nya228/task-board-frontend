import { z } from 'zod'

export const registerSchema = z
	.object({
		name: z.string().min(2, "Ім'я повинно містити принаймні 2 символи"),
		email: z.string().email('Введіть дійсний email'),
		password: z.string().min(6, 'Пароль повинен містити принаймні 6 символів'),
		password_confirmation: z.string(),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'Паролі не співпадають',
		path: ['password_confirmation'],
	})

export const loginSchema = z.object({
	email: z.string().email('Введіть дійсний email'),
	password: z.string().min(1, 'Введіть пароль'),
})

export const taskSchema = z.object({
	title: z.string().min(1, "Назва обов'язкова"),
	description: z.string().min(1, "Опис обов'язковий"),
	status: z.enum(['todo', 'in_progress', 'completed']),
})

export type RegisterFormData = z.infer<typeof registerSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type TaskFormData = z.infer<typeof taskSchema>
