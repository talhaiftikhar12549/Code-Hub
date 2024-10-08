import img3 from "../assets/girlJs.svg"
import img2 from "../assets/girlPhp.svg"
import img1 from "../assets/girlPopUp.svg"
import img4 from "../assets/BoyBag.svg"
import img5 from "../assets/boySync.svg"

export default function RoadMap() {
    return (
        <>

            {/*Introduction to Computer Science Start*/}
            <div className="flex border-b-4">
                <div className="w-[45%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={img4} className="h-[400px] w-[400px]"/>
                    </div>
                </div>
                <div className="w-[55%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">CS50: Introduction to Computer
                        Science</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">An introduction to the intellectual enterprises of
                                computer science and the art of programming in an online course from Harvard.</p>
                            <button onClick={() => {
                                window.open("https://www.harvardonline.harvard.edu/course/cs50-introduction-computer-science")
                            }}
                                    className={"my-6 py-2 px-6 rounded-xl cursor-pointer border text-xl bg-[#FFC727] text-white font-bold active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"}>Enroll
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Introduction to Computer Science End*/}


            {/*Front End Software Engineering Start*/}
            <div className="flex border-b-4">

                <div className="w-[55%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Meta Front-End Developer</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Launch your career as a front-end developer. Build
                                job-ready skills for an in-demand career and earn a credential from Meta.</p>
                            <button onClick={() => {
                                window.open("https://www.coursera.org/professional-certificates/meta-front-end-developer")
                            }}
                                    className={"my-6 py-2 px-6 rounded-xl cursor-pointer border text-xl bg-[#FFC727] text-white font-bold active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"}>Enroll
                                Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={img3} className="h-[400px] w-[400px]"/>
                    </div>
                </div>
            </div>
            {/*Front End Software Engineering End*/}


            {/*Back End Software Engineering Start*/}
            <div className="flex border-b-4">
                <div className="w-[45%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={img2} className="h-[400px] w-[400px]"/>
                    </div>
                </div>
                <div className="w-[55%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Meta Back-End Developer</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Launch your career as a back-end developer. Build
                                job-ready skills for an in-demand career and earn a credential from Meta.</p>
                            <button onClick={() => {
                                window.open("https://www.coursera.org/professional-certificates/meta-back-end-developer")
                            }}
                                    className={"my-6 py-2 px-6 rounded-xl cursor-pointer border text-xl bg-[#FFC727] text-white font-bold active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"}>Enroll
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Back End Software Engineering End*/}
            {/* Python Developer Start*/}
            <div className="flex border-b-4">

                <div className="w-[55%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Learn Python 3</p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Python is a general-purpose, versatile, and powerful
                                programming language. It’s a great first language because Python code is concise and
                                easy to read</p>
                            <button onClick={() => {
                                window.open("https://www.codecademy.com/catalog/language/python")
                            }}
                                    className={"my-6 py-2 px-6 rounded-xl cursor-pointer border text-xl bg-[#FFC727] text-white font-bold active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"}>Enroll
                                Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={img5} className="h-[400px] w-[400px]"/>
                    </div>
                </div>
            </div>
            {/* Python Developer Ends*/}
            {/* Data Science Start   */}
            <div className="flex ">
                <div className="w-[45%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={img1} className="h-[400px] w-[400px]"/>
                    </div>
                </div>
                <div className="w-[55%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#FFC727] font-serif ">Google Data Analytics </p>
                        <div className="p-4 px-16">
                            <p className="text-xl font-[400]">Get on the fast track to a career in Data Analytics. In this certificate program, you will learn in-demand skills at your own pace.</p>
                            <button onClick={() => {
                                window.open("https://www.coursera.org/professional-certificates/google-data-analytics")
                            }}
                                    className={"my-6 py-2 px-6 rounded-xl cursor-pointer border text-xl bg-[#FFC727] text-white font-bold active:bg-[#FFC727] active:font-medium active:shadow-lg active:text-white"}>Enroll
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Data Science Ends  */}


        </>
    )
}