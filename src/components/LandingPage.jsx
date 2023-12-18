import React from 'react'
// import StudentFront from './images/StudentFront'
import StudentFrontImage from '../assets/Student.png'
function LandingPage() {
  return (
    <section className='w-full flex'>
        <div className="bg-Button min-h-5xl flex flex-col w-full flex-start">
            <div className="text-bold text-2xl">amet consectetur, adipisicing elit. Tenetur, totam.</div>
            <div className="text-7xl font-black">Tropical Destination </div>
            <div className="text-7xl font-medium">For Student</div>              
        </div>

        <div className="bg-Surface min-h-5xl w-full flex  text-center">
            <img className='h-96 flex flex-1 ' src={StudentFrontImage} alt="" />
        </div>
    </section>
  )
}

export default LandingPage