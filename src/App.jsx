import './App.css';
import NavBar from "./components/NavBar";
import HomeMainPage from "./components/HomeMainPage";
import { useEffect } from "react";
import axios from "axios";
import { apiData } from "./redux/slice/counterslice.js";
import { useDispatch } from 'react-redux';

function App() {
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
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <HomeMainPage />
        </>
    );
}

export default App;
