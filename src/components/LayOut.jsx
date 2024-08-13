import NavBar from "./NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {apiData} from "../redux/slice/counterslice.js"

export default function Layout() {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_491000e07b3fbeecd7423939dd410845c437d&q=Computer Science');
                dispatch(apiData(response.data.results));
                console.log("Data dispatched from App");
            } catch (e) {
                console.error('API Not Working', e);
            }
        };

        fetchData();
    });


    return (
        <div className="flex flex-col justify-between h-[100vh]">
            <NavBar/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}
