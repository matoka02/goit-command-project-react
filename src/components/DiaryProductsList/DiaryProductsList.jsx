import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useSelector } from 'react-redux';
import { selectEatenProducts } from 'redux/userData/userDataSelectors';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = () => {
  const products = useSelector(selectEatenProducts);

  return (
    <>
      {products?.length > 0 ? (
        <List>
          <DiaryProductsListItem />
        </List>
      ) : null}
    </>
  );
};

export default DiaryProductsList;
