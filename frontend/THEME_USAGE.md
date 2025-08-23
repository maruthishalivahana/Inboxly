# Theme Context Usage Guide

## Overview
The Inboxly website now includes a comprehensive theme system that supports both dark and light themes. The theme context is available throughout the entire application and automatically persists user preferences.

## Features
- 🌙 Dark theme (default)
- ☀️ Light theme
- 💾 Automatic preference persistence in localStorage
- 🎨 Smooth transitions between themes
- 🔄 Theme toggle button in navigation
- 📱 Responsive design for both themes

## How to Use

### 1. Import the Theme Context
```jsx
import { useTheme } from '../context/ThemeContext';
```

### 2. Use the Theme Hook
```jsx
const { isDark, toggleTheme } = useTheme();
```

### 3. Apply Dynamic Classes
```jsx
// Text colors
className={`${isDark ? 'text-white' : 'text-slate-900'}`}

// Background colors
className={`${isDark ? 'bg-[#0B0F19]' : 'bg-white'}`}

// Border colors
className={`${isDark ? 'border-slate-800' : 'border-slate-200'}`}

// Hover states
className={`${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}
```

## Theme Colors

### Dark Theme
- Background: `#0B0F19` (very dark blue)
- Text: `slate-300` (light gray)
- Headings: `white`
- Borders: `slate-800`
- Secondary text: `slate-400`

### Light Theme
- Background: `white`
- Text: `slate-700` (dark gray)
- Headings: `slate-900` (very dark gray)
- Borders: `slate-200` (light gray)
- Secondary text: `slate-600`

## Example Component
```jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ExampleComponent = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`${isDark ? 'bg-[#0B0F19] text-slate-300' : 'bg-white text-slate-700'} p-6 rounded-lg border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
        Example Component
      </h2>
      <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        This component automatically adapts to the current theme.
      </p>
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'} transition-colors`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ExampleComponent;
```

## Best Practices

1. **Always use dynamic classes** for colors that should change with the theme
2. **Keep the gradient buttons** (purple gradient) as they work well in both themes
3. **Use semantic color names** like `slate-400` instead of specific hex values
4. **Test both themes** to ensure good contrast and readability
5. **Use smooth transitions** for theme changes (already implemented globally)

## Available Theme Variables
- `isDark`: Boolean indicating if dark theme is active
- `toggleTheme`: Function to switch between themes

## CSS Classes
The theme system automatically adds/removes the `dark` class on the `html` element, which can be used for CSS-only theme switching if needed. 