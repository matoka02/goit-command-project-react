import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { validateForRegister } from 'utility/auxiliaryFunctions';
import { authRegister } from 'redux/auth/authOperation';
import { Box, Btn, Container, ErrorBox, Form, Input, Label, Link, Title } from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate: validateForRegister,
    onSubmit: values => {
      const user = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(authRegister(user));
      navigate('/login');
    },
  });
  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <Input
            id='username'
            type='text'
            placeholder='Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.email ? (
            <ErrorBox>{formik.errors.username}</ErrorBox>
          ) : null}
        </Label>
        <Label>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <ErrorBox>{formik.errors.email}</ErrorBox>
          ) : null}
        </Label>
        <Label>
          <Input
            id='password'
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.email ? (
            <ErrorBox>{formik.errors.password}</ErrorBox>
          ) : null}
        </Label>
        <Box>
          <Btn type='submit'>Register</Btn>
          <Link to='/login'>Login</Link>
        </Box>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
