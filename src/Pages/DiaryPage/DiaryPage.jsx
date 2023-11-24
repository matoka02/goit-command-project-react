import { useDispatch, useSelector } from 'react-redux';

import { useIsMobile } from 'hooks/mediaQuery';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { setMobileFormAddProductsOpen } from 'redux/products/productSlice';
import { selectMobileFromAddProduct } from 'redux/products/productSelectors';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import UserSummary from 'components/UserSummary/UserSummary';
import DiaryDateCalendar from 'components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { BoxForMobile, Btn, Svg } from 'components/DiaryAddProductForm/DiaryAddProductForm.styled';
import btnPlus from 'assets/sprite.svg';
import { Container } from './DiaryPage.styled';

const DiaryPage = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  const isMobile = useIsMobile();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);
  const dispatch = useDispatch();
  const goToFormForMobile = () => {
    dispatch(setMobileFormAddProductsOpen());
  };

  return (
    <>
      {isModalOpen ? (
        <RightSideBar />
      ) : !isModalOpen && !isMobileFormOpen ? (
        <>
          <Container>
            <div>
              <DiaryDateCalendar />
              <DiaryAddProductForm />
              <DiaryProductsList />
              {isMobile && !isMobileFormOpen ? (
                <BoxForMobile>
                  <Btn type="button" onClick={goToFormForMobile}>
                    <Svg>
                      <use href={btnPlus + '#icon-plus'}></use>
                    </Svg>
                  </Btn>
                </BoxForMobile>
              ) : null}
            </div>
            <UserSummary />
          </Container>
        </>
      ) : isMobileFormOpen && isMobile ? (
        <DiaryAddProductForm />
      ) : null}
    </>
  );
};

export default DiaryPage;
