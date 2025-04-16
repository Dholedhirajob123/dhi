import React from 'react'


function Timer() {
 
  return (
    <div className='mt-3 mb-3 p-3 lg:p-5  text-light bg-gradient-to-br from-indigo-800 to-gray-800'>

      <div className='container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center'>
        <div className='flex flex-col lg:gap-5 gap-3 '>
          <span className='text-small  lg:text-2xl '>
            Events Date  27 & 28 March 2024
          </span>
          <span className='text-lg hidden lg:block  lg:text-4xl lg:w-[400px] w-auto font-bold'>
          Viswa Public School <br />
          Annual Science Exhibition
          </span>
        </div>
        {/* <div className='flex justify-start items-center'>
            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F806786569%2F1633184430263%2F1%2Foriginal.20240712-162331?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C396%2C1600%2C800&s=6128b1650e792e3efa97a87aebe9c22f" alt="logo" className='w-[300px]'/>
        </div> */}
      </div>

    </div>
  )
}

export default Timer
