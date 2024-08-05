import React from "react"
import HomeMainPage2 from "../assets/groupStudy.svg"
import homeMainPage from "../assets/boyStudy.svg"
import CardSlider from "./CardSlider"
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from '../redux/slice/counterslice'

export default function HomeMainPage(){
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()

return (
    <>


        <div className="flex border-b-4">
            <div className="w-[50%] h-[90vh] flex items-center justify-center">
                <div>
                    <img src={homeMainPage} className="h-[400px] w-[400px]"/>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center text-center">

                <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Code Hub {count}</p>
                    <div className="p-4 px-16">
                        <p className="text-xl font-[400]">Ignite your innovation and stay ahead in the ever-evolving
                            world of technology!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b-4 h-[100%] flex items-center justify-center">
            <CardSlider/>
        </div>
        <div className="flex ">
            <div className="w-[50%] flex items-center justify-center text-center">

                <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Code Hub</p>
                    <div className="p-4 px-16">
                        <p className="text-xl font-[400]">Fuel your tech aspirations with the knowledge and tools
                            you need to succeed!</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-[90vh] flex items-center justify-center">
                <div>
                    <img src={HomeMainPage2} className="h-[400px] w-[400px]"/>
                </div>
            </div>

        </div>
    </>
)

}

