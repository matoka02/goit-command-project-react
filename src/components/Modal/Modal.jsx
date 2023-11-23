import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import { modalClose } from 'redux/userData/userDataSlice';
import { selectOpenModal } from 'redux/userData/userDataSelectors';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import iconBtnCloseMob from 'assets/sprite.svg';
import { BoxMobileForBtn, BtnMobClose, BtnMobCloseSvg } from './Modal.styled';


const Modal = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectOpenModal);
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const scrollToTop = () => {
      if (isTablet) {
        window.scroll({
          top: 155,
          behavior: 'smooth',
        });
      }
      if (isDesktop) {
        window.scroll({
          top: 140,
          behavior: 'smooth',
        });
      }
    };
    if (isModalOpen) {
      scrollToTop();
    }
  }, [isDesktop, isModalOpen, isTablet]);

  return (
    <>
      {isMobile && (
        <BoxMobileForBtn>
          <BtnMobClose
            type='button'
            onClick={() => dispatch(modalClose())}
          ></BtnMobClose>
          <BtnMobCloseSvg>
            <use href={iconBtnCloseMob + '#icon-btn-mob-close'}></use>
          </BtnMobCloseSvg>
        </BoxMobileForBtn>
      )}

      <DailyCalorieIntake />
    </>
  );
};

export default Modal;
