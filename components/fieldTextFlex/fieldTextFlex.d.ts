import { ChangeEventHandler, ComponentPropsWithRef, FC, FocusEventHandler, KeyboardEventHandler } from 'react';
export interface FieldTextFlexProps extends ComponentPropsWithRef<'textarea'> {
    value: string;
    readonly?: boolean;
    error?: string;
    touched?: boolean;
    label?: string;
    helpText?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
}
export declare const FieldTextFlex: FC<FieldTextFlexProps>;
