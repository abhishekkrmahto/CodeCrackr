import React from "react";
import "../LandingPage/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container flex justify-center items-center w-screen h-screen text-white">
        <div className="insideBox border-4 rounded-2xl p-15 justify-center items-center flex flex-col gap-10">
          <div className="top1 rounded-2xl cursor-pointer border p-4 font-bold">
            <h1>AI Powered Interview Preparation</h1>
          </div>

          <div className="top2 p-2 flex flex-col gap-5">
            <h1 className="top2-text text-5xl tracking-widest font-extrabold">
              ACE YOUR NEXT
            </h1>
            <h1 className="top2-text text-5xl tracking-widest font-extrabold">
              TECH INTERVIEW
            </h1>
          </div>

          <div className="top3  p-3">
            <p className="w-[600px] text-center text-xl ">
              Practice with role specific questions,get ai powered feedback and
              result and,track your progress prepare smarter,not harder
            </p>
          </div>

          <div
            className="top4 rounded-2xl font-bold cursor-pointer bg-teal-700"
          >
            <div className="get-started-with-google-button p-3" onClick={(e)=>{navigate('/loginPage')}}>
              <h1>Get Started</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
