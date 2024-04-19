# ReportPortal UI kit

This library is designed to reflect [ReportPortal Design System](https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/RP-DS-6) components as React components.

## Installation

Install the package into your project using your favourite package manager:

Using `npm`
```console
npm install @reportportal/ui-kit
```

or using `yarn`
```console
yarn add @reportportal/ui-kit
```

or using `pnpm`
```console
pnpm add @reportportal/ui-kit
```

## Usage

1. Import the library styles at the top-level of your application:

```jsx
import '@reportportal/ui-kit/dist/style.css';
```

2. To use the components in your project, import them from the package:

```jsx
import { Button } from '@reportportal/ui-kit';

const MyComponent = () => (
    <Button>Button</Button>
);
```

**Note:** In the future we plan to calibrate the build process to prebuild styles individually for each component and enable tree-shaking.

### Theming

All components are provided with the `light'` theme by default.
To use the `dark` theme, you need to wrap your application with the `ThemeProvider` component and pass the `dark` theme as a prop:

```jsx
import { ThemeProvider, Button } from '@reportportal/ui-kit';

const MyComponent = () => (
    <ThemeProvider theme="dark">
        <Button>Dark theme button</Button>
    </ThemeProvider>
);
```

`ThemeProvider` can be nested to provide different themes for different parts of the application if needed.

```jsx
import { ThemeProvider, Button } from '@reportportal/ui-kit';

const MyComponent = () => (
    <ThemeProvider theme="light">
        <Button>Light theme button</Button>
        <ThemeProvider theme="dark">
            <Button>Dark theme button override</Button>
        </ThemeProvider>
    </ThemeProvider>
);
```

### Custom themes

The `ThemeProvider` component provides the ability to pass custom themes to the application.

To use a custom theme, you need to pass an object with the custom theme name as a key and the custom theme class name as a value to the `customThemes` prop of the `ThemeProvider` component:

```jsx
import { ThemeProvider, Button } from '@reportportal/ui-kit';

const MyComponent = () => (
    <ThemeProvider customThemes={{ 'my-theme': 'my-custom-theme' }} theme="my-theme">
        <Button>Custom theme button</Button>
        <ThemeProvider theme="dark">
            <Button>Dark theme button override</Button>
        </ThemeProvider>
    </ThemeProvider>
);
```

Then just override the ui-kit CSS custom properties in your custom theme class:

```scss
.my-custom-theme {
  --rp-ui-base-font-family: OpenSans, Segoe UI, Tahoma, sans-serif;
  --rp-ui-color-primary: green;
  --rp-ui-color-primary-hover: #69e569;
  --rp-ui-color-primary-focused: var(--rp-ui-color-primary-hover);
  --rp-ui-color-primary-pressed: var(--rp-ui-color-primary-hover);
}
```

CSS custom properties and their default values can be found in the [themes](./src/assets/styles/themes).

The number of custom themes is not limited and actual theme can be easily switched by changing the `theme` prop.

## Components

To see a published showcase of the latest components released with its API and use cases, follow the [link]() (to be provided).

### Icons

The library provides a set of SVG icons and the `BaseIconButton` component to apply basic styles for hover, disabled and others to them.

The list of available icons can be found in the [icons](./src/components/icons/svg) folder.

The icons exported as React components:

```jsx
import { PlusIcon } from '@reportportal/ui-kit';

const MyComponent = () => (
    <PlusIcon />
);
```

To use the `BaseIconButton` component, you need to pass the icon component as a child:

```jsx
import { BaseIconButton, PlusIcon } from '@reportportal/ui-kit';

const MyComponent = () => {
    const handleIconClick = () => {
        console.log('Icon clicked');
    };
    
    return (
        <BaseIconButton
            className={cx('my-icon')}
            disabled={false}
            onClick={handleIconClick}
        >
            <PlusIcon />
        </BaseIconButton>
    );
}
```

`BaseIconButton` supports all the props of the `button` HTML element.

## Build process

We use [vite](https://vitejs.dev/) as a build tool.

To build the library run
```console
npm run build
```

## Development

The library is developed using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

The [Storybook](https://storybook.js.org/) used as a main development environment and a showcase for components.

To run it locally use
```console
npm run start
```

To create a ready-to-deploy version of the Storybook run
```console
npm run build:storybook
```

### Code style

We follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and use [ESLint](https://eslint.org/) to enforce it.

### CSS

We use [SCSS](https://sass-lang.com/) as a CSS preprocessor.

#### Theming

The project uses [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to provide colors/fonts/etc. values for different themes via theme-specific CSS classes.
All components get the appropriate theme values at runtime based on the cascading nature of CSS.

This approach was chosen because it is easy to implement and maintain, and CSS Custom Properties are part of [WEB standards](https://www.w3.org/TR/css-variables-1/) and supported by [all major browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#browser_compatibility).

The CSS custom properties that come from DS are prefixed with `rp-ui-base` to avoid conflicts with other CSS properties and can be found in the [base.scss](./src/assets/styles/themes/base.scss).

### External libs

- [classnames](https://www.npmjs.com/package/classnames) - used for conditionally joining class names together.
- [downshift](https://www.npmjs.com/package/downshift) - used to build simple, flexible, WAI-ARIA compliant React autocomplete/dropdown/select/combobox components.
- [framer-motion](https://www.npmjs.com/package/framer-motion) - used for animations.
- [rc-scrollbars](https://www.npmjs.com/package/rc-scrollbars) - used for custom scrollbars.
- [@floating-ui/react-dom](https://www.npmjs.com/package/@floating-ui/react-dom) - used for positioning menus, dropdown elements, autocompletes, etc..

### Testing

To be provided.
