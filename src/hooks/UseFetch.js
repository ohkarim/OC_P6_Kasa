import { useState, useEffect } from 'react';

/**
 * A custom hook that fetches data from a given URL and returns the fetched data and loading state
 * @param {string} url The URL to fetch the data from, "./db/logements.json" in this case
 * @returns {Array} An array containing the fetched data and loading state
 */

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [url]);

    return [data, loading];
};

export default useFetch;
