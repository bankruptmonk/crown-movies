import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from '../loading/loading.component';

import Search from '../search/search.component';
import CustomMasonry from '../masonry/masonry.component';
import Warning from '../warning/warning.component';

import { v4 as uuid } from 'uuid';

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('marvel')
    const [errors, setErrors] = useState();

    const handleSearch = () => {

        setLoading(true);
        setErrors([]);

        let items = [];

        axios.get(`${process.env.REACT_APP_API_URL}${term}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(response => {

                if (response.data.Response === "False") {
                    setItems([]);
                    const e = [];
                    const err = { id: 1, message: response.data.Error};
                    e.push(err);

                    setErrors(e);
                }
                else {
                    items = response.data.Search;

                    axios.get(`${process.env.REACT_APP_FUNCTION_APP}item`)
                        .then(response => {
                            items = [...items, ...response.data];
                        })
                        .catch((error) => console.error(error))
                        .finally(() => { setItems(items); setLoading(false)});
                            
                }
            })
            .catch((error) => console.error(error))
            .finally(() => { });

        
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

        const uguid = localStorage.getItem("uguid");
        if (!uguid)
            localStorage.setItem('uguid', uuid());

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
            <Warning errors={errors} />
            <CustomMasonry items={items} />
        </div>
        
    )
}

export default HomePage;