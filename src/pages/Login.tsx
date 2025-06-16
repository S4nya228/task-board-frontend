import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn, Mail, Lock } from 'lucide-react'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginSchema } from '@/lib/validationSchemas'
import type { LoginFormData } from '@/lib/validationSchemas'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: LoginFormData) => {
		setIsLoading(true)
		try {
			const response = await authAPI.login({
				email: data.email,
				password: data.password,
			})

			toast.success('Успішний вхід!')
			navigate('/dashboard')
		} catch (error: any) {
			console.error('Login error:', error)
			toast.error(error.response?.data?.message || 'Помилка входу')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="text-center mb-8">
						<div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
							<LogIn className="w-8 h-8 text-white" />
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Вхід</h1>
						<p className="text-gray-600 mt-2">Увійдіть до вашого аккаунту</p>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

						<Button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
							disabled={isLoading}
						>
							{isLoading ? 'Вхід...' : 'Увійти'}
						</Button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Ще не маєте аккаунту?{' '}
							<Link
								to="/register"
								className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
							>
								Зареєструватися
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
