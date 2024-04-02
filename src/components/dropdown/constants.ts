import { KeyCodes } from '@common/constants/keyCodes';

export const OPEN_DROPDOWN_KEY_CODES = [
  KeyCodes.ENTER_KEY_CODE,
  KeyCodes.SPACE_KEY_CODE,
  KeyCodes.ARROW_DOWN_KEY_CODE,
];

export const CLOSE_DROPDOWN_KEY_CODES = [KeyCodes.ESCAPE_KEY_CODE, KeyCodes.TAB_KEY_CODE];

export enum EventName {
  ON_KEY_DOWN = 'onKeyDown',
  ON_CLICK = 'onClick',
}
