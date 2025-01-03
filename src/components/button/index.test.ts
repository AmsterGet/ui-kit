import { describe, it, expect } from 'vitest';
import { Button, ButtonProps } from './index';

describe('Button exports', () => {
  it('exports Button component', () => {
    expect(Button).toBeDefined();
  });

  it('exports ButtonProps type', () => {
    const props: ButtonProps = {
      variant: 'primary',
      disabled: false,
      children: 'Test',
    };
    expect(props).toBeDefined();
  });
});
