import React from "react";
import FirstCardImg from "../assets/card-image-1.png";
import Card from "./Card";

function TropicalAdventure() {
  return (
    <section className=" w-full min-h-2/4 flex justify-evenly">
      <div className=" w-full">
        <div className="flex flex-col max-w-2/4 ">
          <div className="bg-Surface bg-opacity-10 m-4 rounded-lg p-5 ">
            <div className="flex  justify-evenly">
              <img className="w-20 rounded-full" src={FirstCardImg} alt="" />
              <div className="flex flex-col text-left mx-10 py-2">
                <h2 className="font-bold">Hello world !</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="bg-Surface bg-opacity-10  m-4 rounded-lg p-5">
            <div className="flex justify-evenly">
              <img className="w-20 rounded-full" src={FirstCardImg} alt="" />
              <div className="flex flex-col text-left mx-10 px-2">
                <h2 className="font-bold">Hello world !</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bg-Surface bg-opacity-10 p-5 m-4 rounded-lg ">
            <div className="flex justify-evenly">
              <img className="w-20 rounded-full" src={FirstCardImg} alt="" />
              <div className="flex flex-col text-left mx-10 px-2">
                <h2 className="font-bold">Hello world !</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>

    <div className=" w-full">
    <div className="  flex flex-col w-full text-left mx-10">
            
            <div className="text-5xl font-black">Tropical Destination </div>
            <div className="text-4xl font-medium py-4">For Student</div>              
            <p className="font-medium">Student Tropical Vacation: Relax and Recharge</p>
            <ul className="py-3">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <button className="bg-Button px-10 text-Text py-3 my-6 rounded-full">Button</button>
            </ul>
            
        </div>
        
    </div>
    </section>
  );
}

export default TropicalAdventure;
