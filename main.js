updateTaskCounter(filteredTasks.length);
if (filteredTasks.length === 0) {
  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state';
  emptyState.textContent = currentFilter === 'all' ? 
  getText('emptyAll') :
  currentFilter === 'done' ? 
  getText('emptyDone') :
  getText('emptyTodo');
  list.appendChild(emptyState);
  return;
}
filteredTasks.forEach((task, index) => {
  const originalIndex = tasks.indexOf(task);
  const li = document.createElement('li');
  li.className = `task-item ${task.done ? 'done' : ''}`;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.onchange = () => toggleTask(originalIndex);
  const text = document.createElement('span');
  text.textContent = task.text;
  const actions = document.createElement('div');
  actions.className = 'task-actions';
  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.title = currentLanguage === 'ar' ? 'تعديل المهمة' : 'Edit task';
  editBtn.onclick = () => renameTask(originalIndex);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = currentLanguage === 'ar' ? 'حذف المهمة' : 'Delete task';
  deleteBtn.onclick = () => confirmPopup(() => deleteTask(originalIndex), getText('deleteTask'));
   actions.appendChild(editBtn);
   actions.appendChild(deleteBtn);
      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(actions);
      list.appendChild(li);
      });
    } 