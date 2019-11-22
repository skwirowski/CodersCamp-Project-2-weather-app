import { daysNames, daysNamesShort } from '../static/daysNames';

/** @param date Integer value representing date in milliseconds */
/** multiplied by 1000 because API returns date in seconds */
export const getDayOfWeek = date => {
  const dayOfWeekNumber = new Date(date * 1000).getDay();
  return daysNames[dayOfWeekNumber];
};

export const getDayOfWeekShort = date => {
  const dayOfWeekNumber = new Date(date * 1000).getDay();
  return daysNamesShort[dayOfWeekNumber];
};

export const getDayOfMonth = date => {
  const dayOfMonth = new Date(date * 1000).getDate();
  return dayOfMonth;
};

export const getMonth = date => {
  const monthNumber = new Date(date * 1000).getMonth();
  return monthNumber + 1;
};
