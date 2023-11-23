import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from 'components/Modal/Modal';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';

import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { selectOpenModal } from 'redux/userData/userDataSelectors';

const MainPage = () => {
  const isSideBarModalOpen = useSelector(isSideBarOpen);

  const isModalOpen = useSelector(selectOpenModal);
  const isMobile = useIsMobile();
  const isTabletOrDesc = useIsTabletOrDesktop();
  return (
    <>
      {isSideBarModalOpen && <RightSideBar />}
      {isMobile && !isModalOpen ? (
        <DailyCaloriesForm />
      ) : isMobile && isModalOpen ? (
        <Modal />
      ) : null}
      {isTabletOrDesc && !isModalOpen ? (
        <DailyCaloriesForm />
      ) : isTabletOrDesc && isModalOpen ? (
        <>
          <DailyCaloriesForm /> <Modal />
        </>
      ) : null}
    </>
  );
};

export default MainPage;
