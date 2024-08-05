// import React, {useEffect, useState} from 'react';
// import '../App.css';
// import axios from 'axios';
// import {useSelector, useDispatch} from 'react-redux'
// import {decrement, increment, apiData} from '../redux/slice/counterslice.js'
//
// const CardSlider = () => {
//     const [abc,setAbc] = useState()
//
//     const Data = useSelector((state) => state.counter.APIData)
//     const dispatch = useDispatch()
//     console.log("Data Coming from Backlog in Cards Slider", Data)
//     const cards = [
//
//         {id: 1, color: 'bg-blue-500', text: 'Card 1', image: 'https://via.placeholder.com/150'},
//         {id: 2, color: 'bg-green-500', text: 'Card 2', image: 'https://via.placeholder.com/150'},
//         {id: 3, color: 'bg-red-500', text: 'Card 3', image: 'https://via.placeholder.com/150'},
//         {id: 4, color: 'bg-yellow-500', text: 'Card 4', image: 'https://via.placeholder.com/150'},
//         {id: 5, color: 'bg-purple-500', text: 'Card 5', image: 'https://via.placeholder.com/150'},
//         {id: 6, color: 'bg-sky-500', text: 'Card 6', image: 'https://via.placeholder.com/150'},
//         {id: 7, color: 'bg-lime-500', text: 'Card 7', image: 'https://via.placeholder.com/150'},
//         {id: 8, color: 'bg-red-500', text: 'Card 8', image: 'https://via.placeholder.com/150'},
//         {id: 9, color: 'bg-yellow-500', text: 'Card 9', image: 'https://via.placeholder.com/150'},
//         {id: 10, color: 'bg-purple-500', text: 'Card 10', image: 'https://via.placeholder.com/150'},
//
//     ];
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_491000e07b3fbeecd7423939dd410845c437d&q=computer science');
//                 console.log('API Data', response.data.results);
//                 setAbc(response.data.results)
//                 debugger
//                 dispatch(apiData(response.data.results))
//
//             } catch (e) {
//                 console.error('API Not Working', e);
//             }
//         };
//
//         fetchData();
//     }, []);
//     console.log("abc bhari walla", abc)
//     return (<div className="relative overflow-hidden w-full h-64">
//         <div className="absolute top-0 left-0 h-full flex card-slider">
//
//
//
//             {abc.map((card, index) => (
//                 <div key={card.id} className={`flex-shrink-0 w-64 h-full ${card.color} m-2 rounded shadow-lg`}>
//                     <img src={card.image} alt={card.text} className="w-full h-32 object-cover rounded-t"/>
//                     <div className="p-4">{card.text}</div>
//                 </div>))}
//
//         </div>
//     </div>);
// };
//
// export default CardSlider;



import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { apiData } from '../redux/slice/counterslice.js';

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
        <div className="relative overflow-hidden w-full h-64">
            <div className="absolute top-0 left-0 h-full flex card-slider">
                {abc.map((card, index) => (
                    <div onClick={()=>{window.open(card.link)}} key={index} className="flex-shrink-0 w-64 h-full bg-blue-500 m-2 rounded shadow-lg">
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
