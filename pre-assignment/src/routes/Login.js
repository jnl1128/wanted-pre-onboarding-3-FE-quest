import LoginForm from "../components/LoginForm";

const Login = ({ authenticated }) => {
    return <LoginForm authenticated={authenticated} />;
};
export default Login;
