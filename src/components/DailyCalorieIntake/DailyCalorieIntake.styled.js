import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    background: rgba(33, 33, 33, 0.12);
    position: absolute;
    width: 100%;
    height: 1024px;
    /* top: 0; */
    padding: 0;

    background: rgba(33, 33, 33, 0.12);
    position: absolute;
    width: 100%;
    height: 1024px;
    /* height: 100%; */
    top: 0px;
    padding: 0px;
  }
  @media screen and (min-width: 1280px) {
    height: 880px;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    background-color: ${p => p.theme.colors.white};
    padding: 64px 82px 81px;
    box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
    /* position: relative; */
    animation: 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0s 1 normal both running
      slowAppearance;
    @keyframes slowAppearance {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: absolute;
    top: 10%;
    left: 15%; */
  }
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  color: ${p => p.theme.colors.black};
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.mPlus};
    line-height: 1.23;
    width: 399px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const Value = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.blue};
  padding-bottom: 32px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;
export const Span = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  color: ${p => p.theme.colors.blue};
`;
export const TitleSecondary = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.44;
  color: ${p => p.theme.colors.black};
`;
export const List = styled.ul``;
export const Item = styled.li`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.grey};

  margin-bottom: 40px;
`;
export const BtnLosingWeightBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const BtnLosingWeight = styled.button`
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.white};
  padding: 13px 25px;
`;
export const BtnTabletDescClose = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const BtnTabletDescCloseSvg = styled.svg`
  width: 20px;
  height: 20px;
`;
