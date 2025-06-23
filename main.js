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
                  function updateTheme() {
                    document.documentElement.setAttribute('data-theme', currentTheme);
                    document.getElementById('themeBtn').textContent = currentTheme === 'light' ? '🌙' : '☀️';
                  }
                  function toggleLanguage() {
                    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
                    updateLanguage();
                    saveToStorage();
                  }
                  function updateLanguage() {
                    const isArabic = currentLanguage === 'ar';
                    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
                    document.documentElement.setAttribute('lang', currentLanguage);
                    document.getElementById('langBtn').textContent = isArabic ? 'English' : 'العربية';
                    const t = translations[currentLanguage];
    document.getElementById('mainTitle').innerHTML = `${t.title} <span class="sub-title">${t.subtitle}</span>`;
    document.getElementById('taskInput').placeholder = t.inputPlaceholder;
    document.getElementById('addBtn').textContent = t.addButton;
    document.getElementById('allTab').textContent = t.allTab;
    document.getElementById('doneTab').textContent = t.doneTab;
    document.getElementById('todoTab').textContent = t.todoTab;
    document.getElementById('deleteDoneBtn').textContent = t.deleteDoneBtn;
    document.getElementById('deleteAllBtn').textContent = t.deleteAllBtn;
    document.getElementById('renameTitle').textContent = t.renameTitle;
    document.getElementById('renameInput').placeholder =
    t.renamePlaceholder;
    document.getElementById('renameConfirmBtn').textContent = t.renameBtn;
    document.getElementById('renameCancelBtn').textContent = t.cancelBtn;
    document.getElementById('cancelBtn').textContent = t.cancelBtn;
    document.getElementById('confirmBtn').textContent = t.confirmBtn;
    renderTasks();
}
