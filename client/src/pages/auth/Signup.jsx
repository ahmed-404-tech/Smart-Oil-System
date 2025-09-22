import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";


function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await register(username, password);
      localStorage.setItem("token", res.token);
      navigate("/");
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
        <form onSubmit={handleSignup} className="h-full w-1/2 flex flex-col p-10 py-14">
          <h2 className="text-dark-100 font-bold text-2xl">Register</h2>
          <p className="text-dark-200">Create your account</p>

          <div className="flex flex-col gap-10 mt-14 mb-14">
            <Input label={"Username"} icon={"username"} type={"text"} inputChange={setUsername} value={username}/>
            <Input label={"Password"} icon={"password"} type={"password"} inputChange={setPassword} value={password}/>
          </div>

          <Button label={"Sign up"} />

          <p className="mt-10 text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-accent-200 font-bold">
              Login
            </Link>
          </p>
        </form>
        <div className="w-1/2 h-full overflow-hidden rounded-br-2xl rounded-tr-2xl">
          <img src="/images/signup-img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
