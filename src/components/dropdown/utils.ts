import { DropdownValue, DropdownOptionType } from './types';

export const calculateDefaultIndex = (
  options: DropdownOptionType[],
  selectedValue: DropdownValue | DropdownValue[],
): number => {
  const selectedValues = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
  return options.findIndex(({ value }) => selectedValues.includes(value));
};

const calculateCurrentItemIndex = (index: number, itemsCount: number): number =>
  ((index % itemsCount) + itemsCount) % itemsCount;

const findNearestAvailableIndex = (options: DropdownOptionType[], index = 0, step = 1): number => {
  if (!options[index].disabled) {
    return index;
  }
  const itemsCount = options.length;

  return findNearestAvailableIndex(
    options,
    calculateCurrentItemIndex(index + step, itemsCount),
    step,
  );
};

export const calculateNextIndex = (options: DropdownOptionType[], index?: number) =>
  findNearestAvailableIndex(options, index);

export const calculatePrevIndex = (options: DropdownOptionType[], index?: number) =>
  findNearestAvailableIndex(options, index, -1);
