import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { validateCalculatorCalorie } from 'utility/auxiliaryFunctions';
import { calculateDailyRateForSignUser } from 'redux/userData/userDataOperation';
import {
  Box,
  BoxForTabletAndDesktop,
  BoxForTabletAndDesktopSecond,
  BoxForTabletAndDesktopThird,
  BoxTitle,
  Btn,
  Container,
  DivRadio,
  ErrorBox,
  Form,
  Input,
  Label,
  Title,
  WrapperRadio,
  WrapperRadioBtn,
  WrapperRadioLabel,
  WrapperSubmit,
} from './CalculatorCalorieForm.styled';

const CalculatorCalorieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.auth.user.id);

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      weight: '',
      desiredWeight: '',
      bloodType: '',
    },
    validate: validateCalculatorCalorie,
    onSubmit: values => {
      const dataUser = {
        height: values.height,
        age: values.age,
        weight: values.weight,
        desiredWeight: values.desiredWeight,
        bloodType: values.bloodType,
      };
      const fetchUser = { userId, dataUser };
      dispatch(calculateDailyRateForSignUser(fetchUser));
      navigate('/diary');
    },
  });

  return (
    <Container>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={formik.handleSubmit}>
        <BoxForTabletAndDesktop>
          <BoxForTabletAndDesktopSecond>
            <Label>
              <Input
                type='text'
                id='height'
                placeholder='Height'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
              />
              {formik.errors.height && formik.touched.height ? (
                <ErrorBox>{formik.errors.height}</ErrorBox>
              ) : null}
            </Label>
            <Label>
              <Input
                type='text'
                placeholder='Age'
                id='age'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
              />
              {formik.errors.age && formik.touched.age ? (
                <ErrorBox>{formik.errors.age}</ErrorBox>
              ) : null}
            </Label>
            <Label>
              <Input
                type='text'
                placeholder='Current weight'
                id='weight'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
              />
              {formik.errors.weight && formik.touched.weight ? (
                <ErrorBox>{formik.errors.weight}</ErrorBox>
              ) : null}
            </Label>
          </BoxForTabletAndDesktopSecond>
          <BoxForTabletAndDesktopThird>
            <Label>
              <Input
                type='text'
                placeholder='Desired weight'
                id='desiredWeight'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desiredWeight}
              />
              {formik.errors.desiredWeight && formik.touched.desiredWeight ? (
                <ErrorBox>{formik.errors.desiredWeight}</ErrorBox>
              ) : null}
            </Label>
            <Box>
              <BoxTitle>Blood type {formik.values.bloodType}</BoxTitle>
              {formik.errors.bloodType && formik.touched.bloodType ? (
                <ErrorBox>{formik.errors.bloodType}</ErrorBox>
              ) : null}
            </Box>
            <WrapperRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type='radio'
                  value='1'
                  id='bloodType'
                  name='bloodType'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <WrapperRadioLabel htmlFor='1'>1</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type='radio'
                  value='2'
                  name='bloodType'
                  id='bloodType'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor='2'>2</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type='radio'
                  value='3'
                  name='bloodType'
                  id='bloodType'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor='3'>3</WrapperRadioLabel>
              </DivRadio>
              <DivRadio>
                <WrapperRadioBtn
                  type='radio'
                  value='4'
                  name='bloodType'
                  id='bloodType'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <WrapperRadioLabel htmlFor='4'>4</WrapperRadioLabel>
              </DivRadio>
            </WrapperRadio>
          </BoxForTabletAndDesktopThird>
        </BoxForTabletAndDesktop>
        <WrapperSubmit>
          <Btn type='submit'>Start losing weight</Btn>
        </WrapperSubmit>
      </Form>
    </Container>
  );
};

export default CalculatorCalorieForm;
