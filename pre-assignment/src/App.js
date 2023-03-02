import "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { authLogin } from "./auth";

function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    const login = ({ name, password }) => {
        setUser(authLogin({ name, password }));
    };
    const logout = () => setUser(null);
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home authenticated={authenticated} logout={logout} />} />
                <Route exact path="/login" element={<Login authenticated={authenticated} login={login} />} />
            </Routes>
        </Router>
    );
}

export default App;
