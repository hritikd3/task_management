import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import { Auth } from './components/Auth';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

function App() {
  const { user, logout } = useAuth();
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Task Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.username}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <button
            onClick={() => setShowNewTaskForm(true)}
            className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Task
          </button>

          {showNewTaskForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Create New Task</h2>
                <TaskForm onSubmit={() => setShowNewTaskForm(false)} />
              </div>
            </div>
          )}

          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;