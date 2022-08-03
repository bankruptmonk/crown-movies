import React, { useState } from 'react';
import Loading from '../loading/loading.component';

import './masonry-item.styles.scss';

import axios from 'axios';

const MasonryItem = (props) => {
    const [deleting, setDeleting] = useState(false);

    const { item } = props;
    const uguid = localStorage.getItem("uguid");

    const handleDelete = () => {
        setDeleting(true);
        const config = {
            headers: {
                user: localStorage.getItem('uguid')
            }
        };
        axios.delete(`${process.env.REACT_APP_FUNCTION_APP}item/${item._id}`, config)
            .then(response => {
                if (response.status === 200) {
                    window.location.reload();
                } else {
                    setDeleting(false)
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => { });
    }

    return (
        <div>
            { deleting && <Loading /> }
            <div className="masonry-title">{item.Title} ({item.Year})</div>
            <img className="masonry-image"
                src={`${item.Poster}`}
                alt={`Poster for ${item.Title}`}
                loading="lazy"
            />
            { item._owner && item._owner === uguid && (
                <div className="masonry-delete">
                    <button className="ontario-button ontario-button--tertiary button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default MasonryItem;