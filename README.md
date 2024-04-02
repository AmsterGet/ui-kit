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

To see a published showcase of the latest components released, follow the [link]() (to be provided).

### Code style

### CSS

#### Theming

The project uses [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to provide colors/fonts/etc. values for different themes via theme-specific CSS classes.
All components get the appropriate theme values at runtime based on the cascading nature of CSS.

This approach was chosen because it is easy to implement and maintain, and CSS Custom Properties are part of [WEB standards](https://www.w3.org/TR/css-variables-1/) and supported by [all major browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#browser_compatibility).

### External libs

- [classnames](https://www.npmjs.com/package/classnames) - used for conditionally joining class names together.
- [downshift](https://www.npmjs.com/package/downshift) - used to build simple, flexible, WAI-ARIA compliant React autocomplete/dropdown/select/combobox components.
- [framer-motion](https://www.npmjs.com/package/framer-motion) - used for animations.
- [rc-scrollbars](https://www.npmjs.com/package/rc-scrollbars) - used for custom scrollbars.

### Testing
