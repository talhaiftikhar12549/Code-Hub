import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {apiData} from '../redux/slice/counterslice.js';

const CardSlider = () => {
    const [abc, setAbc] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_491000e07b3fbeecd7423939dd410845c437d&q=Computer Science');

                setAbc(response.data.results);
                dispatch(apiData(response.data.results));
            } catch (e) {
                console.error('API Not Working', e);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className="relative overflow-hidden w-full h-64 my-24">
            <div className="absolute top-0 left-0 h-full flex cursor-pointer card-slider">
                {abc.map((card, index) => (
                    <div onClick={() => {
                        window.open(card.link)
                    }} key={index} className="flex-shrink-0 w-64 h-full bg-[#FFC727] m-2 rounded  shadow-lg">
                        <img
                            src={card.image_url || 'https://via.placeholder.com/150'}
                            alt={card.title || 'Card Image'}
                            className="w-full h-32 object-cover rounded-t"
                        />
                        <div className="p-4">{card.title || 'No title available'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
