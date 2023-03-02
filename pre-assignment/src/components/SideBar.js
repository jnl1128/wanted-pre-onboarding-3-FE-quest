import React, { useState } from "react";
const SideBar = ({ setPage }) => {
    const pageArr = ["A", "B", "C"];
    const [active, setActive] = useState(null);
    const handleActive = e => {
        const target = e.target;
        if (active) {
            active.classList.remove("active");
        }
        setActive(target);
        target.classList.add("active");
        setPage(target.dataset.pid);
    };

    return (
        <div style={{ borderRight: "1px solid black", flex: "1" }}>
            <ul>
                {pageArr.map(elem => (
                    <li style={{ padding: "20px", textAlign: "center", fontSize: "20px", cursor: "pointer" }} key={elem} data-pid={elem} onClick={handleActive}>
                        Page {elem}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SideBar;
