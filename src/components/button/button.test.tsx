import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './button';

describe('Button Component', () => {
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

  describe('Button Types', () => {
    it('renders different button types', () => {
      const { rerender } = render(<Button type="submit">Submit</Button>);
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');

      rerender(<Button type="reset">Reset</Button>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
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
