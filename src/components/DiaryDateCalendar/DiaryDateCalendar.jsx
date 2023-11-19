import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { selectDataCalendar } from 'redux/userData/userDataSelectors';
import { setDataCalendar } from 'redux/userData/userDataSlice';
import { getInfoDay } from 'redux/userData/userDataOperation';
import { correctData, dateToRequest } from 'utility/auxiliaryFunctions';
import iconCalendar from 'assets/sprite.svg';
import { Box, Button, Container, Section, Svg, TitleDate } from './DiaryDateCalendar.styled';

const DiaryDateCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const dataCalendarValue = useSelector(selectDataCalendar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataCalendarValue || dataCalendarValue !== correctData(value)) {
      dispatch(setDataCalendar(correctData(value)));
      dispatch(getInfoDay({ date: dateToRequest(value) }));
    }
  }, [dataCalendarValue, dispatch, value]);

  const handleClick = () => {
    if (openCalendar) {
      setOpenCalendar(false)
    } else {
      setOpenCalendar(true)
    };
  };

  const handleClose = (evt) => {
    if (evt.target === evt.currentTarget) setOpenCalendar(false)
  };

  return (
    <Container onClick={handleClose}>
      <Section>
        <div onClick={handleClick}>
          <TitleDate>
            {!dataCalendarValue ? correctData(Date.now()) : dataCalendarValue}
          </TitleDate>
        </div>
        <Button type='button' onClick={handleClick}>
          <Svg>
            <use href={iconCalendar + '#icon-calendar'}></use>
          </Svg>
        </Button>
      </Section>
      {openCalendar ? (
        <Box>
          <Calendar onChange={onChange} value={value} />
        </Box>
      ) : null}
    </Container>
  );
};

export default DiaryDateCalendar;