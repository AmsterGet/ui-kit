import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import DefaultExport, { Button as NamedExport } from './index';
import { Button } from './button';

describe('Button Component', () => {
  describe('Exports', () => {
    it('exports Button component as named export', () => {
      expect(NamedExport).toBeDefined();
      expect(NamedExport).toBeTruthy();
      expect(typeof NamedExport).toBe('object');
    });

    it('exports default Button component', () => {
      expect(DefaultExport).toBeDefined();
      expect(DefaultExport).toBeTruthy();
      expect(typeof DefaultExport).toBe('object');
    });

    it('exports ButtonProps type correctly', () => {
      const props = {
        variant: 'primary',
        type: 'button',
        children: 'Test',
      };
      expect(props).toBeDefined();
    });

    it('named export renders correctly', () => {
      render(<NamedExport>Named Export Button</NamedExport>);
      const button = screen.getByRole('button', { name: 'Named Export Button' });
      expect(button).toBeInTheDocument();
    });

    it('default export renders correctly', () => {
      render(<DefaultExport>Default Export Button</DefaultExport>);
      const button = screen.getByRole('button', { name: 'Default Export Button' });
      expect(button).toBeInTheDocument();
    });

    it('ensures default and named exports reference same component', () => {
      expect(DefaultExport).toBe(NamedExport);
    });

    it('renders same component regardless of import method', () => {
      render(
        <div>
          <DefaultExport data-testid="default-button">Default Export</DefaultExport>
          <NamedExport data-testid="named-button">Named Export</NamedExport>
        </div>,
      );

      const defaultButton = screen.getByTestId('default-button');
      const namedButton = screen.getByTestId('named-button');

      expect(defaultButton.className).toContain('button');
      expect(defaultButton.className).toContain('primary');
      expect(namedButton.className).toContain('button');
      expect(namedButton.className).toContain('primary');
    });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
      expect(button).not.toBeDisabled();
    });

    it('renders with title attribute', () => {
      render(<Button title="Button Title">Titled Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('title', 'Button Title');
    });
  });

  describe('Variants', () => {
    it('renders with primary variant by default', () => {
      render(<Button>Primary Button</Button>);
      const button = screen.getByRole('button');

      expect(button.className).toContain('button');
      expect(button.className).toContain('primary');
    });

    it('applies different variants correctly', () => {
      const { rerender } = render(<Button variant="ghost">Ghost Button</Button>);
      let button = screen.getByRole('button');
      expect(button.className).toContain('ghost');

      rerender(<Button variant="danger">Danger Button</Button>);
      button = screen.getByRole('button');
      expect(button.className).toContain('danger');

      rerender(<Button variant="text">Text Button</Button>);
      button = screen.getByRole('button');
      expect(button.className).toContain('text');
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
      expect(button.className).toContain('disabled');
    });
  });

  describe('Interactions', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Clickable</Button>);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click when disabled', async () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      );

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Styling', () => {
    it('applies different width adjustments', () => {
      const { rerender } = render(<Button adjustWidthOn="wide-content">Wide Button</Button>);
      let button = screen.getByRole('button');
      expect(button.className).toContain('width-wide-content');

      rerender(<Button adjustWidthOn="parent">Parent Width</Button>);
      button = screen.getByRole('button');
      expect(button.className).toContain('width-parent');
    });

    it('accepts and applies custom className', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      const button = screen.getByRole('button');

      expect(button.className).toContain('custom-class');
      expect(button.className).toContain('button');
    });
  });

  describe('Icon Handling', () => {
    it('renders icon with correct positioning', () => {
      const iconElement = <span data-testid="test-icon">icon</span>;

      const { rerender } = render(
        <Button icon={iconElement} iconPlace="start">
          Icon Button
        </Button>,
      );

      let icon = screen.getByTestId('test-icon');
      let iconWrapper = icon.parentElement;
      expect(iconWrapper?.className).toContain('icon-start');

      rerender(
        <Button icon={iconElement} iconPlace="end">
          Icon Button
        </Button>,
      );

      icon = screen.getByTestId('test-icon');
      iconWrapper = icon.parentElement;
      expect(iconWrapper?.className).toContain('icon-end');
    });

    it('renders icon with text variant correctly', () => {
      const iconElement = <span data-testid="test-icon">icon</span>;
      render(
        <Button variant="text" icon={iconElement}>
          Text with Icon
        </Button>,
      );

      const button = screen.getByRole('button');
      const icon = screen.getByTestId('test-icon');

      expect(button.className).toContain('text');
      expect(icon).toBeInTheDocument();
    });
  });
});
