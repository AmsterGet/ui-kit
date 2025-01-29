import { Locale } from 'date-fns';
import { registerLocale } from 'react-datepicker';

export const registerDatePickerLocale = (language: string, locale: Locale) => {
  registerLocale(language, locale);
};

export const getYearsFrom = (start: number, amountYearsToGenerate = 20) => {
  const yearsFromCurrent = start + amountYearsToGenerate;
  return new Array(yearsFromCurrent - start).fill(undefined).map((_, i) => start - i);
};
