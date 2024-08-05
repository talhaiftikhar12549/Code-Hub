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
                    <p className="text-3xl py-2">Keep in touch with emerging tech trends.</p>
                    <p className="text-xl">Stay connected to the industry's latest news and insights on technological progress.</p>
                    <button
                        onClick={handleViewMoreClick}
                        className="py-[10px] px-[30px] border-[2px] border-[#FFC727] text-[#FFC727] shadow-lg font-medium my-8 active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"
                    >
                        View More
                    </button>
                </div>
                <div ref={menuSectionRef}>
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {latestNews.map((news) => (
                                <div key={news.article_id} className="border-[#FFC727] border rounded-lg p-4 shadow-lg bg-[#ffffff]">
                                    <img className={"max-h-[300px] max-w-[450px] bg-no-repeat bg-center"} height={300}  width={450} src={news.image_url || "https://placehold.co/450x300"} alt={`${news.name}`} />
                                    <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                                    <p className="text-gray-700 mb-2">{news.description}</p>
                                    <p className="text-gray-900 font-bold">{news.country[0]}</p>
                                    <button
                                        onClick={()=>{window.open(news.link)}}
                                        className="border-[2px] text-[#FFC727] border-[#FFC727] mt-4 py-2 px-4 cursor-pointer rounded-lg active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"
                                    >
                                        Learn More
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