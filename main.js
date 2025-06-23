const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme) {
          currentTheme = savedTheme;
        }