'use client';

import { ReactNode, useMemo, useState } from 'react';
import { Theme } from '@/shared/types/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

// import { useJsonSettings } from '@/entities/User';

// const defaultTheme =
//     (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // const { theme: defaultTheme } = useJsonSettings();

    let initialTheme: Theme = Theme.LIGHT;

    if (typeof window !== 'undefined') {
        const defaultTheme = localStorage.getItem('theme');
        if (defaultTheme === Theme.DARK) {
            initialTheme = Theme.DARK;
        }
    }

    const [theme, setTheme] = useState<Theme>(initialTheme);

    // useEffect(() => {
    //     if (defaultTheme) {
    //         setTheme(initialTheme);
    //     }
    // }, [defaultTheme, initialTheme]);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
