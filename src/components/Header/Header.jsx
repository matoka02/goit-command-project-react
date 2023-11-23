import { useDispatch, useSelector } from 'react-redux';

import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import { closeModal, openModal } from 'redux/auth/authSlice';
import { isSideBarOpen, selectToken } from 'redux/auth/authSelectors';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import burgerMenu from 'assets/sprite.svg';
import { Box, ButtonMenu, ButtonMenuIcon, Container, HeaderWrap, Link, LinkRegister, Wrapper } from './Header.styled';

const Header = () => {
  const isAuth = useSelector(selectToken);
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isModalOpen = useSelector(isSideBarOpen);
  const dispatch = useDispatch();

  const menuOpen = () => {
    dispatch(openModal());
  };
  const menuClose = () => {
    dispatch(closeModal());
  };

  return (
    <HeaderWrap>
      <Wrapper>
        <Logo />
        {!isAuth && (
          <Container>
            <Link to='login'>SIGN IN</Link>
            <LinkRegister to='registration'>REGISTRATION</LinkRegister>
          </Container>
        )}
        {isAuth && isDesktop && (
          <Container>
            <Navigation />
          </Container>
        )}
        {(isAuth && !isDesktop && !isModalOpen && isTablet && (
          <Box>
            <UserInfo />
            <ButtonMenu type='button' onClick={menuOpen}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-burger-menu'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          </Box>
        )) ||
          (isAuth && !isDesktop && !isModalOpen && isMobile && (
            <ButtonMenu type='button' onClick={menuOpen}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-burger-menu'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          )) ||
          (isModalOpen && isAuth && !isDesktop && (
            <ButtonMenu type='button' onClick={menuClose}>
              <ButtonMenuIcon>
                <use href={burgerMenu + '#icon-btnClose'}></use>
              </ButtonMenuIcon>
            </ButtonMenu>
          ))}
      </Wrapper>
      {isAuth && isMobile && !isModalOpen && <UserInfo />}
      {isAuth && isDesktop && <UserInfo />}
    </HeaderWrap>
  );
};

export default Header;
