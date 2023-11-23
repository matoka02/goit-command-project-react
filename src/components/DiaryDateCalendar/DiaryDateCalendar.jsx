import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import iconCalendar from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataCalendar } from 'redux/userData/userDataSelectors';
import { setDataCalendar } from 'redux/userData/userDataSlice';
import {
  Box,
  Button,
  Container,
  Section,
  Svg,
  TitleDate,
} from './DiaryDateCalendar.styled';
import { correctData, dateToRequest } from 'utility/auxiliaryFunctions';
import { getInfoDay } from 'redux/userData/userDataOperation';

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
      setOpenCalendar(false);
    } else {
      setOpenCalendar(true);
    }
  };
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      setOpenCalendar(false);
    }
  };

  return (
    <Container onClick={handleClose}>
      <Section>
        <div onClick={handleClick}>
          <TitleDate>
            {!dataCalendarValue ? correctData(Date.now()) : dataCalendarValue}
          </TitleDate>
        </div>
        <Button type="button" onClick={handleClick}>
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
