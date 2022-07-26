import React from 'react';

import './masonry-item.styles.scss';

const MasonryItem = (props) => {

    const { item } = props;

    return (
        <div>
            <div className="masonry-title">{item.Title} ({item.Year})</div>
            <img className="masonry-image"
                src={`${item.Poster}`}
                alt={`Poster for ${item.Title}`}
            />
        </div>
    )
}

export default MasonryItem;