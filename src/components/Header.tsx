import { CheckSquare, LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Header() {
	return (
		<div>
			<header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center gap-2">
							<CheckSquare className="w-8 h-8 text-blue-600" />
							<Link to="/" className="text-xl font-bold text-gray-900">
								Tasks Board
							</Link>
						</div>
						<div className="flex items-center gap-3">
							<Link to="/login">
								<Button variant="outline" size="sm">
									<LogIn className="w-4 h-4 mr-2" />
									Вхід
								</Button>
							</Link>
							<Link to="/register">
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
									<UserPlus className="w-4 h-4 mr-2" />
									Реєстрація
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
