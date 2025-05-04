import React, { useEffect, useState } from 'react';
import Icon from "./images/favicon.png";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFileWord } from "react-icons/fa"; // Import icon Word
import PopupComponent from "./helpers/PopupComponent.jsx";

const Navbar = ({ checkShowPopup, setCheckShowPopup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const { innerWidth: width } = window;

  useEffect(() => {
    if (checkShowPopup) {
      setShowPopup(true);
      setCheckShowPopup(false);
    }
  }, [checkShowPopup]);

  return (
    <div className="font-poppins">
      <nav className="bg-KCTBS-white backdrop-blur fixed px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 shadow-md">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-4 pb-2 pt-2 text-black">
          <Link to="/" className="flex items-start">
            <img
              src={Logo}
              alt="icon"
              className="hidden sm:block sm:w-[100px] sm:-h-[100px] -mt-1"
            />
          </Link>
          {width > 800 && (
            <div className="flex">
              <ul className="sm:flex justify-center hidden uppercase">
                <li
                  className={
                    window.location.pathname === '/'
                      ? 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer border-b-2 border-KCTBS-blue'
                      : 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer'
                  }
                >
                  <Link to="/">Trang chủ</Link>
                </li>
                <li
                  className={
                    window.location.pathname === '/vieclamnoibat' ||
                    window.location.pathname.includes('chitietcongviec')
                      ? 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer border-b-2 border-KCTBS-blue'
                      : 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer'
                  }
                >
                  <Link to="/vieclamnoibat">Dự án</Link>
                </li>
                <li
                  className={
                    window.location.pathname === '/lienhe'
                      ? 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer border-b-2 border-KCTBS-blue'
                      : 'p-2 mr-3 text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold cursor-pointer'
                  }
                >
                  <Link to="/lienhe">Liên hệ</Link>
                </li>
              </ul>
            </div>
          )}

<div className="flex items-center space-x-2">
  {/* Phần nút Ứng tuyển ngay */}
  <div className="flex">
    {width > 800 && (
      <a
      href="https://forms.gle/V3gnKCU9yTd87mjD6" // Thay bằng đường dẫn Google Forms của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="bg-KCTBS-yellow px-4 py-2 text-white hidden sm:block rounded-md mr-2 hover:bg-blue-500"
    >
      Ứng tuyển ngay
    </a>
    )}
    {width < 800 && (
      <button onClick={() => setOpen(!open)} className="">
        <GiHamburgerMenu
          size={30}
          className="mt-2 mr-2 text-KCTBS-blue"
        />
      </button>
    )}
  </div>

  {/* Phần icon Word */}
  <div className="flex items-center">
    <a
      href="https://drive.google.com/file/d/1l_PrqYk23VIZWkoZbBjyu-yuPAbYhvC4/view?usp=sharing" // Đường dẫn đến file PDF
      target="_blank"
      rel="noopener noreferrer"
      className="text-KCTBS-blue hover:text-blue-700"
    >
      <FaFileWord
        size={40} // Kích thước icon
        className="transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </a>
    <p className="ml-2">Hồ sơ năng lực Bảo Sơn</p> {/* Giảm margin-left để gần hơn */}
  </div>
</div>

        </div>

        {/* desktop nav end */}
        <div className={`${open ? null : 'hidden'} h-[20rem]`}>
          <ul>
            <li className="text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold pl-8 cursor-pointer pb-4">
              <Link to="/vieclamnoibat">Dự án</Link>
            </li>
            <li className="text-KCTBS-blue hover:text-KCTBS-blue-bold font-bold pl-8 cursor-pointer pb-4">
              <Link to="/lienhe">Liên hệ</Link>
            </li>
          </ul>
          <div className="flex pl-8">
          <a
      href="https://forms.gle/V3gnKCU9yTd87mjD6" // Thay bằng đường dẫn Google Forms của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="bg-KCTBS-yellow px-4 py-2 text-white hidden sm:block rounded-md mr-2 hover:bg-blue-500"
    >
      Ứng tuyển ngay
    </a>
          </div>
        </div>
      </nav>
      <PopupComponent open={showPopup} onClose={() => setShowPopup(!showPopup)} />
    </div>
  );
};

export default Navbar;
