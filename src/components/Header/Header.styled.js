import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 20px 20px 16px 20px;
  border-bottom: 2px solid #e0e0e0;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    padding: 80px 0 0 16px;
    border-bottom: none;
    justify-content: flex-start;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 0;
  }
  @media screen and (min-width: 1280px) {
    align-items: flex-end;
    &::before {
      content: '';
      position: absolute;
      width: 32px;
      height: 2px;
      background-color: #e0e0e0;
      /* transform: translate(10px, 10px); */
      transform: rotate(90deg);
      left: 182px;
      top: 141px;
    }
  }
`;

export const Link = styled(NavLink)`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.07;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: translate(-1%, -1%);
    color: ${p => p.theme.colors.orange};
  }
`;

export const LinkRegister = styled(NavLink)`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.07;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.grey};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: translate(-1%, -1%);
    color: ${p => p.theme.colors.orange};
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const ButtonMenu = styled.button`
  border: none;
  background-color: transparent;
`;

export const ButtonMenuIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
