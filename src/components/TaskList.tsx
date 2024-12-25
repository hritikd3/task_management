import React, { useState } from 'react';
import { Task } from '../types';
import { useTasks } from '../context/TaskContext';
import { TaskForm } from './TaskForm';
import { TaskItem } from './TaskItem';

const ITEMS_PER_PAGE = 5;

export const TaskList: React.FC = () => {
  const { tasks, deleteTask, updateTask } = useTasks();
  const [currentPage, setCurrentPage] = useState(1);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTasks = tasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(tasks.length / ITEMS_PER_PAGE);

  const handleStatusToggle = (task: Task) => {
    updateTask(task.id, {
      status: task.status === 'completed' ? 'pending' : 'completed'
    });
  };

  const handleDelete = (taskId: string) => {
    deleteTask(taskId);
    setShowDeleteConfirm(null);
  };

  return (
    <div className="space-y-4">
      {editingTask && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <TaskForm
              task={editingTask}
              onSubmit={() => setEditingTask(null)}
            />
          </div>
        </div>
      )}

      <div className="space-y-4">
        {paginatedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusToggle={handleStatusToggle}
            onEdit={setEditingTask}
            onDeleteClick={setShowDeleteConfirm}
            showDeleteConfirm={showDeleteConfirm === task.id}
            onDeleteConfirm={handleDelete}
            onDeleteCancel={() => setShowDeleteConfirm(null)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};