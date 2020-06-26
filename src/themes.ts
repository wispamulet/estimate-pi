import { DefaultTheme, ThemeColors } from 'styled-components';

const defaultColors: ThemeColors = {
  primary: '#0070f3',
  bg: '#fff',
  bgHeader: '#f5f6f7',
  bsHeader: '#d0d0d5',
};

const darkColors: ThemeColors = {
  primary: '#0070f3',
  bg: '#000',
  bgHeader: '#0070f3',
  bsHeader: '#d0d0d5',
};

const twilightColors: ThemeColors = {
  primary: '#0070f3',
  bg: 'bisque',
  bgHeader: '#f5f6f7',
  bsHeader: '#d0d0d5',
};

class Theme implements DefaultTheme {
  colors: ThemeColors;

  constructor(colors: ThemeColors = defaultColors) {
    this.colors = colors;
  }

  queries = {
    small: '576px',
    medium: '768px',
    large: '992px',
    xLarge: '1200px',
  };

  spaces = {
    s1: '0.8rem', // 8px
    s2: '1.6rem', // 16px
    s3: '2.4rem', // 24px
    s4: '3.2rem', // 32px
    s5: '4rem', // 40px
  };
}

export const defaultTheme = new Theme(defaultColors);
export const darkTheme = new Theme(darkColors);
export const twilightTheme = new Theme(twilightColors);
