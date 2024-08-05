import React from "react"
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <>

            <div className=" shadow  ">
                <ul className="list-none flex justify-around text-lg h-[4rem]">
                    <li className="content-center">
                        {/*<img src={Icon} alt="Logo" className="h-14 w-14" />*/}
                        <p className="text-4xl font-black text-[#FFC727] font-serif content-center">Code Hub</p>
                    </li>
                    <li className="content-center ">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#FFC727] font-bold' : 'text-gray-700  font-bold')}
                        >
                            Home
                        </NavLink>
                    </li >

                    <li className="content-center ">
                        <NavLink
                            to="/roadmap"
                            className={({ isActive }) => (isActive ? 'text-[#FFC727] font-bold' : 'text-gray-700 font-bold')}
                        >
                            RoadMap
                        </NavLink>
                    </li>
                    <li className="content-center ">
                        <NavLink
                            to="/newsPage"
                            className={({ isActive }) => (isActive ? 'text-[#FFC727] font-bold' : 'text-gray-700 font-bold')}
                        >
                            News
                        </NavLink>
                    </li>
                    <li className="content-center ">
                        <NavLink
                            to="/contactUs"
                            className={({ isActive }) => (isActive ? 'text-[#FFC727] font-bold' : 'text-gray-700 font-bold')}
                        >
                            Contact us
                        </NavLink>
                    </li>


                </ul>
            </div>

        </>
    )
}