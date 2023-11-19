import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 8px;
`;

export const Title = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding-bottom: 8px;
  color: ${p => p.theme.colors.black};
  width: 130px;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 768px) {
    width: 240px;
    padding-bottom: 20px;
  }
`;

export const TextGrams = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding-bottom: 8px;
  color: ${p => p.theme.colors.black};
  border-bottom: 1px solid #e0e0e0;
  width: 49px;
  text-align: right;
  @media screen and (min-width: 768px) {
    width: 105px;
    padding-bottom: 20px;
  }
`;

export const TextKcal = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding-bottom: 8px;
  color: ${p => p.theme.colors.black};
  border-bottom: 1px solid #e0e0e0;
  width: 58px;
  text-align: right;
  @media screen and (min-width: 768px) {
    width: 105px;
    padding-bottom: 20px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Btn = styled.button`
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: none;
`;

export const Svg = styled.svg`
  width: 12px;
  height: 12px;
`;
