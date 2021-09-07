import moment from 'moment';

export const adaptIDlist = (list) => list.slice(0, 100);

export const getDiffTime = (time) => {
  const currTime = moment(new Date());
  const newsDate = moment.unix(time);

  const duration = moment.duration(currTime.diff(newsDate));

  return Math.floor(duration.asMinutes());
}

export const getSourceByUrl = (url) => {
  let source = url.replace(/^https?:\/\//i, '');
  source = source.split('');
  
  for (let i = 0; i < source.length; i++) {
    if (source[i] === '/') {
      return source.slice(0, i).join('');
    }
  }

  return source.join('');
}

export const timeAdapter = (time) => {
  if (time > 59) {
    const hours = Math.floor(time / 60);
    if (hours > 1) {
      return hours + ' hours ago';
    } else {
      return hours + ' hour ago';
    }
  } else {
    if (time < 2 && time > 1) {
      return time + ' min ago';
    } else if (time > 2) {
      return time + ' mins ago';
    } else {
      return 'just published';
    }
  }
}

export const addKidsComments = (oldComments, newComments) => {
  const result = oldComments;
  result.push(...newComments);

  return result;
}
