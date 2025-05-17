import React from 'react';
import Icon from "./images/favicon.png";
import { Link } from "react-router-dom";
import { ImLinkedin2,ImFacebook, ImTwitter } from "react-icons/im";
import ScrollToTop from 'react-scroll-up';
import Logo from "./images/logo.png";
import videoFile from './images/video_vanphong_lamviec_dongan_01_10_24_hd.mp4';
const Footer = () => {
	const { innerWidth: width, innerHeight: height } = window;
  return (
	<>

	<div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
    <div className="overflow-x-hidden max-w-screen font-poppins">
		<footer className="py-6 bg-gradient-to-br from-blue-100 ">
			<div className="container px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">
				<div className="grid grid-cols-12">
					<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
						<Link to="/" className="flex justify-center space-x-3 md:justify-start">
							<img
								src={Logo}
								alt="icon"
								className="hidden sm:block sm:w-[100px] sm:-h-[100px] -mt-1"
							/>
							
						</Link>
						<p class="text-body-color text-base">
                            <h4 className="text-dark mb-1 text-xl font-bold">VĂN PHÒNG:</h4> Liền kề 6-38, Khu đô thị happy land, tổ 24, Thị trấn Đông Anh, Thành phố Hà Nội
                        </p>
                          <p className="text-body-color text-base">

                              <h4 className="text-dark mb-1 text-xl font-bold">Nhà máy:</h4> Thôn Quảng Hội, Xã Quang Tiến, Huyện Sóc Sơn, TP.Hà Nội

                          </p>
                          <h4 class="text-dark mb-1 text-xl font-bold">
                          Số điện thoại
                        </h4>
                        <p class="text-body-color text-base">
                        Hotline: 024.388.232.96 -	Di động: 0962127788
                        </p>
					</div>
					<div className="col-span-6 text-center md:text-left md:col-span-3">
						<p className='py-2 text-blue-800 font-bold'>Danh mục</p>
						<ul>
							<li className=" mr-2 text-KCTBS-blue hover:text-blue-800 font-semibold cursor-pointer">
								<Link to="/">Trang chủ</Link>
							</li>
							{/* <li className=" mr-2 text-KCTBS-blue hover:text-blue-800 font-semibold cursor-pointer">
								<Link to="/products">Sản phẩm</Link>
							</li> */}
							<li className=" mr-2 text-KCTBS-blue hover:text-blue-800 font-semibold cursor-pointer">
								<Link to="/vieclamnoibat">Dự án</Link>
							</li>
							<li className=" mr-2 text-KCTBS-blue hover:text-blue-800 font-semibold cursor-pointer">
								<Link to="/lienhe">Liên hệ</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-6 text-center md:text-left md:col-span-3">
						<p className='py-2 text-blue-800 font-bold'>Văn phòng</p>
						<ul>
						<li>
						<video width="400" height="340" controls>
							<source src={videoFile} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						</li>
						</ul>
					</div>
				</div>
				<div className="grid justify-center pt-6 lg:justify-between">
					<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>©2025 <span className='text-KCTBS-blue'>KCTBS</span>. All rights reserved.</span>
					</div>
					<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
						{/*<Link  to="/" title="Email" className="flex items-center justify-center  rounded-full">*/}
						{/*	<ImLinkedin2 className='text-KCTBS-blue w-7 h-7'/>*/}
						{/*</Link>*/}
						{/*<Link  to="/" title="Twitter" className="flex items-center justify-center  rounded-full">*/}
						{/*	<ImFacebook className='text-KCTBS-blue w-7 h-7'/>*/}
						{/*</Link>*/}
						{/*<Link  to="/" title="GitHub" className="flex items-center justify-center  rounded-full ">*/}
						{/*	<ImTwitter className='text-KCTBS-blue w-7 h-7'/>*/}
						{/*</Link>*/}
					</div>
				</div>
			</div>
		</footer>
    </div>
	
	{/* Facebook icon bên trái */}
{/* Facebook icon */}
<div className="fixed bottom-36 left-5 z-50">
  <a
    href="https://www.facebook.com/profile.php?id=100063602291764"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border border-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
      alt="Facebook"
      className="w-6 h-6"
    />
  </a>
</div>

{/* Zalo icon */}
<div className="fixed bottom-20 left-5 z-50">
  <a
    href="https://zalo.me/0962127788"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border border-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
      alt="Zalo"
      className="w-6 h-6"
    />
  </a>
</div>

{/* Phone call icon */}
<div className="fixed bottom-5 left-5 z-50">
  <a
    href="tel:0962127788"
    className="bg-white border border-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.658l1.518 4.546a1 1 0 01-.291 1.09l-1.922 1.6a16.001 16.001 0 006.586 6.586l1.6-1.922a1 1 0 011.09-.291l4.546 1.518A1 1 0 0119 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a1 1 0 011-1h1z"
      />
    </svg>
  </a>
</div>


     {/* scroll to top  */}
    <div>    
	<ScrollToTop showUnder={160}>
        <div className="bg-blue-500 w-10 h-10 text-white rounded-full flex items-center justify-center">
          <span>Top</span>
		  
        </div>
      </ScrollToTop>
	  </div>
	
	</>
	
	
  );
}

export default Footer;
