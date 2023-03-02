import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ authenticated, login }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        try {
            login({ name, password });
            navigate("/");
        } catch (e) {
            alert("로그인 실패");
            setName("");
            setPassword("");
        }
    };

    return (
        <div style={{ width: "350px", height: "200px", margin: "300px auto" }}>
            <div>
                <p
                    style={{
                        fontSize: "100px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Login
                </p>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "10" }}>
                        <input
                            style={{ display: "block", width: "90%", padding: "10px", margin: "5px 0px" }}
                            value={name}
                            onChange={({ target: { value } }) => setName(value)}
                            type="text"
                            placeholder="user name"
                        />
                        <input
                            style={{ display: "block", width: "90%", padding: "10px", margin: "5px 0px" }}
                            value={password}
                            onChange={({ target: { value } }) => setPassword(value)}
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <button style={{ flex: "1", margin: "5px 0px" }} onClick={handleClick}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
