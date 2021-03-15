import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    green: '#65CBA0',
    pink: '#CF88A0',
    teal: '#5CA2B1',
    primary: {
      100: '#F8F8FC',
      200: '#EBEAF6',
      300: '#A8A5CE',
      400: '#8C81D1',
    },
    blue: {
      200: '#E9F4FF',
    },
    gray: {
      300: '#CED0D6',
      400: '#A7A9B2',
      700: '#5F616D',
    },
  },
};

const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  414: customMediaQuery(375),
};

export const device = {
  mobile: 'only screen and (max-width: 767px)',
  tablet: 'only screen and (min-width: 768px) and (max-width: 1023px)',
  desktop: 'only screen and (min-width: 1024px)',
};
