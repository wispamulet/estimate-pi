// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export type ThemeColors = {
    primary: string;
    bg: string;
    bgHeader: string;
    bsHeader: string;
  };

  export interface DefaultTheme {
    colors: ThemeColors;
    queries: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    spaces: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    };
  }
}
