import React, { useState } from 'react'
import { Plus, Edit3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const TaskForm = ({ editingTask = null, isLoading = false }) => {
	// Проста валідація

	return (
		<div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
			<div className="flex items-center gap-3 mb-6">
				{editingTask ? (
					<Edit3 className="w-6 h-6 text-blue-600" />
				) : (
					<Plus className="w-6 h-6 text-green-600" />
				)}
				<h2 className="text-xl font-semibold text-gray-900">
					{editingTask ? 'Редагувати завдання' : 'Додати нове завдання'}
				</h2>
			</div>

			<form className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="title">Назва завдання</Label>
					<Input id="title" name="title" placeholder="Введіть назву завдання" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="description">Опис</Label>
					<Textarea
						id="description"
						name="description"
						placeholder="Опишіть деталі завдання"
						rows={4}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="status">Статус</Label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Оберіть статус" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="todo">До виконання</SelectItem>
							<SelectItem value="in_progress">В процесі</SelectItem>
							<SelectItem value="completed">Виконано</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col sm:flex-row gap-3">
					<Button
						type="submit"
						disabled={isLoading}
						className={`flex-1 ${
							editingTask
								? 'bg-blue-600 hover:bg-blue-700'
								: 'bg-green-600 hover:bg-green-700'
						} text-white font-medium transition-all duration-200`}
					>
						{isLoading
							? editingTask
								? 'Оновлення...'
								: 'Додавання...'
							: editingTask
							? 'Оновити завдання'
							: 'Додати завдання'}
					</Button>

					<Button
						type="button"
						variant="outline"
						className="flex-1 sm:flex-none"
					>
						Скасувати
					</Button>
				</div>
			</form>
		</div>
	)
}

export default TaskForm
