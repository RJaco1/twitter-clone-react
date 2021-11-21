import React from 'react'
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";

const Home = () => {
    return (
        <div className="row">
            <div className="col-lg-3 mb-3">
                <Sidebar />
            </div>
            <div className="col-lg-5 mb-2">
                <Feed />
            </div>
            <div className="col-lg-4 mb-3">
                <Widgets />
            </div>
        </div>
    )
}

export default Home
