import moment from 'moment';

export const adaptIDList = (list) => list.slice(0, 100);

export const getDiffTime = (time) => {
  const currTime = moment(new Date());
  const newsDate = moment.unix(time);

  const duration = moment.duration(currTime.diff(newsDate));

  return Math.floor(duration.asMinutes());
}

export const getURLSource = (url) => {
  let source = url.replace(/^https?:\/\//i, '');
  source = source.split('');
  
  for (let i = 0; i < source.length; i++) {
    if (source[i] === '/') {
      return source.slice(0, i).join('');
    }
  }

  return source.join('');
}
