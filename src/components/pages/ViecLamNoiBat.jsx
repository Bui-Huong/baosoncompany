import React, {useEffect, useRef, useState} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {useAnimation, useInView, motion } from "framer-motion";
import JobListings from "../JobListings.jsx";
import SearchComponent from "../SearchComponent.jsx";
import bannerdoc2 from "../images/bannerdoc2.jpg";
import bannerngang from "../images/55b3cc2d-1325-4b3b-9425-e6709b37b333.jfif";
import bannerngang1 from "../images/05725818-c9df-4357-b3bf-3c7e7ac7c122.jfif";
import bannerngang2 from "../images/26858962-14d4-4eff-910a-72da6539ebd9.jfif";
import bannerngang3 from "../images/ac699f37-15ca-4c8e-b602-4a7edd5b1ddf.jfif";
import bannerngang4 from "../images/2d1ca6fa-1d2f-4f34-9dc4-2b043509a890.jfif";
import bannerngang5 from "../images/d3b50b93-a92e-4afe-9dff-88cbea4e7764.jfif";
import Background from "../images/Background.png";
import MasterService from "../service/master.service.jsx";
import JobListingsMobile from "../JobListingsMobile.jsx";
import jobListings from "../JobListings.jsx";

const images = [
    bannerngang,
    bannerngang1,
    bannerngang2,
    bannerngang3,
    bannerngang4,
    bannerngang5
  ];

const ViecLamNoiBat = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval); // Clear interval khi component bị unmount
      }, []);

    useEffect(() => {
        document.title="KCTBS | Việc làm nổi bật";
    },[]);

    const { innerWidth: width, innerHeight: height } = window;
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [listData,SetListData] = useState([]);
    const [position,setPosition] = useState('');
    const [description,setDescription] = useState('');
    const [searchAction,setSearchAction] = useState(false);
    const mainControlls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useEffect(()=>{
        let data={
            position:position,
            description:description
        }
        MasterService.getListPost(data).then(
            (data) => {
                SetListData(data?.data?.result?.data);
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data && !Array.isArray(error.response.data.detail) &&
                        error.response.data.detail) ||
                    (error.response &&
                        error.response.data && Array.isArray(error.response.data.detail) &&
                        error.response.data.detail[0].msg)||
                    error.message ||
                    error.toString();
                console.log(message,error);
            });
    },[searchAction])
  return (
    <>
        <Navbar />
        {width <800 ? (
            <div className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins mt-20 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed"  style={{backgroundImage:`url(${Background})`}}>
                <section className="">
                    <div className="sticky bg-cover bg-center bg-no-repeat  h-[200px] container max-w-xl p-6 py-12 mx-auto lg:px-8 lg:max-w-7xl rounded-b-3xl" style={{backgroundImage:`url(${bannerngang})`}}>
                        <motion.div
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 75},
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 1, delay: 0.25}}
                            className="flex flex-wrap"
                        >
                            <div className="w-full">
                                <div className="mx-auto max-w-[510px] text-center">
                                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                                        Dự án của công ty
                                    </h2>
                                    <p className="text-lg text-white">

                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <div className=" p-4 flex justify-between items-center rounded">
                            <input
                                type="text"
                                placeholder="Tên dự án"
                                style={{width:'60%',marginRight:'8px'}}
                                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                                value={description}
                                onChange={e=>setDescription(e.target.value)}
                            />
                            <select
                                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                                value={position}
                                onChange={e=>setPosition(e.target.value)}
                                aria-placeholder={'Vị trí công việc'}
                            >
                                <option value="">Tất cả khu vực</option>
                                <option value="Miền Bắc">Miền Bắc</option>
                                <option value="Miền Trung">Miền Trung</option>
                                <option value="Miền Nam">Miền Nam</option>

                            </select>
                            <button onClick={()=>setSearchAction(!searchAction)} className="bg-KCTBS-yellow text-white rounded-lg text-sm px-6 h-10 ml-2">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                    <JobListingsMobile setPosition={setPosition} position={position} description={description} setDescription={setDescription} jobs={listData}/>
                </section>
            </div>
        ):(
        <div className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins mt-16 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed"  style={{backgroundImage:`url(${Background})`}}>
            <section className="">
                {/*<div className="bg-gradient-to-r from-KCTBS-blue to-KCTBS-blue-200 container max-w-xl p-6 py-12 mx-auto lg:px-8 lg:max-w-7xl rounded-b-3xl">*/}
                <div
                    style={{
                        backgroundImage: `url(${images[currentImageIndex]})`,
                        transition: 'background-image 1s ease-in-out',
                    }}
                    className="sticky bg-cover bg-center bg-no-repeat h-[400px] container max-w-xl p-6 py-24 mx-auto lg:px-8 lg:max-w-7xl rounded-b-3xl"
                    >
                    <motion.div
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 75},
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 1, delay: 0.25}}
                        className="flex flex-wrap"
                    >
                        <div className="w-full">
                            <div className="mx-auto max-w-[510px] text-center">
                                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                                Dự án của công ty
                                </h2>
                                <p className="text-lg text-white">

                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <div className=" p-4 flex justify-between items-center rounded">
                        <input
                            type="text"
                            placeholder="Tên dự án"
                            style={{width:'60%',marginRight:'8px'}}
                            className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                            value={description}
                            onChange={e=>setDescription(e.target.value)}
                        />
                        <select
                            className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                            value={position}
                            onChange={e=>setPosition(e.target.value)}
                            aria-placeholder={'Vị trí công việc'}
                        >
                            <option value="">Tất cả khu vực</option>
                            <option value="Miền Bắc">Miền Bắc</option>
                            <option value="Miền Trung">Miền Trung</option>
                            <option value="Miền Nam">Miền Nam</option>

                        </select>
                        <button onClick={()=>setSearchAction(!searchAction)} className="bg-KCTBS-yellow text-white rounded-lg text-sm px-6 h-10 ml-2">
                            Tìm kiếm
                        </button>
                    </div>
                </div>
                    <JobListings setPosition={setPosition} position={position} description={description} setDescription={setDescription} jobs={listData}/>
            </section>
        </div>)}
        <Footer />
    </>
  );
};
export default ViecLamNoiBat;
