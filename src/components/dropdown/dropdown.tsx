import { useRef, useState, ReactNode, FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { usePopper } from 'react-popper';
import { useSelect } from 'downshift';
import { Scrollbars } from 'rc-scrollbars';
import { useOnClickOutside } from '@common/hooks';
import { KeyCodes } from '@common/constants/keyCodes';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow.svg';
import { DropdownOption } from './dropdownOption';
import {
  DropdownOptionValue,
  DropdownVariant,
  RenderDropdownOption,
  DropdownOptionType,
} from './types';
import { CLOSE_DROPDOWN_KEY_CODES_MAP, OPEN_DROPDOWN_KEY_CODES_MAP } from './constants';
import {
  calculateDefaultIndex,
  calculateNextIndex,
  calculatePrevIndex,
  getOptionValue,
} from './utils';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);

interface DropdownProps {
  options: DropdownOptionType[];
  value?: DropdownOptionValue;
  disabled?: boolean;
  error?: string;
  mobileDisabled?: boolean;
  title?: string;
  touched?: boolean;
  icon?: ReactNode;
  variant?: DropdownVariant;
  placeholder?: string;
  defaultWidth?: boolean;
  transparentBackground?: boolean;
  className?: string;
  toggleButtonClassName?: string;
  onChange: (value: DropdownOptionValue) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  renderOption?: RenderDropdownOption;
}

// DS link - https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/%F0%9F%9B%A0-RP-DS-6?type=design&node-id=3424-12207&mode=design&t=dDq6moPaTzQLviS1-0
// TODO: implement multiple select
export const Dropdown: FC<DropdownProps> = ({
  value,
  options,
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
  placeholder,
  defaultWidth = true,
  renderOption,
  transparentBackground = false,
  className,
  toggleButtonClassName,
}): ReactElement => {
  const [isOpened, setOpened] = useState(false);
  const containerRef = useRef(null);

  const [popperReference, setPopperReference] = useState<HTMLDivElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement>(null);
  const {
    styles: popperStyles,
    attributes,
    update: schedulePopperUpdate,
  } = usePopper(popperReference, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        enabled: true,
      },
      {
        name: 'preventOverflow',
        options: {
          escapeWithReference: true, // TODO: check
        },
      },
    ],
  });

  const handleClickOutside = () => {
    if (isOpened) {
      setOpened(false);
      if (onBlur) {
        onBlur();
      }
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
    options.find(
      ({ value: optionValue }) => optionValue === getOptionValue(value),
    ) as DropdownOptionType;

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
    itemToString: (item) => item.label ?? placeholder,
    onChange: handleChange,
    // TODO: recheck necessity
    selectedItem: getSelectedOption(),
    isOpen: isOpened,
    circularNavigation: true,
    defaultHighlightedIndex,
    onHighlightedIndexChange: (changes) => {
      switch (changes.type) {
        case useSelect.stateChangeTypes.MenuKeyDownArrowUp:
          setHighlightedIndex(calculatePrevIndex(changes.highlightedIndex, options));
          return changes;

        case useSelect.stateChangeTypes.MenuKeyDownArrowDown:
          setHighlightedIndex(calculateNextIndex(changes.highlightedIndex, options));
          return changes;

        default:
          return changes;
      }
    },
  });

  const onClickDropdown = () => {
    if (!disabled) {
      if (schedulePopperUpdate) {
        schedulePopperUpdate();
      }
      setOpened((prevState) => !prevState);
      if (isOpened) {
        if (onBlur) {
          onBlur();
        }
      } else {
        if (onFocus) {
          onFocus();
        }
      }
    }
  };

  const getDisplayedValue = () => {
    if (!value && value !== false) return placeholder;
    let displayedValue = (value && value.label) || value;
    options.forEach((option) => {
      if (option.value === value) {
        displayedValue = option.label;
      }
    });
    return displayedValue;
  };

  const handleToggleButtonKeyDown = (event) => {
    const { keyCode } = event;
    if (OPEN_DROPDOWN_KEY_CODES_MAP[keyCode] && !isOpened) {
      event.preventDefault();
      setHighlightedIndex(defaultHighlightedIndex);
      if (schedulePopperUpdate) {
        schedulePopperUpdate();
      }
      setOpened(true);
      if (onFocus) {
        onFocus();
      }
    }
  };

  const handleKeyDownMenu = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCodes.ENTER_KEY_CODE) {
      const option = options[highlightedIndex];
      handleChange(option);
      setOpened(false);
      if (onBlur) {
        onBlur();
      }
      return;
    }

    if (CLOSE_DROPDOWN_KEY_CODES_MAP[keyCode]) {
      event.stopPropagation();
      setOpened(false);
      if (onBlur) {
        onBlur();
      }
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
        selected={option.value === selectedItem.value}
        option={option}
        highlightHovered={highlightedIndex === index}
        render={renderOption}
        onChange={option.disabled ? null : () => handleChange(option)}
        onMouseEnter={() => setHighlightedIndex(index)}
      />
    ));

  return (
    <div
      ref={containerRef}
      className={cx('container', { 'default-width': defaultWidth }, className)}
      title={title}
    >
      <div
        ref={setPopperReference}
        {...getToggleButtonProps({
          tabIndex: disabled ? -1 : 0,
          className: cx('dropdown', variant, toggleButtonClassName, {
            'transparent-background': transparentBackground,
            opened: isOpened,
            disabled,
            error,
            touched,
            'mobile-disabled': mobileDisabled,
          }),
          onClick: onClickDropdown,
          onKeyDown: handleToggleButtonKeyDown,
        })}
      >
        {icon && <span className={cx('icon')}>{icon}</span>}
        <span className={cx('value', { placeholder: !value })}>{getDisplayedValue()}</span>
        <span className={cx('arrow')}>{<ArrowIcon />}</span>
      </div>
      <div
        className={cx('select-list', { opened: isOpened })}
        onKeyDown={handleKeyDownMenu}
        ref={setPopperElement}
        style={popperStyles.popper}
        {...attributes.popper}
        {...getMenuProps()}
      >
        <Scrollbars autoHeight autoHeightMax={216} hideTracksWhenNotNeeded>
          {renderOptions()}
        </Scrollbars>
      </div>
    </div>
  );
};
