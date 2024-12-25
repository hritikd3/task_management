# Task Management Application 🎖️

## Overview
This Task Management Application is developed using React, TypeScript, Tailwind CSS, and Lucide React. The app provides a comprehensive platform to manage tasks with features like task creation, editing, deletion, priority management, and user authentication.

---

## Features

### 1. Task Creation
- Users can create new tasks via a form.
- Each task includes:
  - Title
  - Description
  - Due Date
- Tasks are automatically added to their respective priority lists.

### 2. Task List
- Displays all tasks with pagination and Ajax for smooth data handling.
- Each task displays the following details:
  - Title
  - Due Date
  - Status (e.g., "Pending," "Completed").

### 3. Task Details
- Dedicated page to view a specific task's details:
  - Title
  - Description
  - Due Date

### 4. Task Editing
- Allows users to update task details:
  - Title
  - Description
  - Due Date

### 5. Task Deletion
- Users can delete tasks with a confirmation dialog to prevent accidental deletions.

### 6. Task Status Update
- Users can update the status of tasks:
  - Mark tasks as completed.
  - Change task status as needed.

### 7. User Authentication
- Basic authentication system implemented to:
  - Restrict access to authorised users only.
  - Enable users to:
    - Create, view, edit, and delete tasks.
    - Add/remove users.
    - Assign tasks to specific users.
- Users can view only their assigned tasks upon login.

### 8. Priority Management
- Tasks can be moved between different priority lists for better organisation.

### 9. Visual Representation
- Each priority list is color-coded for quick identification and easier task management.

---

## Tech Stack
- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task_management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task_management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Usage
- Log in or register an account.
- Create new tasks and assign them to priority lists.
- Edit, delete, or update the status of tasks as needed.
- Use color-coded priority lists for efficient task management.
- View tasks with pagination for a smooth user experience.

---

