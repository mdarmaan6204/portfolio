import React from "react";

const Education = () => {
  return (
    <div className="">
      <div className="md:flex ml-10 ">
      <div className="md:m-52 mr-20 mt-5">
        <p className="font-extrabold text-3xl">EDUCATION</p>
      </div>
      <div className="mx-4 md:-mx-4">
        <div className="my-6">
          <div className="flex">
            <p className="font-bold text-xl font-serif">
              Birsa Insitue of Technology
            </p>
            <p className="text-slate-500 md:ml-80 ml-20 dark:text-slate-200">2021-2025</p>
          </div>
          <p className="mt-2 text-cyan-500"> Sindri , Dhanbad</p>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Bachelor of Technology (B.Tech)</p>
        </div>
        <div className="my-10">
          <div className="flex">
            <p className="font-bold text-xl font-serif">Subhash Public School</p>
            <p className="text-slate-500 dark:text-slate-200  md:ml-[410px] ml-[70px]">2020</p>
          </div>
          <p className="mt-2 text-cyan-500"> Giridih , Jharkhand</p>
          <p className="mt-2 text-slate-700  dark:text-slate-300">Intermediate (PCM)</p>
        </div>
        <div className="my-10">
          <div className="flex">
            <p className="font-bold text-xl font-serif">
              B.N.Saha Public School
            </p>
            <p className="text-slate-500  dark:text-slate-200  md:ml-[405px] ml-16">2018</p>
          </div>
          <p className="mt-2 text-cyan-500"> Bulaki Road , Giridih</p>
          <p className="mt-2 text-slate-700  dark:text-slate-300">Matriculation</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;
