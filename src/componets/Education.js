import React from "react";

const Education = () => {
  return (
    <div className="flex ml-10">
      <div className="m-52 mr-20 mt-5">
        <p className="font-bold text-3xl">EDUCATION</p>
      </div>
      <div>
        <div className="mt-6">
          <div className="flex">
            <p className="font-bold text-xl font-serif">
              Birsa Insitue of Technology
            </p>
            <p className="text-slate-500 ml-80">2021-2025</p>
          </div>
          <p className="mt-2 text-cyan-500"> Sindri , Dhanbad</p>
          <p className="mt-2 text-slate-700">Bachelor of Technology (B.Tech)</p>
        </div>
        <div className="mt-5">
          <div className="flex">
            <p className="font-bold text-xl font-serif">Subhas Public School</p>
            <p className="text-slate-500  ml-96">2018-2020</p>
          </div>
          <p className="mt-2 text-cyan-500"> Giridih , Jharkhand</p>
          <p className="mt-2 text-slate-700">Intermediate (PCM)</p>
        </div>
        <div className="mt-10">
          <div className="flex">
            <p className="font-bold text-xl font-serif">
              B.N.Saha Public School
            </p>
            <p className="text-slate-500  ml-[362px]">2021-2025</p>
          </div>
          <p className="mt-2 text-cyan-500"> Bulaki Road , Giridih</p>
          <p className="mt-2 text-slate-700">Matriculation</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
