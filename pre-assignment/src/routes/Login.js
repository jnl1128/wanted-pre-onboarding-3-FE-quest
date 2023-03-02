import LoginForm from "../components/LoginForm";

const Login = ({ authenticated, login }) => {
    return <LoginForm authenticated={authenticated} login={login} />;
};
export default Login;
