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