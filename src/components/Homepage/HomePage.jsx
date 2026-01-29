import React, { useState } from "react";
import '../Homepage/Homepage.css'
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [jobRolesArray, setJobRolesArray] = useState([
    {
      role: "FrontEnd Developer",
      pageLink: "frontEndPage",
    },
    {
      role: "Backend Developer",
      pageLink: "backEndPage",
    },
    {
      role: "Full Stack Developer",
      pageLink: "fullstackPage",
    },
    {
      role: "AWS Developer",
      pageLink: "awsPage",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="">
      <nav className="absolute top-1 w-screen h-[70px] flex justify-between gap-2 mt-2">
        <NavBar></NavBar>
      </nav>
      <div className="container w-screen h-screen flex justify-center items-center">

        <div className="practice-box display-none-animation">
          <div className="text-box text-center mb-5">
            <h1 className="text-4xl font-black tracking-widest mb-2">Practice For Your Role</h1>
            <h3 className="text-xl tracking-wider">
              Choose Form Specialized Track Designed For Different Tech Roles
            </h3>
          </div>

          <div className="box justify-self-center roleBoxes flex items-center justify-center gap-4 border-2 p-5 rounded-2xl">
            {jobRolesArray.map((item, index) => {
              return (
                <>
                  <div onClick={(e)=>{
                    e.preventDefault();
                    navigate(`/questions/${item.pageLink}`)
                  }} key={index} className="role-box box cursor-pointer box border w-[270px] h-[50px] rounded-2xl text-center flex justify-center items-center">
                    <h1 className="font-bold text-xl ">{item.role}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
