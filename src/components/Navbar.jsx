import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import {  Menu } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className='w-[100vw]'>
      <div className='container-fluid '>
        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <span className='navbar-brand flex items-center'>
              <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F806786569%2F1633184430263%2F1%2Foriginal.20240712-162331?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C396%2C1600%2C800&s=6128b1650e792e3efa97a87aebe9c22f" alt="" className='navbar-brand rounded-full  object-fill  w-[50px] lg:w-[80px]  ' />
              <div className=' flex-col justify-center hidden lg:flex'>
                <span className='font-bold '>Viswa Public School</span>
                <span className='small text-gray-500'>Risod</span>
              </div>
              <span className='lg:hidden block text-sm'>Viswa Public School</span>
            </span>
            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center ">
                <Link to="/" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">HOME</a>
                </Link >
                <Link to='/aboutus' className="nav-item me-3">
                  <a className="nav-link" href="#">ABOUT US</a>
                </Link>
                <Link to="/faculty" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">FACULTY</a>
                </Link >
                <Link to="/students" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">STUDENTS</a>
                </Link >
                <Link to="/events" className="nav-item me-3">
                  <a className="nav-link" > EVENTS</a>
                </Link>
                <Link to="/curriculum" className="nav-item me-3">
                  <a className="nav-link" > ACADEMICS</a>
                </Link>
                <Link to="/moto" className="nav-item me-3">
                  <a className="nav-link" href="#">MISSON & MOTO</a>
                </Link>
                <Link to="/campus" className="nav-item me-3">
                  <a className="nav-link" href="#">GALLERY</a>
                </Link>
                <li className="nav-item  me-3">
                  <button className='btn  shadow btn-primary'>
                    <Link to="/contact" className="text-light text-decoration-none">
                      <span>Addmission & Contact</span>
                    </Link>
                  </button>
                </li>
              </ul>
              <div className='d-lg-none d-block'>
                <Menu className='fw-bold fs-1 cursor-pointer ' onClick={()=>setIsOpen(true)}/>
              </div>
              <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="mt-8 space-y-4 flex flex-col gap-3">
          <Link to="/">
            <a href="#" className="text-white">
              HOME
            </a>
          </Link>
          <Link to="/aboutus">
            <a href="#" className="text-white">
            ABOUT US
            </a>
          </Link>
          <Link to="/faculty">
            <a href="#" className="text-white">
              FACULTY
            </a>
          </Link>
          <Link to="/students">
            <a href="#" className="text-white">
              STUDENTS
            </a>
          </Link>
          <Link to="/events" >
            <a href="#" className="text-white">
              EVENTS
            </a>
          </Link>
          <Link to="/curriculum" >
            <a href="#" className="text-white">
            
            ACADEMICS
            </a>
          </Link>
          <Link to="/moto">
            <a href="#" className="text-white">
              MISSION & MOTO
            </a>
          </Link>
          <Link to="/campus">
            <a href="#" className="text-white">
              GLIMPSE
            </a>
          </Link>
        
        
          <li>
            <button className="btn bg-blue-500 text-white">
              <Link to="/contact" className="text-white">
                <span>CONTACT US</span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue="en">
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="mr">मराठी</option>
      </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
