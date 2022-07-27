import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from '../loading/loading.component';

import Search from '../search/search.component';
import CustomMasonry from '../masonry/masonry.component';

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('marvel')

    const handleSearch = () => {

        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}${term}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(response => setItems(response.data.Search))
            .catch((error) => console.error(error))
            .finally(() => { setLoading(false)});
    }

    const handleSearchClick = () => {
        handleSearch();
    }

    const handleSearchKeyUp = (event) => {
        event.preventDefault();

        if (event.keyCode === 13) {
            handleSearch();
        }
    }

    useEffect(() => {

        setPage(1);
        handleSearch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading && <Loading />}
            <h1>Home</h1>
            <Search handleEnter={handleSearchKeyUp} handleChange={(e) => setTerm(e.target.value)} 
                handleClick={handleSearchClick} value={term} />
            <CustomMasonry items={items} />
        </div>
        
    )
}

export default HomePage;