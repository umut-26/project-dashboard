export interface Task {
    task: string;
    project: string;
    dueDate: string;
    status: 'Completed' | 'In Progress' | 'Pending';
  }
  
  export const tasksData: Task[] = [
    { task: 'Task 1', project: 'Project 1', dueDate: '10 Nisan 2025', status: 'Completed' },
    { task: 'Task 2', project: 'Project 2', dueDate: '10 Nisan 2025', status: 'In Progress' },
    { task: 'Task 3', project: 'Project 3', dueDate: '10 Nisan 2025', status: 'Pending' },
    { task: 'Task 4', project: 'Project 4', dueDate: '10 Nisan 2025', status: 'Completed' },
    { task: 'Task 5', project: 'Project 5', dueDate: '10 Nisan 2025', status: 'In Progress' },
    { task: 'Task 6', project: 'Project 6', dueDate: '10 Nisan 2025', status: 'Pending' },
    { task: 'Task 7', project: 'Project 7', dueDate: '10 Nisan 2025', status: 'Completed' },
    { task: 'Task 8', project: 'Project 8', dueDate: '10 Nisan 2025', status: 'In Progress' },
    { task: 'Task 9', project: 'Project 9', dueDate: '10 Nisan 2025', status: 'Pending' },
    { task: 'Task 10', project: 'Project 10', dueDate: '10 Nisan 2025', status: 'Completed' },
    { task: 'Task 11', project: 'Project 11', dueDate: '10 Nisan 2025', status: 'In Progress' },
    { task: 'Task 12', project: 'Project 12', dueDate: '10 Nisan 2025', status: 'Pending' },
    { task: 'Task 13', project: 'Project 13', dueDate: '10 Nisan 2025', status: 'Completed' },
    { task: 'Task 14', project: 'Project 14', dueDate: '10 Nisan 2025', status: 'In Progress' },
    { task: 'Task 15', project: 'Project 15', dueDate: '10 Nisan 2025', status: 'Pending' }
  ];
  