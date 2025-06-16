import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, UserPlus, Mail, Lock, User } from 'lucide-react'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerSchema } from '@/lib/validationSchemas'
import type { RegisterFormData } from '@/lib/validationSchemas'

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	})

	const onSubmit = async (data: RegisterFormData) => {
		setIsLoading(true)
		try {
			await authAPI.register({
				name: data.name,
				email: data.email,
				password: data.password,
				password_confirmation: data.password_confirmation,
			})
			toast.success('Реєстрація успішна! Тепер ви можете увійти.')
			navigate('/login')
		} catch (error: any) {
			console.error('Registration error:', error)
			toast.error(error.response?.data?.message || 'Помилка реєстрації')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="text-center mb-8">
						<div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
							<UserPlus className="w-8 h-8 text-white" />
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Реєстрація</h1>
						<p className="text-gray-600 mt-2">Створіть новий аккаунт</p>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name">Ім'я</Label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input
									id="name"
									type="text"
									placeholder="Ваше ім'я"
									className="pl-10"
									{...register('name')}
								/>
							</div>
							{errors.name && (
								<p className="text-sm text-red-600">{errors.name.message}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input
									id="email"
									type="email"
									placeholder="your@email.com"
									className="pl-10"
									{...register('email')}
								/>
							</div>
							{errors.email && (
								<p className="text-sm text-red-600">{errors.email.message}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">Пароль</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input
									id="password"
									type={showPassword ? 'text' : 'password'}
									placeholder="••••••••"
									className="pl-10 pr-10"
									{...register('password')}
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
							{errors.password && (
								<p className="text-sm text-red-600">
									{errors.password.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="password_confirmation">
								Підтвердження паролю
							</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input
									id="password_confirmation"
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="••••••••"
									className="pl-10 pr-10"
									{...register('password_confirmation')}
								/>
								<button
									type="button"
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
								>
									{showConfirmPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
							{errors.password_confirmation && (
								<p className="text-sm text-red-600">
									{errors.password_confirmation.message}
								</p>
							)}
						</div>

						<Button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
							disabled={isLoading}
						>
							{isLoading ? 'Реєстрація...' : 'Зареєструватися'}
						</Button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Вже маєте аккаунт?{' '}
							<Link
								to="/login"
								className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
							>
								Увійти
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
