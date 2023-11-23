import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  z-index: 10;
`;
export const Section = styled.section`
  padding: 40px 0 0 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 100px 0 0 32px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding: 147px 0 0 16px;
  }
`;
export const TitleDate = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bolt};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.22;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.2;
  }
`;
export const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms;
  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
    &:hover {
      background-color: RGB(240, 241, 243);
      border-radius: 50%;
    }
  }
`;
export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding-left: 32px;
    position: absolute;
    top: 150px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    position: absolute;
    top: 193px;
  }
`;
