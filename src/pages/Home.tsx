import { Link } from 'react-router-dom'
import { CheckSquare, Users, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Home = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			<section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<div className="mb-8">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
							Керуйте своїми
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								{' '}
								завданнями{' '}
							</span>
							легко
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
							Організуйте свою роботу, відстежуйте прогрес та досягайте цілей з
							нашою інтуїтивною дошкою завдань
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<Link to="/dashboard">
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
							>
								Спробувати зараз
								<ArrowRight className="ml-2 w-5 h-5" />
							</Button>
						</Link>
						<Link to="/register">
							<Button
								variant="outline"
								size="lg"
								className="px-8 py-3 text-lg border-gray-300 hover:border-gray-400"
							>
								Створити аккаунт
							</Button>
						</Link>
					</div>
					<div className="relative">
						<div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								<div className="text-center">
									<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<CheckSquare className="w-8 h-8 text-blue-600" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Створюйте завдання
									</h3>
									<p className="text-gray-600">
										Легко додавайте нові завдання з описом та статусом
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Users className="w-8 h-8 text-green-600" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Відстежуйте прогрес
									</h3>
									<p className="text-gray-600">
										Змінюйте статуси завдань та слідкуйте за прогресом
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<Star className="w-8 h-8 text-purple-600" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Досягайте цілей
									</h3>
									<p className="text-gray-600">
										Організовуйте роботу та досягайте поставлених цілей
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Чому обирають Tasks Board?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Ми створили найпростіший та найефективніший спосіб управління
							завданнями
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<CheckSquare className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Просто використовувати
							</h3>
							<p className="text-gray-600">
								Інтуїтивний інтерфейс, який зрозумілий з першого погляду
							</p>
						</div>

						<div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
								<Users className="w-6 h-6 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Командна робота
							</h3>
							<p className="text-gray-600">
								Працюйте разом з командою над спільними проектами
							</p>
						</div>

						<div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
								<Star className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Мобільний дизайн
							</h3>
							<p className="text-gray-600">
								Працює на всіх пристроях - від телефона до десктопа
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
