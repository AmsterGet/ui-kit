import { useRef, useState, ReactNode, FC, ReactElement, KeyboardEventHandler } from 'react';
import classNames from 'classnames/bind';
import { useFloating, offset, flip } from '@floating-ui/react-dom';
import { useSelect } from 'downshift';
import { Scrollbars } from 'rc-scrollbars';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { BaseIconButton, DropdownIcon } from '@components/icons';
import { DropdownOption } from './dropdownOption';
import { DropdownVariant, RenderDropdownOption, DropdownOptionType, DropdownValue } from './types';
import { OPEN_DROPDOWN_KEY_CODES, CLOSE_DROPDOWN_KEY_CODES, EventName } from './constants';
import { calculateDefaultIndex, calculateNextIndex, calculatePrevIndex } from './utils';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);

interface DropdownProps {
  // TODO: make value and options optional
  options: DropdownOptionType[];
  value: DropdownValue;
  disabled?: boolean;
  error?: string;
  mobileDisabled?: boolean;
  title?: string;
  touched?: boolean;
  icon?: ReactNode;
  variant?: DropdownVariant;
  placeholder?: string;
  transparentBackground?: boolean;
  className?: string;
  toggleButtonClassName?: string;
  onChange: (value: DropdownValue) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  renderOption?: RenderDropdownOption;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=3424-12207&mode=design&t=dDq6moPaTzQLviS1-0
// TODO: implement multiple select
export const Dropdown: FC<DropdownProps> = ({
  value = '',
  options = [],
  disabled = false,
  error,
  onChange,
  onFocus,
  onBlur,
  mobileDisabled,
  title,
  touched = false,
  icon,
  variant,
  placeholder = '',
  renderOption,
  transparentBackground = false,
  className,
  toggleButtonClassName,
}): ReactElement => {
  const [opened, setOpened] = useState(false);
  const containerRef = useRef(null);
  const [eventName, setEventName] = useState<string | null>(null);

  const { refs, floatingStyles } = useFloating({
    middleware: [
      offset(5),
      flip({
        fallbackPlacements: ['bottom', 'top'],
      }),
    ],
  });

  const handleClickOutside = () => {
    if (opened) {
      setOpened(false);
      onBlur?.();
    }
  };
  useOnClickOutside(containerRef, handleClickOutside);

  const handleChange = (option: DropdownOptionType) => {
    if (option.disabled) {
      return;
    }
    onChange(option.value);
    setOpened((prevState) => !prevState);
  };

  const getSelectedOption = (): DropdownOptionType =>
    options.find(({ value: optionValue }) => optionValue === value) as DropdownOptionType;

  const defaultHighlightedIndex = calculateDefaultIndex(options, value);

  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    setHighlightedIndex,
    highlightedIndex,
    selectedItem,
  } = useSelect<DropdownOptionType>({
    items: options,
    itemToString: (item): string => (item?.label ? String(item.label) : placeholder) || '',
    selectedItem: getSelectedOption(),
    isOpen: opened,
    circularNavigation: true,
    defaultHighlightedIndex,
    onHighlightedIndexChange: (changes) => {
      switch (changes.type) {
        case useSelect.stateChangeTypes.MenuKeyDownArrowUp:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculatePrevIndex(options, changes.highlightedIndex));
          return changes;

        case useSelect.stateChangeTypes.MenuKeyDownArrowDown:
          setEventName(EventName.ON_KEY_DOWN);
          setHighlightedIndex(calculateNextIndex(options, changes.highlightedIndex));
          return changes;

        default:
          return changes;
      }
    },
  });

  const onDropdownClick = () => {
    if (!disabled) {
      setOpened((prevState) => !prevState);
      if (opened) {
        onBlur?.();
      } else {
        onFocus?.();
      }
      setEventName(EventName.ON_CLICK);
    }
  };

  const getDisplayedValue = () => {
    if (!value && value !== false) return placeholder;
    let displayedValue = value;
    options.forEach((option) => {
      if (option.value === value) {
        displayedValue = option.label;
      }
    });
    return displayedValue;
  };

  const handleToggleButtonKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    const { keyCode } = event;
    if (OPEN_DROPDOWN_KEY_CODES.includes(keyCode) && !opened) {
      event.preventDefault();
      setHighlightedIndex(defaultHighlightedIndex);
      setOpened(true);
      onFocus?.();
      setEventName(EventName.ON_KEY_DOWN);
    }
  };

  const handleKeyDownMenu: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      const option = options[highlightedIndex];
      handleChange(option);
      setOpened(false);
      onBlur?.();
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES.includes(keyCode)) {
      event.stopPropagation();
      setOpened(false);
      onBlur?.();
    }
  };

  const renderOptions = () =>
    options.map((option, index) => (
      <DropdownOption
        key={option.value}
        {...getItemProps({
          item: option,
          index,
        })}
        selected={option.value === (selectedItem?.value ?? selectedItem)}
        option={option}
        highlightHovered={highlightedIndex === index && eventName !== EventName.ON_CLICK}
        render={renderOption}
        onChange={option.disabled ? null : () => handleChange(option)}
        onMouseEnter={() => setHighlightedIndex(index)}
      />
    ));

  return (
    <div ref={containerRef} className={cx('container', className)} title={title}>
      <button
        disabled={disabled}
        {...getToggleButtonProps({
          className: cx('dropdown', variant, toggleButtonClassName, {
            'transparent-background': transparentBackground,
            opened,
            disabled,
            error,
            touched,
            'mobile-disabled': mobileDisabled,
          }),
          onClick: onDropdownClick,
          onKeyDown: handleToggleButtonKeyDown,
          ref: refs.setReference,
        })}
      >
        {icon && <span className={cx('icon')}>{icon}</span>}
        <span className={cx('value', { placeholder: !value })}>{getDisplayedValue()}</span>
        <BaseIconButton className={cx('arrow')} tabIndex={-1}>
          <DropdownIcon />
        </BaseIconButton>
      </button>
      {opened && (
        <div
          style={floatingStyles}
          className={cx('select-list', { opened })}
          {...getMenuProps({
            onKeyDown: handleKeyDownMenu,
            ref: refs.setFloating,
          })}
        >
          <Scrollbars autoHeight autoHeightMax={216} hideTracksWhenNotNeeded>
            {renderOptions()}
          </Scrollbars>
        </div>
      )}
    </div>
  );
};
