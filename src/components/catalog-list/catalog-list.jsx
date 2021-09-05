import React from 'react';
import News from '../news/news';

function CatalogList({newsList}) {
  return(
    <ul className="catalog__list">
      {newsList.map((news, index) => (
        <News key={news.title + index} news={news} />
      ))}
    </ul>
  )
}

export default CatalogList;
