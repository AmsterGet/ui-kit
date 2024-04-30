import { FC } from 'react';
import { RadioProps } from './index';
import { RadioOption } from './radio';
interface RadioGroupProps extends Omit<RadioProps, 'option'> {
    options: RadioOption[];
}
export declare const RadioGroup: FC<RadioGroupProps>;
export {};
