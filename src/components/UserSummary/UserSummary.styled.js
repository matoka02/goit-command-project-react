import styled from 'styled-components';
import bg from 'assets/images/leaf-for-user-info-tablet.png';
import bgForDesktop from 'assets/images/leaf-for-user-info-desktop.png';

export const Container = styled.div`
  padding: 40px 20px 24px 20px;
  background-color: #f0f1f3;
  @media screen and (min-width: 768px) { 
    display: flex;
    gap: 80px;
    padding: 80px 0 80px 32px;
    background: url(${bg}) no-repeat right bottom #f0f1f3;
  };
  @media screen and (min-width: 1280px) and (min-height: 310px) and (max-height: 620px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
    width: 517px;
    gap: 60px;
    height: 100vh;
    padding-top: 150px;
    background: url(${bgForDesktop}) no-repeat right top 120% #f0f1f3;
  };
  @media screen and (min-width: 1280px) and (min-height: 621px) and (max-height: 655px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
    width: 517px;
    gap: 60px;
    height: 100vh;
    padding-top: 150px;
    background: url(${bgForDesktop}) no-repeat right bottom -400% #f0f1f3;
  };
  @media screen and (min-width: 1280px) and (min-height: 656px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
    width: 517px;
    gap: 60px;
    height: 100vh;
    padding-top: 150px;
    background: url(${bgForDesktop}) no-repeat right bottom 120% #f0f1f3;
  };
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  @media screen and (min-width: 768px){
    margin-bottom:30px;
  };
`;

export const TitleSecond = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  @media screen and (min-width: 768px){
    margin-bottom:30px;
  };
`;

export const ListSummary = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px){
    margin-bottom:30px;
  };
`;

export const ItemSummary = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.grey};
`;

export const BoxNotRecommendedProducts = styled.div`
  height: 104px;
  overflow-y: ${({ notAllowedProducts }) =>
    notAllowedProducts?.length > 0 ? 'auto' : 'hidden'};
`;

export const ListNotRecommendedProducts = styled.ul`
  position: sticky;
  @media screen and (min-width: 768px) {
    width: 288px;
    height: 166px;
  }
`;

export const ItemNotRecommendedProducts = styled.li``;