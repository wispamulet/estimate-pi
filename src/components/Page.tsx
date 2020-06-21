import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from './styled/Global';

const PageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media (min-width: ${theme.queries.xLarge}) {
      flex-direction: row;
    }
  `}
`;

type PageProps = {
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => (
  <PageContainer className="App">
    <GlobalStyle />
    {children}
  </PageContainer>
);

export default Page;

// export default function Page({ children }: React.Props<any>): JSX.Element {
//   return (
//     <PageContainer className="App">
//       <GlobalStyle />
//       {children}
//     </PageContainer>
//   );
// }
