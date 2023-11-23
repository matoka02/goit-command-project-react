import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useIsTabletOrDesktop } from 'hooks/mediaQuery';
import { correctDataForSummary, replaceForSummary } from 'utility/auxiliaryFunctions';
import { selectDailyRateForFist, selectDataCalendar, selectModalDataNotAllowedProducts, selectSummary } from 'redux/userData/userDataSelectors';
import { BoxNotRecommendedProducts, Container, ItemSummary, ListNotRecommendedProducts, ListSummary, Text, Title, TitleSecond } from './UserSummary.styled';

const UserSummary = () => {
  const dailyRateForFist = useSelector(selectDailyRateForFist);
  const notAllowedProducts = useSelector(selectModalDataNotAllowedProducts);
  const summary = useSelector(selectSummary);

  const isTabletOrDesktop = useIsTabletOrDesktop();
  const dataToday = useSelector(selectDataCalendar);

  return (
    <Container>
      <ListSummary>
        <Title>
          {!dataToday
            ? correctDataForSummary(Date.now())
            : replaceForSummary(dataToday)}
        </Title>
        <ItemSummary>
          <Text>Left</Text>
          <Text>
            {!summary?.kcalLeft && !summary?.daySummary?.kcalLeft
              ? '0 '
              : summary?.kcalLeft || summary?.daySummary?.kcalLeft}{' '}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>Consumed</Text>
          <Text>
            {!summary?.daySummary?.kcalConsumed?.toFixed(1) &&
              !summary?.kcalConsumedkcalConsumed?.toFixed(1)
              ? '0'
              : summary?.daySummary?.kcalConsumed?.toFixed(1) ||
              summary?.kcalConsumed?.toFixed(1)}{' '}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>Daily rate</Text>
          <Text>
            {!summary?.daySummary?.dailyRate &&
              !dailyRateForFist &&
              !summary?.dailyRate
              ? '0 '
              : summary?.daySummary?.dailyRate ||
              dailyRateForFist ||
              summary?.dailyRate}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>n% of normal</Text>
          <Text>
            {!summary?.daySummary?.percentsOfDailyRate &&
              !summary?.percentsOfDailyRate
              ? '0'
              : summary?.daySummary?.percentsOfDailyRate.toFixed(2) ||
              summary?.percentsOfDailyRate.toFixed(2)}{' '}
            %
          </Text>
        </ItemSummary>
      </ListSummary>

      {isTabletOrDesktop ? (
        <div>
          <TitleSecond>Food not recommended</TitleSecond>
          <BoxNotRecommendedProducts notAllowedProducts={notAllowedProducts}>
            <ListNotRecommendedProducts>
              {notAllowedProducts?.length > 0 ? (
                notAllowedProducts.map((el, index) => (
                  <li key={uuidv4()}>
                    <Text>
                      {index}.{el}
                    </Text>
                  </li>
                ))
              ) : (
                <li>
                  <Text>Your diet will be displayed here</Text>
                </li>
              )}
            </ListNotRecommendedProducts>
          </BoxNotRecommendedProducts>
        </div>
      ) : (
        <>
          {' '}
          <TitleSecond>Food not recommended</TitleSecond>
          <BoxNotRecommendedProducts>
            <ListNotRecommendedProducts>
              {notAllowedProducts?.length > 0 ? (
                notAllowedProducts.map((el, index) => (
                  <li key={uuidv4()}>
                    <Text>
                      {index}.{el}
                    </Text>
                  </li>
                ))
              ) : (
                <li>
                  <Text>Your diet will be displayed here</Text>
                </li>
              )}
            </ListNotRecommendedProducts>
          </BoxNotRecommendedProducts>
        </>
      )}
    </Container>
  );
};

export default UserSummary;
