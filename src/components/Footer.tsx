import { CheckSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<>
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-4">
							<CheckSquare className="w-6 h-6 text-blue-400" />
							<h3 className="text-xl font-bold">Tasks Board</h3>
						</div>
						<p className="text-gray-400 mb-4">
							Керуйте завданнями ефективно та досягайте більшого
						</p>
						<div className="flex justify-center gap-6">
							<Link
								to="/login"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Вхід
							</Link>
							<Link
								to="/register"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Реєстрація
							</Link>
							<Link
								to="/dashboard"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Dashboard
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
