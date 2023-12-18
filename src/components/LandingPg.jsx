import React from 'react'
import StudentFrontImage from '../assets/Student.png'


function LandingPg() {
  return (
    <section className="text-gray-600 body-font bg-background">
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p className="mb-2 text-2xl font-bold leading-relaxed">Descover the beauty of the topics</p>

      {/* <h1 className="title-font sm:text-4xl text-7xl  mb-20 font-black">Tropical Destination
      </h1> */}
            <div className="text-7xl mb-3 font-black">Tropical Destination </div>

      <div className="text-7xl mb-12 font-medium">For Student</div>              

      <p className="mb-5 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla similique odit, facilis mollitia officiis.</p>
      
      <button className='bg-Button text-Text rounded-full py-3 px-8 m-2'>SIGN UP</button>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-96 mb-20" alt="hero" src={StudentFrontImage}/>
    </div>
  </div>
</section>
  )
}

export default LandingPg