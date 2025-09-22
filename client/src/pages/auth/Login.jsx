import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.token);
      navigate("/")
      console.log(res);
    } catch (err) {
      console.error(err);

      if (err.response) {
        if (err.response.status === 404) {
          toast.error("No user found with this username", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: "bounce",
          });
        } else if (err.response.status === 401) {
          toast.error("Incorrect password", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: "bounce",
          });
        } else {
          toast.error("Something went wrong, please try again later", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: "bounce",
          });
        }
      } else {
        toast.error("Network error or server is down", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: "bounce",
        });
      }
    }
  };

  return (
    <div
      className="flex pl-16 justify-start items-center h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
    >
      <div className="w-4/6 h-5/6 bg-white drop-shadow-lg rounded-2xl flex justify-between items-center">
        <div className="w-1/2 h-full overflow-hidden rounded-bl-2xl rounded-tl-2xl">
          <img src="/images/login-img.jpg" alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="h-full w-1/2 flex flex-col p-10 py-12"
        >
          <h2 className="text-dark-100 font-bold text-2xl">Welcome back,</h2>
          <p className="text-dark-200">Sign in to your account</p>

          <div className="flex flex-col gap-10 mt-12 mb-12">
            <Input
              label={"Username"}
              icon={"username"}
              type={"text"}
              value={username}
              inputChange={setUsername}
            />
            <Input
              label={"Password"}
              icon={"password"}
              type={"password"}
              value={password}
              inputChange={setPassword}
            />
          </div>

          <Button label={"Sign in"} />
          <p className="mt-10 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-accent-200 font-bold">
              Signup
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
