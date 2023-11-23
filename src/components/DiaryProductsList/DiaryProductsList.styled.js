import styled from 'styled-components';

export const List = styled.ul`
  position: sticky;
  overflow-y: auto;
  height: 200px;
  display: flex;

  flex-direction: column;
  padding: 0 20px 0 20px;
  margin-bottom: 60px;
  gap: 20px;
  @media screen and (min-width: 768px) {
    height: 230px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;
