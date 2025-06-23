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