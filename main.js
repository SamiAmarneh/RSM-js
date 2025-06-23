const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme) {
          currentTheme = savedTheme;
        }
        const savedFilter = localStorage.getItem(STORAGE_KEYS.FILTER);
        if (savedFilter) {
          currentFilter = savedFilter;
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
      }
    }
    function showStorageIndicator() {
        const indicator = document.getElementById('storageIndicator');
        indicator.textContent = getText('saved');
        indicator.classList.add('show');
        setTimeout(() => {
            indicator.classList.remove('show');
            }, 2000);
          }
          document.addEventListener('DOMContentLoaded', () => {
            loadFromStorage();
            initializeApp();
            }
          );
          function initializeApp() {
            renderTasks();
            updateActiveTab();
            updateLanguage();
            updateTheme();
            document.getElementById('taskInput').addEventListener('keypress', (e) => {
              if (e.key === 'Enter') addTask();
              });
              document.getElementById('renameInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') confirmRename();
                });
                window.onclick = function(event) {
                    const popup = document.getElementById('popup');
                    const renamePopup = document.getElementById('renamePopup');
                    if (event.target === popup) closePopup();
                    if (event.target === renamePopup) closeRenamePopup();
                    }
                  }
                  function toggleTheme() {
                    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                    updateTheme();
                    saveToStorage();
                  }