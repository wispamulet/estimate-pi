// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bgColor: string;
    };
    spaces: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    };
    queries: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
