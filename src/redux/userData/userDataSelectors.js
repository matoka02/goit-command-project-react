export const selectOpenModal = state => state.userData.modalOpen;
export const selectModalDataDailyRate = state =>
  state.userData.modalData.dailyRate;
export const selectModalDataNotAllowedProducts = state =>
  state.userData.modalData.notAllowedProducts;
export const selectDailyRateForFist = state =>
  state.userData.user?.userData.dailyRate;
export const selectNotAllowedProducts = state =>
  state.userData.user?.userData.notAllowedProducts;
export const selectDataCalendar = state => state.userData.data;
export const selectDailyRate = state => state.userData.userSummary?.dailyRate;
export const selectDateNow = state =>
  state.userData.userSummary?.daySummary?.date;
export const selectEatenProducts = state =>
  state.userData.userSummary?.eatenProducts;
export const selectDaySummary = state => state.userData.userSummary?.daySummary;
export const selectDate = state => state.userData.userSummary?.date;
export const selectSummary = state => state.userData.userSummary;
export const selectDayId = state => state.userData.userSummary?.day?.id;
export const selectDayIdSecond = state => state.userData.userSummary?.id;
