import React, { useState } from 'react'
import { Edit2, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TaskCard = () => {
	const [isLoading, setIsLoading] = useState(false)

	const getStatusIcon = () => {
		switch (status) {
			case 'completed':
				return <CheckCircle className="w-5 h-5 text-green-500" />
			case 'in_progress':
				return <Clock className="w-5 h-5 text-yellow-500" />
			case 'todo':
				return <AlertCircle className="w-5 h-5 text-red-500" />
			default:
				return null
		}
	}

	const getStatusText = () => {
		switch (status) {
			case 'completed':
				return 'Виконано'
			case 'in_progress':
				return 'В процесі'
			case 'todo':
				return 'До виконання'
			default:
				return ''
		}
	}

	const getStatusColor = () => {
		switch (status) {
			case 'completed':
				return 'bg-green-100 text-green-800 border-green-200'
			case 'in_progress':
				return 'bg-yellow-100 text-yellow-800 border-yellow-200'
			case 'todo':
				return 'bg-red-100 text-red-800 border-red-200'
			default:
				return ''
		}
	}

	return (
		<div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all duration-200">
			<div className="flex items-start justify-between mb-3">
				<h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
					123
				</h3>
				<div className="flex gap-2 ml-2">
					<Button
						variant="ghost"
						size="sm"
						className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
					>
						<Edit2 className="w-4 h-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						className="text-red-600 hover:text-red-700 hover:bg-red-50"
					>
						<Trash2 className="w-4 h-4" />
					</Button>
				</div>
			</div>

			<p className="text-gray-600 mb-4 line-clamp-3">12312312312312</p>

			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div
					className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor()}`}
				></div>

				<select
					disabled={isLoading}
					className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
				>
					<option value="todo">До виконання</option>
					<option value="in_progress">В процесі</option>
					<option value="completed">Виконано</option>
				</select>
			</div>
		</div>
	)
}

export default TaskCard
