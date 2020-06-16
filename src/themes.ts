const spaces = {
  s1: '0.8rem', // 8px
  s2: '1.6rem', // 16px
  s3: '2.4rem', // 24px
  s4: '3.2rem', // 32px
  s5: '4rem', // 40px
};

const queries = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xLarge: '1200px',
};

export const defaultTheme = {
  colors: {
    primary: '#0070f3',
    bgColor: '#fff',
  },
  queries,
  spaces,
};

export const darkTheme = {
  colors: {
    primary: '#0070f3',
    bgColor: '#000',
  },
  queries,
  spaces,
};

export const twilightTheme = {
  colors: {
    primary: '#0070f3',
    bgColor: 'bisque',
  },
  queries,
  spaces,
};
