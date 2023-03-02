import "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home authenticated={authenticated} />} />
                <Route exact path="/login" element={<Login authenticated={authenticated} />} />
            </Routes>
        </Router>
    );
}

export default App;
