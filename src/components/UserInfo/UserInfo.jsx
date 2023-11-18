import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOutUser } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
import { selectMobileFromAddProduct } from 'redux/products/productSelectors';
import { setMobileFormAddProductsClose } from 'redux/products/productSlice';
import backForMobileBtn from 'assets/sprite.svg';
import { Btn, BtnBack, BtnBox, Container, Svg, TextName } from './UserInfo.styled';

const UserInfo = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);

  const logOutHandler = () => {
    dispatch(logOutUser());
    navigate('/');
  };
  const handleBack = () => {
    dispatch(setMobileFormAddProductsClose());
  };

  return (
    <Container>
      {isMobileFormOpen && (
        <BtnBox>
          <BtnBack type='button' onClick={handleBack}>
            <Svg>
              <use href={backForMobileBtn + '#icon-back-for-mobile-form'}></use>
            </Svg>
          </BtnBack>
        </BtnBox>
      )}
      <TextName>{name}</TextName>
      <Btn type='button' onClick={logOutHandler}>
        Exit
      </Btn>
    </Container>
  )
};

export default UserInfo;
