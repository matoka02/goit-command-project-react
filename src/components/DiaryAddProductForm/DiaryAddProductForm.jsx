import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';
import { correctDateForAddOperation } from 'utility/auxiliaryFunctions';
import { selectMobileFromAddProduct, selectProductSearch } from 'redux/products/productsSelectors';
import { searchByQueryProduct } from 'redux/products/productsOperation';
import { selectDataCalendar } from 'redux/userData/userDataSelectors';
import { addProduct } from 'redux/userData/userDataOperation';
import btnPlus from 'assets/sprite.svg';
import { Btn, BtnAdd, BtnAddWrapper, Form, FormBox, Input, InputGrams, Svg } from './DiaryAddProductForm.styled';

const DiaryAddProductForm = () => {
  const isMobile = useIsMobile();
  const isTabletOrDesktop = useIsTabletOrDesktop();
  const dispatch = useDispatch();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);
  const productsSearch = useSelector(selectProductSearch);
  const date = useSelector(selectDataCalendar);

  const formik = useFormik({
    initialValues: {
      name: '',
      grams: '',
    },
    onSubmit: values => {
      const product = {
        date: correctDateForAddOperation(date),
        productId: productsSearch.filter(el =>
          el.title.ua === values.name ? el._id : ''
        )[0]._id,
        weight: values.grams,
      };
      console.log(product);

      dispatch(addProduct(product));
      formik.resetForm();
    },
  });

  const onChangeHandler = evt => {
    formik.handleChange(evt);
    dispatch(searchByQueryProduct({ search: evt.target.value }));
  };

  return (
    <>
      {isMobile && isMobileFormOpen ? (
        <Form onSubmit={formik.handleSubmit}>
          <FormBox>
            <Input
              id='name'
              type='text'
              placeholder='Enter product name'
              list='productsList'
              onChange={onChangeHandler}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <datalist id='productsList'>
              {productsSearch.map(el => (
                <option value={el.title.ua} id={el._id}></option>
              ))}
            </datalist>
            <Input
              id='grams'
              type='number'
              placeholder='Grams'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grams}
            />
          </FormBox>
          <BtnAddWrapper>
            <BtnAdd type='submit'>Add</BtnAdd>
          </BtnAddWrapper>
        </Form>
      ) : null}
      {isTabletOrDesktop && (
        <Form onSubmit={formik.handleSubmit}>
          <FormBox>
            <Input
              id='name'
              type='text'
              placeholder='Enter product name'
              list='productsList'
              onChange={onChangeHandler}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <datalist id='productsList'>
              {productsSearch.map(el => (
                <option key={el._id} value={el.title.ua} id={el._id}></option>
              ))}
            </datalist>
            <InputGrams
              id='grams'
              type='number'
              placeholder='Grams'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grams}
            />
          </FormBox>
          <div>
            <Btn type='submit'>
              <Svg>
                <use href={btnPlus + '#icon-plus'}></use>
              </Svg>
            </Btn>
          </div>
        </Form>
      )}
    </>
  );
};

export default DiaryAddProductForm;
