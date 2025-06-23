
const STORAGE_KEYS = {
    TASKS: 'todoApp_tasks',
    LANGUAGE: 'todoApp_language',
    THEME: 'todoApp_theme',
    FILTER: 'todoApp_filter'
    };

let currentLanguage = 'en';
    let currentTheme = 'light';

const translations = {
      en: {
        title: 'Todo List',
        subtitle: '– TodoInput',
        inputPlaceholder: 'Enter your task...',
        addButton: 'Add new task',
        allTab: 'All',
        doneTab: 'Done',
        todoTab: 'Todo',
        deleteDoneBtn: 'Delete Done Tasks',
        deleteAllBtn: 'Delete All Tasks',
        renameTitle: 'Rename Task',
        renamePlaceholder: 'Enter new task name',
        renameBtn: 'Rename',
        cancelBtn: 'Cancel',
        confirmBtn: 'Yes',
        emptyAll: '📝 No tasks yet. Add your first task above!',
        emptyDone: '✅ No completed tasks yet.',
        emptyTodo: '📋 No pending tasks!',
        taskEmpty: 'Task cannot be empty.',
        taskNumber: 'Task must not start with a number.',
        taskShort: 'Task must be at least 5 characters.',
        taskExists: 'This task already exists.',
        noDoneTasks: 'No completed tasks to delete.',
        noTasks: 'No tasks to delete.',
        deleteTask: 'Are you sure to delete this task?',
        deleteAllConfirm: 'Delete all {count} tasks?',
        deleteDoneConfirm: 'Delete all {count} completed tasks?',
        totalTasks: '{total} total tasks ({done} completed)',
        completedTasks: '{count} completed tasks',
        pendingTasks: '{count} pending tasks',
        saved: '✓ Saved'
      },
    }