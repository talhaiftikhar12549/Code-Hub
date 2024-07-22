import React from "react"
import homeMainPage from "../assets/HomeMainPage.svg"
import HomeMainPage2 from "../assets/14230944_5437681.svg"
import CardSlider from "./CardSlider"
export default function HomeMainPage() {
    return (
        <>


            <div className="flex border-b-4">
                <div className="w-[50%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={homeMainPage} className="h-[400px] w-[400px]" />
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Code Hub</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Ignite your innovation and stay ahead in the ever-evolving world of technology!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-4 h-[90vh] flex items-center justify-center" >
                <CardSlider/>
            </div>
            <div className="flex border-b-4">
                <div className="w-[50%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Code Hub</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Fuel your tech aspirations with the knowledge and tools you need to succeed!</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={HomeMainPage2} className="h-[400px] w-[400px]" />
                    </div>
                </div>

            </div>
        </>
    )

}

