import { useDispatch, useSelector } from 'react-redux';
import {
  BtnLosingWeight,
  BtnLosingWeightBox,
  BtnTabletDescClose,
  BtnTabletDescCloseSvg,
  Container,
  Item,
  Span,
  Title,
  TitleSecondary,
  Value,
  Wrapper,
} from './DailyCalorieIntake.styled';
import {
  selectModalDataDailyRate,
  selectModalDataNotAllowedProducts,
} from 'redux/userData/userDataSelectors';
import { modalClose } from 'redux/userData/userDataSlice';
import { useIsTabletOrDesktop } from 'hooks/mediaQuery';
import iconBtnClose from '../../assets/sprite.svg';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(selectModalDataDailyRate);
  const notAllowedProducts = useSelector(selectModalDataNotAllowedProducts);
  const dispatch = useDispatch();
  const isTabletOrDesc = useIsTabletOrDesktop();
  const modalRoot = document.querySelector('#modal');

  useEffect(() => {
    const handleClose = e => {
      if (e.code === 'Escape') {
        dispatch(modalClose());
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const closeBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(modalClose());
    }
  };

  return createPortal(
    <Container onClick={closeBackdrop}>
      <Wrapper>
        {isTabletOrDesc && (
          <>
            <BtnTabletDescClose
              type="button"
              onClick={() => dispatch(modalClose())}
            >
              <BtnTabletDescCloseSvg>
                <use href={iconBtnClose + '#icon-btnClose'}></use>
              </BtnTabletDescCloseSvg>
            </BtnTabletDescClose>
          </>
        )}
        <Title>Your recommended daily calorie intake is</Title>
        <Value>
          {dailyRate} <Span>kal</Span>
        </Value>
        <TitleSecondary>Foods you should not eat</TitleSecondary>
        <ul>
          {notAllowedProducts?.length !== 0 ? (
            notAllowedProducts?.map((item, index) => (
              <Item>
                {index}.{item}
              </Item>
            ))
          ) : (
            <Item>There are no prohibited products</Item>
          )}
          <BtnLosingWeightBox>
            <BtnLosingWeight
              type="button"
              onClick={() => dispatch(modalClose())}
            >
              Start losing weight
            </BtnLosingWeight>
          </BtnLosingWeightBox>
        </ul>
      </Wrapper>
    </Container>,
    modalRoot
  );
};

export default DailyCalorieIntake;
