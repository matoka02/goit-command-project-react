import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import SharedLayout from './SharedLayout/SharedLayout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectSid, selectToken } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperation';
import bgForDesc from '../assets/images/background-desc.png';
import bgForTablet from '../assets/images/background-tabl.png';
import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import { getCurrentUser } from 'redux/userData/userDataOperation';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const RegisterPage = lazy(() =>
  import('../Pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const CalculatorPage = lazy(() =>
  import('../Pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('../Pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const sid = useSelector(selectSid);
  const isSignInUser = useSelector(selectToken);
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    isSignInUser === '' && dispatch(refreshUser(sid));
  }, [dispatch, isSignInUser, sid]);

  useEffect(() => {
    if (!isSignInUser && isDesktop) {
      document.body.style.background = `url(${bgForDesc}) no-repeat 108% 0px `;
      document.body.style.height = '880px';
    }
    if (!isSignInUser && isTablet) {
      document.body.style.background = `url(${bgForTablet}) no-repeat 100% 100% `;
      document.body.style.height = '1024px';
    }
    if (isSignInUser) {
      document.body.style = 'none';
    }
    if (isMobile) {
      document.body.style = 'none';
    }
  }, [isDesktop, isMobile, isSignInUser, isTablet]);

  useEffect(() => {
    if (isLoggedInUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isLoggedInUser]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/calculator" component={<MainPage />} />
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute
                redirectTo="/calculator"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/calculator" component={<LoginPage />} />
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute redirectTo="/" component={<CalculatorPage />} />
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/diary" component={<DiaryPage />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};
