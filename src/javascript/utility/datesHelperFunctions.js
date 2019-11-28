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

export const getDate = () => {
  const Today = new Date();
  const Month = Today.getMonth() + 1;
  const Day = Today.getDate();
  let Year = Today.getFullYear();
  if (Year <= 99) {
    Year += 1900;
  }
  return `${Day}-${Month}-${Year}`;
};

export const getTime = unix => {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const newformat = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours}:${minutes}${newformat}`;
  return formattedTime;
};

export const daysToNextYear = () => {
  const today = new Date();
  const nextYear = new Date(today.getFullYear() + 1, 0, 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const days = `${Math.ceil((nextYear.getTime() - today.getTime()) / oneDay)} days left until next year!`;
  return days;
}