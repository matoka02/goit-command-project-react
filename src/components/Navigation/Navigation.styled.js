import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const LinkCalculator = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.22;
  letter-spacing: 0.04em;
  color: ${({ location, theme }) =>
    location.pathname === '/calculator'
      ? theme.colors.white
      : theme.colors.grey};
  border: none;
  background-color: transparent;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: translate(-1%, -1%);
  }
  @media screen and (min-width: 1280px) {
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.07;
    letter-spacing: 0.04em;
    color: ${({ location, theme }) =>
      location.pathname === '/calculator'
        ? theme.colors.black
        : theme.colors.grey};
  }
`;

export const LinkDiary = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.22;
  letter-spacing: 0.04em;
  color: ${({ location, theme }) =>
    location.pathname === '/diary' ? theme.colors.white : theme.colors.grey};
  text-align: center;
  border: none;
  background-color: transparent;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: translate(-1%, -1%);
  }
  @media screen and (min-width: 1280px) {
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.07;
    letter-spacing: 0.04em;
    color: ${({ location, theme }) =>
      location.pathname === '/diary' ? theme.colors.black : theme.colors.grey};
  }
`;
