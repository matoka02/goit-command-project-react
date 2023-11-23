import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import UserSummary from 'components/UserSummary/UserSummary';
import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { Container } from './CalculatorPage.styled';

const CalculatorPage = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  return (
    <>
      {isModalOpen ? (
        <RightSideBar />
      ) : (
        <Container>
          <CalculatorCalorieForm />
          <UserSummary />
        </Container>
      )}
    </>
  );
};

export default CalculatorPage;
