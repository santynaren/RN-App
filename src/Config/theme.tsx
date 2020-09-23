import {createTheme, BaseTheme, createText, createBox} from '@shopify/restyle';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme: BaseTheme = createTheme({
  colors: {
    white: palette.white,
    primaryColor: '#2cb9b0',
    secondaryColor: '#e7e7e7',
    grey: '#a9a9a9',
    danger: '#f00',
    blackColor: palette.black,
    whiteColor: palette.white,
    headingColor: palette.black,
    cardPrimaryBackground: palette.purplePrimary,
    containerBackground: palette.white,
  },
  textVariants: {
    heading1: {
      textAlign: 'center',
      fontSize: 80,
      color: 'white',
      lineHeight: 80,
    },
    heading2: {
      // Heading 2 Styles comes here
    },
    heading3: {
      //  Heading 3 Styles comes here
    },
    heading4: {
      fontSize: 24,

      textAlign: 'center',
    },
    heading5: {
      //  Heading 5 Styles comes here
    },
    heading6: {
      fontSize: 16,
      textAlign: 'center',
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

// export type DarkTheme = typeof darkTheme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
