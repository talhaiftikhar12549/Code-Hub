import React from "react"

export default function NavBar() {
    return (
        <>
            <nav>
                <div className={"flex justify-around border shadow py-4"}>
                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Code Hub</p></div>
                    <div className={"text-2xl bold"}>Home</div>
                    <div className={"text-2xl bold"}>Road Map</div>
                    <div className={"text-2xl bold"}>News</div>
                    <div className={"text-2xl bold"}>Contact Us</div>
                </div>
            </nav>
        </>
    )
}