import { useEffect, useState } from 'react'

export const Palette = {
    light: {
        text: '#000',
        background: '#ddd',
        primary: '#fff',
        secondary: '#0075FF',
        inactive: '#c4c4c4',
        placeholder: '#c4c4c4',
        tabbar: '#fff',
    },
    dark: {
        text: '#fff',
        background: '#111',
        primary: '#222',
        secondary: '#fff',
        inactive: '#777',
        placeholder: '#888',
        tabbar: '#333',
    }
}

export const useTheme = () => {

    const [theme, setTheme] = useState('dark')

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return { theme, handleToggleTheme }
}
