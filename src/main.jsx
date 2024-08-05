import React, {Suspense} from 'react'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './redux/store/store'
import {Provider} from 'react-redux'
import Layout from "./components/LayOut.jsx";
import HomeMainPage from "./components/HomeMainPage.jsx";
import RoadMap from "./components/RoadMap.jsx";
import NewsPage from "./components/NewsPage.jsx";
import ContactUs from "./components/ContactUs.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true, // This makes it the default child route for "/"
                    element: <HomeMainPage/>
                },
                {
                    path: "roadmap",
                    element: (<Suspense fallback={<div>Loading...</div>}>
                        <RoadMap/>
                    </Suspense>)
                },
                {
                    path: "newsPage",
                    element: (<Suspense fallback={<div>Loading...</div>}>
                        <NewsPage/>
                    </Suspense>)
                },
                {
                    path: "contactUs",
                    element: (<Suspense fallback={<div>Loading...</div>}>
                        <ContactUs/>
                    </Suspense>)
                },
            ]
        }
    ])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)
