import React from 'react';
import { format } from 'date-fns';
import { Pencil, Trash2, CheckCircle } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onStatusToggle: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDeleteClick: (taskId: string) => void;
  showDeleteConfirm: boolean;
  onDeleteConfirm: (taskId: string) => void;
  onDeleteCancel: () => void;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusToggle,
  onEdit,
  onDeleteClick,
  showDeleteConfirm,
  onDeleteConfirm,
  onDeleteCancel,
}) => {
  return (
    <div className={`p-4 rounded-lg shadow ${
      task.status === 'completed' ? 'bg-gray-50' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${
            task.status === 'completed' ? 'line-through text-gray-500' : ''
          }`}>
            {task.title}
          </h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            <span className={`text-sm ${
              task.status === 'completed' ? 'text-green-600' : 'text-gray-500'
            }`}>
              Status: {task.status}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onStatusToggle(task)}
            className="p-1 hover:bg-gray-100 rounded flex items-center space-x-1"
            title={task.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
          >
            <CheckCircle
              className={task.status === 'completed' ? 'text-green-500' : 'text-gray-400'}
            />
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Pencil className="text-blue-500" />
          </button>
          <button
            onClick={() => onDeleteClick(task.id)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Trash2 className="text-red-500" />
          </button>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Are you sure?</span>
          <button
            onClick={() => onDeleteConfirm(task.id)}
            className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={onDeleteCancel}
            className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};