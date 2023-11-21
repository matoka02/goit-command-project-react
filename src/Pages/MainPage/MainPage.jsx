import { useSelector } from 'react-redux';

import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { selectOpenModal } from 'redux/userData/userDataSelectors';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import Modal from 'components/Modal/Modal';

const MainPage = () => {
  const isSideBarModalOpen = useSelector(isSideBarOpen);
  const isModalOpen = useSelector(selectOpenModal);
  const isMobile = useIsMobile();
  const isTabletOrDesktop = useIsTabletOrDesktop();

  return (
    <>
      {isSideBarModalOpen && <RightSideBar />}
      {isMobile && !isModalOpen ? (
        <DailyCaloriesForm />
      ) : isMobile && isModalOpen ? (
        <Modal />
      ) : null}
      {isTabletOrDesktop && !isModalOpen ? (
        <DailyCaloriesForm />
      ) : isTabletOrDesktop && isModalOpen ? (
        <>
          <DailyCaloriesForm />
          <Modal />
        </>
      ) : null}
    </>
  );
};

export default MainPage;