import { ReactNode } from 'react';
type ThemeKey = 'light' | 'dark' | string;
interface ITheme {
    [themeKey: ThemeKey]: string;
}
interface IThemeProviderProps {
    children?: ReactNode;
    theme?: ThemeKey;
    customThemes?: ITheme;
    className?: string;
}
export declare function ThemeProvider({ children, theme, customThemes, className, }: IThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
