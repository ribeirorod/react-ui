const getCSSVariable = (name) => `var(${name})`;

const baseTheme = {
  colors: {
    background: getCSSVariable('--color-background'),
    primary: getCSSVariable('--color-primary'),
    secondary: getCSSVariable('--color-secondary'),
    tertiary: getCSSVariable('--color-tertiary'),
    accent: getCSSVariable('--color-accent'),
    text: {
      primary: getCSSVariable('--color-text-primary'),
      secondary: getCSSVariable('--color-text-secondary'),
      tertiary: getCSSVariable('--color-text-tertiary'),
    },
    border: getCSSVariable('--color-border'),
    success: getCSSVariable('--color-success'),
    danger: getCSSVariable('--color-danger'),
    warning: getCSSVariable('--color-warning'),
    info: getCSSVariable('--color-info'),
    light: getCSSVariable('--color-light'),
    dark: getCSSVariable('--color-dark'),
    white: getCSSVariable('--color-white'),
    black: getCSSVariable('--color-black'),
    gray100: getCSSVariable('--color-gray-100'),
    gray200: getCSSVariable('--color-gray-200'),
    gray300: getCSSVariable('--color-gray-300'),
    gray400: getCSSVariable('--color-gray-400'),
    gray500: getCSSVariable('--color-gray-500'),
    gray600: getCSSVariable('--color-gray-600'),
    gray700: getCSSVariable('--color-gray-700'),
    gray800: getCSSVariable('--color-gray-800'),
    gray900: getCSSVariable('--color-gray-900'),
    primaryHover: getCSSVariable('--color-primary-hover'),
    secondaryHover: getCSSVariable('--color-secondary-hover'),
    successHover: getCSSVariable('--color-success-hover'),
    dangerHover: getCSSVariable('--color-danger-hover'),
    warningHover: getCSSVariable('--color-warning-hover'),
    infoHover: getCSSVariable('--color-info-hover'),
  },

  // Typography
  typography: {
    fontFamily: getCSSVariable('--font-family'),
    fontSize: getCSSVariable('--font-size-base'),
    fontWeightLight: getCSSVariable('--font-weight-light'),
    fontWeightRegular: getCSSVariable('--font-weight-regular'),
    fontWeightMedium: getCSSVariable('--font-weight-medium'),
    fontWeightBold: getCSSVariable('--font-weight-bold'),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
      fontWeight: 700,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  // Add a new section for syntax highlighting
  syntax: {
    background: getCSSVariable('--color-syntax-background'),
    text: getCSSVariable('--color-syntax-text'),
    comment: getCSSVariable('--color-syntax-comment'),
    keyword: getCSSVariable('--color-syntax-keyword'),
    string: getCSSVariable('--color-syntax-string'),
    number: getCSSVariable('--color-syntax-number'),
    function: getCSSVariable('--color-syntax-function'),
  },

  ui: {
    sidebar: {
      background: getCSSVariable('--color-sidebar-background'),
      itemHover: getCSSVariable('--color-sidebar-item-hover'),
    },
    header: {
      background: getCSSVariable('--color-header-background'),
      text: getCSSVariable('--color-header-text'),
    },
    input: {
      background: getCSSVariable('--color-input-background'),
      text: getCSSVariable('--color-input-text'),
      placeholder: getCSSVariable('--color-input-placeholder'),
    },
    button: {
      primary: getCSSVariable('--color-button-primary'),
      primaryHover: getCSSVariable('--color-button-primary-hover'),
      secondary: getCSSVariable('--color-button-secondary'),
      secondaryHover: getCSSVariable('--color-button-secondary-hover'),
      text: getCSSVariable('--color-button-text'),
    },
  },
  // Breakpoints
  breakpoints: {
    xs: getCSSVariable('--breakpoint-xs'),
    sm: getCSSVariable('--breakpoint-sm'),
    md: getCSSVariable('--breakpoint-md'),
    lg: getCSSVariable('--breakpoint-lg'),
    xl: getCSSVariable('--breakpoint-xl'),
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: getCSSVariable('--shadow-sm'),
    md: getCSSVariable('--shadow-md'),
    lg: getCSSVariable('--shadow-lg'),
    xl: getCSSVariable('--shadow-xl'),
  },
  padding: {
    none: 0,
    sm: getCSSVariable('--padding-sm'),
    md: getCSSVariable('--padding-md'),
    lg: getCSSVariable('--padding-lg'),
  },
margin: {
    none: 0,
    sm: 1,
    md: 1,
    lg: 2,
  },
  // Border Radius
  borderRadius: {
    none: '0',
    sm: getCSSVariable('--border-radius-sm'),
    md: getCSSVariable('--border-radius-md'),
    lg: getCSSVariable('--border-radius-lg'),
    xl: getCSSVariable('--border-radius-xl'),
    full: getCSSVariable('--border-radius-full'),
  },

  // Z-index
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // Components
  components: {
    button: {
      transition: 'all 0.3s ease',
      padding: '8px 12px',
      fontSize: '0.875rem',
      backgroundColor: getCSSVariable('--color-light'),
      hoverBackground: getCSSVariable('--color-gray-200'),
      color: getCSSVariable('--color-dark'),
      border: 'none',
      cursor: 'pointer',
      small: {
        padding: '8px 12px',
        fontSize: '0.875rem',
      },
      medium: {
        padding: '12px 18px',
        fontSize: '1rem',
      },
      large: {
        padding: '16px 24px',
        fontSize: '1.2rem',
      },
      primary: {
        color: getCSSVariable('--color-button-text'),
        backgroundColor: getCSSVariable('--color-button-primary'),
        hoverBackground: getCSSVariable('--color-button-primary-hover'),
      },
      secondary: {
        backgroundColor: getCSSVariable('--color-button-secondary'),
        color: getCSSVariable('--color-button-text'),
        hoverBackground: getCSSVariable('--color-button-secondary-hover'),
      },
      light: {
        backgroundColor: getCSSVariable('--color-light'),
        color: getCSSVariable('--color-dark'),
        hoverBackground: getCSSVariable('--color-gray-200'),
      },
      dark: {
        backgroundColor: getCSSVariable('--dark-color-button-background'),
        color: getCSSVariable('--color-light'),
        hoverBackground: getCSSVariable('--color-gray-800'),
      },
      black: {
        backgroundColor: getCSSVariable('--color-black'),
        color: getCSSVariable('--color-white'),
        hoverBackground: getCSSVariable('--color-gray-900'),
      },
    },

    // Container
    container: {
      backgroundColor: getCSSVariable('--color-container-background'),
      color: getCSSVariable('--color-dark'),
      boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
      overflow: 'hidden',
    },
    // Input
    input: {
      borderRadius: '4px',
      borderColor: getCSSVariable('--color-gray-400'),
      padding: '10px',
      fontSize: '1rem',
    },

    // Card
    card: {
      boxShadow: getCSSVariable('--shadow-sm'),
      maxWidth: '100%',
      backgroundColor: getCSSVariable('--color-white'),
      color: getCSSVariable('--color-dark'),
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },

    // Navbar
    navbar: {
      height: '64px',
      backgroundColor: getCSSVariable('--color-white'),
      boxShadow: getCSSVariable('--shadow-sm'),
    },

    // Table
    table: {
      borderColor: getCSSVariable('--color-gray-400'),
      headerBackgroundColor: getCSSVariable('--color-gray-100'),
      rowHoverBackgroundColor: getCSSVariable('--color-gray-200'),
    },

    // Modal
    modal: {
      backdropColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '8px',
      boxShadow: getCSSVariable('--shadow-md'),
    },

    // Toast/Snackbar
    toast: {
      borderRadius: '4px',
      boxShadow: getCSSVariable('--shadow-md'),
    },

    // Sidebar
    sidebar: {
      width: '250px',
      backgroundColor: getCSSVariable('--color-gray-100'),
      color: getCSSVariable('--color-dark'),
      padding: '20px',
      boxShadow: getCSSVariable('--shadow-sm'),
      item: {
        padding: '10px 15px',
        fontSize: '1rem',
        color: getCSSVariable('--color-dark'),
        hoverBackground: getCSSVariable('--color-gray-200'),
      },
    },
  },

  // Transitions
  transitions: {
    easing: {
      easeInOut: getCSSVariable('--transition-easing-ease-in-out'),
      easeOut: getCSSVariable('--transition-easing-ease-out'),
      easeIn: getCSSVariable('--transition-easing-ease-in'),
      sharp: getCSSVariable('--transition-easing-sharp'),
    },
    duration: {
      shortest: getCSSVariable('--transition-duration-shortest'),
      shorter: getCSSVariable('--transition-duration-shorter'),
      short: getCSSVariable('--transition-duration-short'),
      standard: getCSSVariable('--transition-duration-standard'),
      complex: getCSSVariable('--transition-duration-complex'),
      enteringScreen: getCSSVariable('--transition-duration-entering-screen'),
      leavingScreen: getCSSVariable('--transition-duration-leaving-screen'),
    },
  },
};

export default baseTheme;