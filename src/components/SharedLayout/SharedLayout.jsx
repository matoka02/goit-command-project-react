import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { isSideBarOpen } from 'redux/auth/authSelectors';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  return (
    <Suspense fallback={<Loader />}>
      {isModalOpen ? null : <Header />}
      <Outlet />
    </Suspense>
  )
};

export default SharedLayout;