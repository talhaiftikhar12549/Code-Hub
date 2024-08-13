import '../App.css';
import {useSelector} from 'react-redux';

const CardSlider = () => {
    const abc = useSelector((state) => state.counter.APIData)


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