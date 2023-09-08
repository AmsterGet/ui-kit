import { FC, ReactElement } from 'react';
import { Radio, RadioProps } from './index';
import { RadioOption } from './radio';

interface RadioGroupProps extends Omit<RadioProps, 'option'> {
  options: RadioOption[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ options, value, ...rest }): ReactElement => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {options.map((option) => (
      <Radio option={option} value={value} {...rest} />
    ))}
  </div>
);
