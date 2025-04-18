import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg   d-flex justify-content-center align-items-center  bg-center bg-no-repeat "
                style={{
                    backgroundImage: "url('https://wehco.media.clients.ellingtoncms.com/img/photos/2015/09/09/72682081_Springdale-High-File_t800.jpg')",
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
                <div className=' container '>
                    <div className='w-100 h-100 grid  grid-cols-1 lg:grid-cols-2 '>

                    <div className=" flex flex-col   justify-center">


                        <h1 className='fw-bold text-2xl lg:text-4xl  mb-4'>Viswa Public School</h1>
                        <p className='text-lg lg:text-2xl '>  Viswa Public School offers a rich and diverse educational experience that goes beyond the classroom. Our campus is designed to support a wide range of activities and interests, ensuring that every student has the opportunity to explore and excel.

                        </p>
                        <span>

                        <Link to="/college" className='btn shadow-lg  mt-5 fw-bold rounded-0 btn-primary'>Go Explore <ArrowRightAltIcon /> </Link>
                        </span>
                    </div>

                    <div className="hidden lg:flex justify-center">

                        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                    </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3
