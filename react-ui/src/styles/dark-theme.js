import baseTheme from './base-theme';
const getCSSVariable = (name) => `var(${name})`;

const darkTheme = {
  ...baseTheme,
  colors: {
    background: getCSSVariable('--dark-color-background'),
    text: {
      primary: getCSSVariable('--dark-color-text'),
      secondary: getCSSVariable('--dark-color-text-secondary'),
      tertiary: getCSSVariable('--dark-color-text-tertiary'),
    },
    border: getCSSVariable('--dark-color-border'),
    primary: getCSSVariable('--dark-color-primary'),
    secondary: getCSSVariable('--dark-color-secondary'),
    tertiary: getCSSVariable('--dark-color-tertiary'),
    primaryHover: getCSSVariable('--dark-color-primary-hover'),
    secondaryHover: getCSSVariable('--dark-color-secondary-hover'),
    success: getCSSVariable('--dark-color-success'),
    successHover: getCSSVariable('--dark-color-success-hover'),
    danger: getCSSVariable('--dark-color-danger'),
    dangerHover: getCSSVariable('--dark-color-danger-hover'),
    warning: getCSSVariable('--dark-color-warning'),
    warningHover: getCSSVariable('--dark-color-warning-hover'),
    info: getCSSVariable('--dark-color-info'),
    infoHover: getCSSVariable('--dark-color-info-hover'),
    light: getCSSVariable('--dark-color-light'),
    lightHover: getCSSVariable('--dark-color-light-hover'),
    dark: getCSSVariable('--dark-color-dark'),
    darkHover: getCSSVariable('--dark-color-dark-hover'),
    white: getCSSVariable('--dark-color-white'),
    whiteHover: getCSSVariable('--dark-color-white-hover'),
    black: getCSSVariable('--dark-color-black'),
    blackHover: getCSSVariable('--dark-color-black-hover'),
  },
  ui: {
    ...baseTheme.ui,
    sidebar: {
      ...baseTheme.ui.sidebar,
      background: getCSSVariable('--dark-color-sidebar-background'),
      itemHover: getCSSVariable('--dark-color-sidebar-item-hover'),
    },
    header: {
      ...baseTheme.ui.header,
      background: getCSSVariable('--dark-color-header-background'),
      text: getCSSVariable('--dark-color-header-text'),
    },
    input: {
      ...baseTheme.ui.input,
      background: getCSSVariable('--dark-color-input-background'),
      text: getCSSVariable('--dark-color-input-text'),
      placeholder: getCSSVariable('--dark-color-input-placeholder'),
    },
    button: {
      ...baseTheme.ui.button,
      primary: getCSSVariable('--dark-color-button-primary'),
      primaryHover: getCSSVariable('--dark-color-button-primary-hover'),
      text: getCSSVariable('--dark-color-button-text'),
    },
  },
  components: {
    ...baseTheme.components,

    container: {
      ...baseTheme.components.container,
      backgroundColor: '#2c2c2c',
      color: '#e6e6e6',
    },
    card: {
      ...baseTheme.components.card,
      backgroundColor: '#2c2c2c',
      color: '#e6e6e6',
      border: '1px solid #4d4d4d',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      '&:hover': {
        borderColor: '#8c8c8c',
      },
    },
    input: {
      ...baseTheme.components.input,
      borderColor: '#4d4d4d',
      backgroundColor: 'transparent',
    },
    navbar: {
      ...baseTheme.components.navbar,
      backgroundColor: '#333333',
    },
    table: {
      ...baseTheme.components.table,
      headerBackgroundColor: '#424242',
      rowHoverBackgroundColor: '#383838',
    },
    sidebar: {
      ...baseTheme.components.sidebar,
      backgroundColor: '#333333',
      color: '#e6e6e6',
      item: {
        ...baseTheme.components.sidebar.item,
        color: '#e6e6e6',
        '&:hover': {
          backgroundColor: '#424242',
        },
      },
    },
  },
};

export default darkTheme;