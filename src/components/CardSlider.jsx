import React, {useEffect} from 'react';
import '../App.css';
import axios from "axios";

const CardSlider = () => {
    const cards = [{id: 1, color: 'bg-blue-500', text: 'Card 1', image: 'https://via.placeholder.com/150'}, {
        id: 2,
        color: 'bg-green-500',
        text: 'Card 2',
        image: 'https://via.placeholder.com/150'
    }, {id: 3, color: 'bg-red-500', text: 'Card 3', image: 'https://via.placeholder.com/150'}, {
        id: 4,
        color: 'bg-yellow-500',
        text: 'Card 4',
        image: 'https://via.placeholder.com/150'
    }, {id: 5, color: 'bg-purple-500', text: 'Card 5', image: 'https://via.placeholder.com/150'}, {
        id: 6,
        color: 'bg-blue-500',
        text: 'Card 6',
        image: 'https://via.placeholder.com/150'
    }, {id: 7, color: 'bg-green-500', text: 'Card 7', image: 'https://via.placeholder.com/150'}, {
        id: 8,
        color: 'bg-red-500',
        text: 'Card 8',
        image: 'https://via.placeholder.com/150'
    }, {id: 9, color: 'bg-yellow-500', text: 'Card 9', image: 'https://via.placeholder.com/150'}, {
        id: 10,
        color: 'bg-purple-500',
        text: 'Card 10',
        image: 'https://via.placeholder.com/150'
    }, {id: 11, color: 'bg-blue-500', text: 'Card 11', image: 'https://via.placeholder.com/150'}, {
        id: 12,
        color: 'bg-green-500',
        text: 'Card 12',
        image: 'https://via.placeholder.com/150'
    }, {id: 13, color: 'bg-red-500', text: 'Card 13', image: 'https://via.placeholder.com/150'}, {
        id: 14,
        color: 'bg-yellow-500',
        text: 'Card 14',
        image: 'https://via.placeholder.com/150'
    }, {id: 15, color: 'bg-purple-500', text: 'Card 15', image: 'https://via.placeholder.com/150'}, {
        id: 16,
        color: 'bg-blue-500',
        text: 'Card 16',
        image: 'https://via.placeholder.com/150'
    }, {id: 17, color: 'bg-green-500', text: 'Card 17', image: 'https://via.placeholder.com/150'}, {
        id: 18,
        color: 'bg-red-500',
        text: 'Card 18',
        image: 'https://via.placeholder.com/150'
    }, {id: 19, color: 'bg-yellow-500', text: 'Card 19', image: 'https://via.placeholder.com/150'}, {
        id: 20,
        color: 'bg-purple-500',
        text: 'Card 20',
        image: 'https://via.placeholder.com/150'
    }, {id: 21, color: 'bg-blue-500', text: 'Card 21', image: 'https://via.placeholder.com/150'}, {
        id: 22,
        color: 'bg-green-500',
        text: 'Card 22',
        image: 'https://via.placeholder.com/150'
    }, {id: 23, color: 'bg-red-500', text: 'Card 23', image: 'https://via.placeholder.com/150'}, {
        id: 24,
        color: 'bg-yellow-500',
        text: 'Card 24',
        image: 'https://via.placeholder.com/150'
    }, {id: 25, color: 'bg-purple-500', text: 'Card 25', image: 'https://via.placeholder.com/150'},];

    const apiData = async () => {
        try {
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_491000e07b3fbeecd7423939dd410845c437d&q=computer science');
            console.log("API Data", response.data);
        } catch (e) {
            console.error("API Not Working", e);
        }
    };


    useEffect(apiData, []);

    return (<div className="relative overflow-hidden w-full h-64">
            <div className="absolute top-0 left-0 h-full flex card-slider">
                {cards.map((card, index) => (
                    <div key={index} className={`flex-shrink-0 w-64 h-full ${card.color} m-2 rounded shadow-lg`}>
                        <img src={card.image} alt={card.text} className="w-full h-32 object-cover rounded-t"/>
                        <div className="p-4">{card.text}</div>
                    </div>))}
            </div>
        </div>);
};

export default CardSlider;
