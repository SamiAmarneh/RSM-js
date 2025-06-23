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
