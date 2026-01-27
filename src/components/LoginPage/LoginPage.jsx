import React from "react";
import "../LoginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container w-screen h-screen flex items-center justify-center">
        <div className="box p-20 flex flex-col border-2 rounded-2xl">
          <h1 className="text-center mb-8 text-3xl font-semibold tracking-widest underline display-none-animation">
            LOG-IN/SIGN-UP
          </h1>

          <div className="input-box flex gap-4 display-none-animation">
            <input
              className="border-2 outline-0 rounded-xl p-3"
              type="text"
              placeholder="Email"
            />
            <input
              className="border-2 outline-0 rounded-xl p-3"
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="buttons display-none-animation">
            <div 
            onClick={(e)=>{navigate("/home")}}
            className="continue-with-google bg-teal-700 font-black tracking-wider cursor-pointer text-center w-[230px] justify-self-center mt-10 p-3 rounded-2xl">
              Continue With Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
