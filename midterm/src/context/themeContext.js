import { createContext } from 'react';

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
    border: '1px solid black',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    border: '1px solid white',
    color: '#9fd3c7',
  },
  old: {
    foreground: '#ececec',
    background: '#385170',
    border: '1px solid white',
    color: '#ececec',
  },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
});