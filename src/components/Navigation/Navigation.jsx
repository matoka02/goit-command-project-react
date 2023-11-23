import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { closeModal } from 'redux/auth/authSlice';
import { setMobileFormAddProductsClose } from 'redux/products/productSlice';
import { Container, LinkCalculator, LinkDiary } from './Navigation.styled';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDiary = () => {
    dispatch(closeModal());
    dispatch(setMobileFormAddProductsClose());
    navigate('/diary');
  };

  const handleCalculator = () => {
    dispatch(closeModal());
    dispatch(setMobileFormAddProductsClose());
    navigate('/calculator');
  };

  const location = useLocation();
  
  return (
    <Container>
      <LinkDiary type='button' onClick={handleDiary} location={location}>
        DIARY
      </LinkDiary>
      <LinkCalculator
        type='button'
        onClick={handleCalculator}
        location={location}
      >
        CALCULATOR
      </LinkCalculator>
    </Container>
  );
};

export default Navigation;
