import moment from 'moment';

export const adaptIDList = (list) => list.slice(0, 100);

export const getDiffTime = (time) => {
  const currTime = moment(new Date());
  const newsDate = moment.unix(time);

  const duration = moment.duration(currTime.diff(newsDate));
  const minutes = Math.floor(duration.asMinutes());

  return minutes;
}
