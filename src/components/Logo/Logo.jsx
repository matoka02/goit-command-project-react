import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import { selectToken } from 'redux/auth/authSelectors';
import logoDesktop from 'assets/images/logo-desktop.png';
import logo from 'assets/images/logo-tablet-mobile.png';
import logoText from 'assets/sprite.svg';
import { Box, Svg, Wrapper, WrapperForTabletAndMobile } from './Logo.styled';

const Logo = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isAuth = useSelector(selectToken);

  return (
    <>
      {isMobile && !isAuth ? (
        <Box>
          <NavLink to='diary'>
            {' '}
            <img src={logo} alt='logo' width='46' />
          </NavLink>
        </Box>
      ) : isMobile && isAuth ? (
        <WrapperForTabletAndMobile>
          <NavLink to='diary'>
            <img src={logo} alt='logo' width='46' />
          </NavLink>
          <Svg>
            <use href={logoText + '#icon-logo-text'}></use>
          </Svg>
        </WrapperForTabletAndMobile>
      ) : null}
      {isTablet && (
        <WrapperForTabletAndMobile>
          <NavLink to='diary'>
            <img src={logoDesktop} alt='logo' width='46' />
            <Svg>
              <use href={logoText + '#icon-logo-text'}></use>
            </Svg>
          </NavLink>
        </WrapperForTabletAndMobile>
      )}{' '}
      {isDesktop && (
        <Wrapper>
          <NavLink to='diary'>
            <img src={logoDesktop} alt='logo' width='70' />
            <Svg>
              <use href={logoText + '#icon-logo-text'}></use>
            </Svg>
          </NavLink>
        </Wrapper>
      )}
    </>
  )
};

export default Logo;