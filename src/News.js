import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    const [data, setData] = useState([]);

    console.log(process.env.REACT_APP_NEWS_API_KEY);
   



    useEffect(() => {

        const url = `https://gnews.io/api/v4/top-headlines?&token=${process.env.REACT_APP_NEWS_API_KEY}&lang=en`;
        console.log(url);
        
        axios
            .get(url)
            .then((response) => {
                setData(response.data.articles);
            })
            .catch((error) => {
                console.error('Error fetching news', error);
            });
    }, []);

    return (
        <div>
            {data.map((item, i) => (
                <div key={i}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.url}>Read more...</a>
                </div>
            ))}
        </div>
    );
};

export default News;
