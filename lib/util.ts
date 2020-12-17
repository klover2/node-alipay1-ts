'use strict';
export const getNowFormatDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let strDate: number | string = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  let hours: number | string = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes: number | string = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let seconds: number | string = date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  const currentdate = `${year}-${month}-${strDate} ${hours}:${minutes}:${seconds}`;
  return currentdate;
};
