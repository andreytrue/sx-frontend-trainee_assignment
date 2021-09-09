import React from 'react';
import Story from '../story/story';

function StoriesList({storiesList}) {
  return(
    <ul className="catalog__list">
      {storiesList.map((story, index) => {
        if (story !== null) {
          return <Story key={story.title + index} story={story} />
        }

        return '';
      })}
    </ul>
  )
}

export default StoriesList;
