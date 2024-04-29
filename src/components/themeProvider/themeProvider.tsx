import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import '@assets/styles/themes/index.scss';
import styles from './themeProvider.module.scss';

const cx = classNames.bind(styles);

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

const builtinThemes: ITheme = {
  light: 'rp-ui-kit-theme-light',
  dark: 'rp-ui-kit-theme-dark',
};

export function ThemeProvider({
  children,
  theme = 'light',
  customThemes = {},
  className,
}: IThemeProviderProps) {
  const themes = {
    ...builtinThemes,
    ...customThemes,
  };

  const currentThemeClassName = themes[theme] || builtinThemes.light;

  return <div className={cx('theme-provider', className, currentThemeClassName)}>{children}</div>;
}
