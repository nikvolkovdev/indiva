import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../types/theme';
import { classNames } from '../classNames/classNames';

export interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme?: string;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    if (typeof window !== 'undefined') {
        const classes = document.body.classList;
        document.body.className = classNames(theme as string);
    }

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        if (setTheme) {
            setTheme(newTheme);
        }
        if (typeof window !== 'undefined') {
            document.body.className = classNames(theme as string);
        }

        localStorage.setItem('theme', newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
