import React from 'react'

function Header() {
  return (
   
    <header className='w-full bg-gray-500 flex bg-Surface text-Text rounded'>
      <div className="flex flex-col flex-1">
        <ul className='flex p-4'>
          <li className='p-2 m-2'><a href="#">Home</a></li>
          <li className='p-2 m-2'><a href="#">About</a></li>
          <li className='p-2 m-2'><a href="#">Schedules</a></li>
          <li className='p-2 m-2'><a href="#">Membership</a></li>
          <li className='p-2 m-2'><a href="#">Pricing</a></li>
        </ul>
      </div>

      <div className="flex flex-end flex-col">
        <ul className='flex p-4 '>
          <li className='p-2 m-2 text-opacity-10'><a href="#">Offers</a></li>
          <li className='py-2 px-5 m-2 bg-Button rounded-full text-Text'><a href="#">Courses</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header