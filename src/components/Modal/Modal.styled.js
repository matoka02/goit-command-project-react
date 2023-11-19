import styled from 'styled-components';

export const BoxMobileForBtn = styled.div`
  background-color: ${p => p.theme.colors.bgUserInfo};
  display: flex;
  align-items: center;
`;

export const BtnMobClose = styled.button`
  border: none;
  background: transparent;
  padding: 18px 0 18px 20px;
`;

export const BtnMobCloseSvg = styled.svg`
  width: 25px;
  height: 25px;
`;