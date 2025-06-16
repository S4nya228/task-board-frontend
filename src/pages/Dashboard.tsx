import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TaskCard from '@/components/TaskCard'
import TaskForm from '@/components/TaskForm'

const Dashboard = () => {
	const [showForm, setShowForm] = useState(false)

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
						<h2 className="text-2xl font-bold text-gray-900">Мої завдання</h2>
						<Button
							onClick={() => setShowForm(true)}
							className="bg-green-600 hover:bg-green-700 text-white"
						>
							<Plus className="w-4 h-4 mr-2" />
							Додати завдання
						</Button>
					</div>

					{showForm && (
						<div className="mb-8">
							<TaskForm onCancel={() => setShowForm(false)} />
						</div>
					)}
				</div>

				{/* Якщо немає задач, показати кнопки */}
				<div className="text-center py-12">
					<div className="text-gray-500 mb-4">У вас поки немає завдань</div>
					<Button
						onClick={() => setShowForm(true)}
						className="bg-green-600 hover:bg-green-700 text-white"
					>
						<Plus className="w-4 h-4 mr-2" />
						Створити перше завдання
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Тут мають бути задачі, якщо є */}
					<TaskCard />
				</div>
			</main>
		</div>
	)
}

export default Dashboard
