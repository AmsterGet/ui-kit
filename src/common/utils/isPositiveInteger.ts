export const isPositiveInteger = (value?: number) => {
  const isNumber = typeof value === 'number';

  return isNumber && Number.isFinite(value) && Number.isInteger(value) && value > 0;
};
