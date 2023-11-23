import { useDispatch, useSelector } from 'react-redux';

import { deleteProduct, getInfoDay } from 'redux/userData/userDataOperation';
import { selectDateNow, selectDayId, selectDayIdSecond, selectEatenProducts } from 'redux/userData/userDataSelectors';
import btnDeleteIcon from 'assets/sprite.svg';
import { Btn, BtnBox, Item, Svg, TextGrams, TextKcal, Title } from './DiaryProductsListItem.styled';

const DiaryProductsListItem = () => {
  const products = useSelector(selectEatenProducts);
  const daySummary = useSelector(selectDayId);
  const daySummarySecond = useSelector(selectDayIdSecond);
  const date = useSelector(selectDateNow);
  const dispatch = useDispatch();

  const deleteProductHandler = evt => {
    const dataProduct = {
      dayId: daySummary ? daySummary : daySummarySecond,
      eatenProductId: evt.currentTarget.id,
    };
    dispatch(deleteProduct(dataProduct));
    dispatch(getInfoDay({ date }));
  };

  return (
    <>
      {products
        ? products?.map(({ id, title, weight, kcal }) => (
          <Item key={id}>
            <Title>{title.slice(0, 14) + '...'}</Title>
            <TextGrams>{weight}g</TextGrams>
            <TextKcal>{Math.ceil(kcal)}kcal</TextKcal>
            <BtnBox>
              <Btn
                type='button'
                id={id}
                onClick={evt => deleteProductHandler(evt)}
              >
                <Svg>
                  <use href={btnDeleteIcon + '#icon-btn-delete'}></use>
                </Svg>
              </Btn>
            </BtnBox>
          </Item>
        ))
        : null}
    </>
  );
};

export default DiaryProductsListItem;
