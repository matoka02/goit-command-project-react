import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authLogin } from 'redux/auth/authOperation';
import { validateForLogin } from 'utility/auxiliaryFunctions';
import { Box, Btn, Container, ErrorBox, Form, Input, Label, Link, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateForLogin,
    onSubmit: values => {
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(authLogin(user));
      navigate('/');
    },
  });

  return (
    <Container>
      <Title>Sign in</Title>
      <Form onSubmit={formik.handleSubmit}>
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

export default LoginForm;