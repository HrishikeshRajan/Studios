export const getRunTimeInHours = (minutes) => {
  const MINUTES = minutes;

  const m = MINUTES % 60;

  const h = (MINUTES - m) / 60;

  const HHMM =
    h.toString() + 'h:' + (m < 10 ? '0' : '') + m.toString() + 'min';
  return HHMM;
};

export const extractYear = (inputDate) => {
  const dateObject = new Date(inputDate);
  const year = dateObject.getFullYear();
  return year;
};
