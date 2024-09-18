import { ReactNode } from '../../../node_modules/react';
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
export declare function ThemeProvider({ children, theme, customThemes, className, }: IThemeProviderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
