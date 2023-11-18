import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 4px 0 4px 0;
  background-color: ${p => p.theme.colors.bgUserInfo};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-color: ${p => p.theme.colors.white};
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    padding-top: 102px;
    width: 517px;
  }
`;

export const BtnBox = styled.div`
  position: absolute;
  top: 11px;
  left: 20px;
`;

export const BtnBack = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 27px;
`;

export const Svg = styled.svg`
  width: 32px;
  height: 27px;
`;

export const TextName = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.07;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  padding: 15px 0 13px 0;
  width: 122px;
  text-align: end;
`;

export const Btn = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.07;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.grey};
  border: none;
  padding: 15px 20px 13px 16px;
  border-left: 2px solid #e0e0e0;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 15px 0px 13px 16px;
    margin-right: 50px;
    background-color: ${p => p.theme.colors.white};
  }
`;
