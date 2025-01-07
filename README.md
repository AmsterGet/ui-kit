# ReportPortal UI kit

This library is designed to reflect [ReportPortal Design System](https://www.figma.com/file/gjYQPbeyf4YsH3wZiVKoaj/RP-DS-6) components as React components.

**alpha versions available**

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

To see a published showcase of the latest components released with its API and use cases, follow the [link](https://reportportal.io/ui-kit/).

### Icons

The library provides a set of SVG icons and the `BaseIconButton` component to apply basic styles for hover, disabled and other states to them.

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

**Note:** To support styling via `BaseIconButton`, it is recommended to use *path-based*, *single-color* SVG icons.

## Development

The library is developed using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

The [Storybook](https://storybook.js.org/) used as a main development environment and a showcase for components.

To run it locally use
```console
npm run start
```

To create a ready-to-deploy version of the Storybook, run
```console
npm run build:storybook
```

### Build process

We use [vite](https://vitejs.dev/) as a build tool.

To build the library run
```console
npm run build
```

### Storybook showcase deploy

While the library is in alpha, the showcase hosted on [GitHub Pages](https://reportportal.io/ui-kit/) should be updated based on changes from the `develop` branch.

#### Deployment steps

1. Navigate to the "Actions" page within the [repository](https://github.com/reportportal/ui-kit/actions).
2. Choose the "Deploy dev storybook showcase" action from list of available workflows.
3. Click "Run workflow" button on the right and select the `develop` branch.
4. Wait for the deployment process to complete. The progress can be tracked on the "Actions" page.
5. Once the deployment is finished, verify that the changes have been deployed correctly, visiting [GitHub Pages](https://reportportal.io/ui-kit/).

That's it! If you encounter any issues during the deployment process, please consult the documentation or reach out to the project maintainers for assistance.

### Release

While the library is in alpha, the [NPM package](https://www.npmjs.com/package/@reportportal/ui-kit) should be built and published from the `develop` branch with `alpha` tag.

#### Release steps

1. Navigate to the "Actions" page within the [repository](https://github.com/reportportal/ui-kit/actions).
2. Choose the "Publish dev package version" action from list of available workflows.
3. Click "Run workflow" button on the right and select the `develop` branch.
4. Wait for the publishing process to complete. The progress can be tracked on the "Actions" page.
5. Once the publishing is finished, verify that the changes have been published correctly, visiting [NPM registry](https://www.npmjs.com/package/@reportportal/ui-kit?activeTab=versions).

That's it! If you encounter any issues during the release process, please consult the documentation or reach out to the project maintainers for assistance.

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
- [@floating-ui/react-dom](https://www.npmjs.com/package/@floating-ui/react-dom) - used for positioning menus, dropdown elements, autocompletes, etc.

### Testing

#### Testing Tools

The project uses the following testing tools:
- **Vitest**: Fast testing framework, compatible with Vite
- **React Testing Library**: For testing React components with a focus on user interactions
- **@testing-library/user-event**: For simulating user events in tests
- **JSDOM**: For simulating a DOM environment in Node.js
- **@vitest/coverage-v8**: For code coverage reporting

#### Test Scripts

Available npm scripts for testing:
- `npm run test` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ci` - Run tests once (for CI environments)
- `npm run test:ui` - Run tests with UI interface

#### Test Coverage

The project maintains a minimum of 80% test coverage threshold for:
- Statements
- Branches
- Functions
- Lines