import React,{useRef} from "react"
import { useSelector, useDispatch } from 'react-redux'
export default function NewsPage ()
{
    const latestNews = useSelector((state) => state.counter.APIData)
    const menuSectionRef = useRef(null);
console.log("Data IN news page",latestNews)
    const handleViewMoreClick = () => {
        if (menuSectionRef.current) {
            menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <>
            <div>
                <div className="flex flex-col items-center pt-8">
                    <p className="text-3xl py-2">Our Top Menu</p>
                    <p className="text-xl">Click on any item below to add it to your cart</p>
                    <button
                        onClick={handleViewMoreClick}
                        className="py-[10px] px-[30px] border-[2px] border-[#98c3ed] text-[#98c3ed] shadow-lg font-medium my-8 active:bg-[#98c3ed] active:font-medium active:shadow-lg active:text-[#ffffff]"
                    >
                        View More
                    </button>
                </div>
                <div ref={menuSectionRef}>
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {latestNews.map((news) => (
                                <div key={news.article_id} className="border rounded-lg p-4 shadow-lg bg-[#E0EBFD]">
                                    <img src={news.image_url} alt={`${news.name}`} />
                                    <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                                    <p className="text-gray-700 mb-2">{news.description}</p>
                                    <p className="text-gray-900 font-bold">${news.language}</p>
                                    <button
                                        // onClick={() => {
                                        //     dispatch(addtocart({ id: food.id, name: food.name, desc: food.description, price: food.price }));
                                        // }}
                                        className="mt-4 py-2 px-4 bg-[#98c3ed] text-white rounded-lg hover:bg-blue-600 active:bg-[#98c3ed]"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}