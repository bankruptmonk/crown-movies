import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Loading from '../loading/loading.component';

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState('marvel')

    useEffect(() => {

        if (loading === false) {
            setLoading(true);

            axios.get(`${process.env.REACT_APP_API_URL}${term}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
                .then(response => {setItems(response.data.Search); console.log(response)})
                .catch((error) => console.error(error))
                .finally(() => { setLoading(false)});
        }
        
        
    }, [page]);

    return (
        <div>
            {loading && <Loading />}
            <h1>Home</h1>
        </div>
        
    )
}

export default HomePage;