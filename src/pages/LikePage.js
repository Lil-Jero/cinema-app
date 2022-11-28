import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';

const LikePage = () => {
    const [listData, setListData] = useState([])

    useEffect(() => {
        let movieArray = []
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=20cc8ef3ae472ba6bb427680af879af3`)
                .then((res) => setListData((listData) => [...listData, res.data]))

        }
    }, [])


    return (
        <div className='user-list-page'>
            <Header />
            <h2>Vos coups de coeur <span>💖</span></h2>
            <div className="result">
                {listData.length > 0 ? (listData.map((movie) => <Card movie={movie} key={movie.id} />)) : (<h2>Aucun coup de coeur pour le moment</h2>)}
            </div>
        </div >
    );
};

export default LikePage;