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
function updateTaskCounter(count) {
  const counter = document.getElementById('taskCounter');
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(t => t.done).length;   
  if (currentFilter === 'all') {
    counter.textContent = getText('totalTasks', { total: totalTasks, done: doneTasks });
    } else if (currentFilter === 'done') {
    counter.textContent = getText('completedTasks', { count });
    } else {
    counter.textContent = getText('pendingTasks', { count });
    }
    }
function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!validateInput(text)) return;
    tasks.push({ text, done: false });
    input.value = '';
    saveToStorage();
    renderTasks();
    input.style.background = currentTheme === 'dark' ? '#2d5a2d' : '#d4edda';
    setTimeout(() => {
    input.style.background = '';
    }, 500);
    }
    function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveToStorage();
  renderTasks();
}
function deleteTask(index) {
  tasks.splice(index, 1);
  saveToStorage();
  renderTasks();
}
    function renameTask(index) {
      renameIndex = index;
      document.getElementById('renameInput').value = tasks[index].text;
      document.getElementById('renamePopup').style.display = 'flex';
      setTimeout(() => {
        document.getElementById('renameInput').focus();
        document.getElementById('renameInput').select();
      }, 100);
    }

    function confirmRename() {
      const newName = document.getElementById('renameInput').value.trim();
      if (!validateInput(newName)) return;

      tasks[renameIndex].text = newName;
      saveToStorage();
      renderTasks();
      closeRenamePopup();
    }
    function closeRenamePopup() {
      renameIndex = null;
      document.getElementById('renamePopup').style.display = 'none';
    }

    function deleteDoneTasks() {
      const doneCount = tasks.filter(task => task.done).length;
      if (doneCount === 0) {
        alert(getText('noDoneTasks'));
        return;
      }
      confirmPopup(() => {
        tasks = tasks.filter(task => !task.done);
        saveToStorage();
        renderTasks();
      }, getText('deleteDoneConfirm', { count: doneCount }));
    }

    function deleteAllTasks() {
      if (tasks.length === 0) {
        alert(getText('noTasks'));
        return;
      }
      confirmPopup(() => {
        tasks = [];
        saveToStorage();
        renderTasks();
      }, getText('deleteAllConfirm', { count: tasks.length }));
    }
function filterTasks(filter) {
      currentFilter = filter;
      saveToStorage();
      renderTasks();
      updateActiveTab();
    }
    function updateActiveTab() {
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      document.getElementById(`${currentFilter}Tab`).classList.add('active');
    }
