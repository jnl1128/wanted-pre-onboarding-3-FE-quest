import SideBar from "../components/SideBar";
import Content from "../components/Content";
import TopNavigator from "../components/TopNavigator";
import React, { useState } from "react";
const Home = ({ authenticated }) => {
    const [page, setPage] = useState(null);
    return (
        <>
            <TopNavigator authenticated={authenticated} />
            <main style={{ display: "flex", height: "100vh" }}>
                <SideBar setPage={setPage} />
                <Content page={page} authenticated={authenticated} />
            </main>
        </>
    );
};
export default Home;
