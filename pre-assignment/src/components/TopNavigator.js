import { Link } from "react-router-dom";
const TopNavigator = ({ authenticated }) => {
    return (
        <>
            <header style={{ display: "flex", padding: "20px 40px" }}>
                <Link to="/" style={{ flex: "11", fontWeight: "bold", color: "black", textDecoration: "none" }}>
                    Wanted Pre-onboarding course
                </Link>
                {!authenticated ? (
                    <Link to="/login" style={{ flex: "1", textDecoration: "none", color: "black" }}>
                        로그인
                    </Link>
                ) : (
                    <p href="#" style={{ flex: "1", textDecoration: "none", color: "black" }}>
                        로그아웃
                    </p>
                )}
            </header>
            <hr style={{ margin: "0" }} />
        </>
    );
};
export default TopNavigator;
