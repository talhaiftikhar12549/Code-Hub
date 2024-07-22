import React, {useEffect} from 'react';
import '../App.css';
import axios from "axios";
const CardSlider = () => {
    const cards = [
        { id: 1, color: 'bg-blue-500', text: 'Card 1', image: 'https://via.placeholder.com/150' },
        { id: 2, color: 'bg-green-500', text: 'Card 2', image: 'https://via.placeholder.com/150' },
        { id: 3, color: 'bg-red-500', text: 'Card 3', image: 'https://via.placeholder.com/150' },
        { id: 4, color: 'bg-yellow-500', text: 'Card 4', image: 'https://via.placeholder.com/150' },
        { id: 5, color: 'bg-purple-500', text: 'Card 5', image: 'https://via.placeholder.com/150' }
    ];
const apiData = async ()=>
{
    try{
const data = await axios.get('https://newsdata.io/api/1/news?apikey=pub_491000e07b3fbeecd7423939dd410845c437d&q=computer science')
        console.log("API Data",data)
    }
    catch
    (e)
    {
      console.log("API Not Working")
    }
}

    useEffect(    apiData ,[]);
    return (
        <div className="relative overflow-hidden w-full h-64">
            <div className="absolute top-0 left-0 h-full flex animate-slide-left">
                {cards.concat(cards).map(card => (
                    <div key={card.id} className={`flex-shrink-0 w-64 h-full ${card.color} m-2 rounded shadow-lg`}>
                        <img src={card.image} alt={card.text} className="w-full h-32 object-cover rounded-t" />
                        <div className="p-4">{card.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;