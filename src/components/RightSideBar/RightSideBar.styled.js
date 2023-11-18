import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${p => p.theme.colors.blue};
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
`;
