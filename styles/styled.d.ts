import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: '#000000';
      white: '#ffffff';
      green: '#65CBA0';
      pink: '#CF88A0';
      teal: '#5CA2B1';
      primary: {
        100: '#F8F8FC';
        200: '#EBEAF6';
        300: '#A8A5CE';
        400: '#8C81D1';
      };
      blue: {
        200: '#E9F4FF';
      };
      gray: {
        100: '#F7F7F7';
        300: '#CED0D6';
        400: '#A7A9B2';
        700: '#5F616D';
      };
    };
  }
}
