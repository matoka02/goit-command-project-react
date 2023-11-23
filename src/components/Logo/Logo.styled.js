import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 1280px) {
    width: 167px;
  }
`;

export const WrapperForTabletAndMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 10px;
  }
`;

export const Svg = styled.svg`
  width: 105px;
  height: 16px;
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 52px;
    left: 56px;
  }
`;
