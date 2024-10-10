import React, {useEffect, useRef, useState} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import {FcComboChart, FcGenealogy, FcMindMap} from "react-icons/fc";
import B1 from "../images/qttd/B1.png";
import B2 from "../images/qttd/B2.png";
import B3 from "../images/qttd/B3.png";
import B4 from "../images/qttd/B4.png";
import B5 from "../images/qttd/B5.png";
import B6 from "../images/qttd/B6.png";
import B7 from "../images/qttd/B7.png";
import B8 from "../images/qttd/B8.png";
import {FaCheck} from "react-icons/fa";
import SearchBoxWithReCAPTCHA from "../SearchBoxWithReCAPTCHA.jsx";
import {useNavigate} from "react-router-dom";
import Background from "../images/Background.png";
const QuyTrinhTuyenDung = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const ref8 = useRef();
    const isInView = useInView(ref);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const isInView3 = useInView(ref3);
    const isInView4 = useInView(ref4);
    const isInView5 = useInView(ref5);
    const isInView6 = useInView(ref6);
    const isInView7 = useInView(ref7);
    const isInView8 = useInView(ref8);
    const mainControlls = useAnimation();
    const mainControlls1 = useAnimation();
    const mainControlls2 = useAnimation();
    const mainControlls3 = useAnimation();
    const mainControlls4 = useAnimation();
    const mainControlls5 = useAnimation();
    const mainControlls6 = useAnimation();
    const mainControlls7 = useAnimation();
    const mainControlls8 = useAnimation();
    const totalPages = 10; // Assume total pages is 10 for this example
    const navigate = useNavigate();
    const [checkShowPopup,setCheckShowPopup] = useState(false);
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
        if (isInView1) {
            mainControlls1.start("visible");
        }
        if (isInView2) {
            mainControlls2.start("visible");
        }
        if (isInView3) {
            mainControlls3.start("visible");
        }
        if (isInView4) {
            mainControlls4.start("visible");
        }
        if (isInView5) {
            mainControlls5.start("visible");
        }
        if (isInView6) {
            mainControlls6.start("visible");
        }
        if (isInView7) {
            mainControlls7.start("visible");
        }
        if (isInView8) {
            mainControlls8.start("visible");
        }

    }, [isInView,isInView2,isInView3,isInView4,isInView1,isInView5,isInView6,isInView7,isInView8]);
    useEffect(() => {
      document.title="KCTBS | Hành trình tuyển dụng";
  },[]);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const { innerWidth: width, innerHeight: height } = window;
    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible");
        }
    }, [isInView]);
  return (
    <div>
      <Navbar checkShowPopup={checkShowPopup} setCheckShowPopup={setCheckShowPopup}/>

            <div className="max-w-screen overflow-x-hidden font-poppins mt-14 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed " style={{backgroundImage:`url(${Background})`}}>
                <SearchBoxWithReCAPTCHA/>
                {/*<Stepper/>*/}
                {/* features section */}
                {width <800 ? (
                    <>
                        <section className=" text-gray-700">
                            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                                <div className="mx-auto mb-12 text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-KCTBS-blue sm:text-4xl md:text-[40px]">
                                        Hành trình tuyển dụng
                                    </h2>
                                </div>

                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Tìm kiếm cơ hội việc làm phù hợp
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Ứng viên quan tâm tìm kiếm các vị trí tuyển dụng, cơ hội nghề nghiệp cùng KCTBS và cách thức dự tuyển tại:
                                                    </h4>
                                                    <div>
                                                        <button onClick={()=>    navigate('/vieclamnoibat')} className="bg-KCTBS-yellow text-white" style={{width:300,fontSize:'24px',padding:'4px',alignItems:'center',borderRadius:'8px',marginTop:'8px'}}>
                                                            TÌM KIẾM VIỆC LÀM
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B1}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Nộp hồ sơ ứng tuyển
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Gửi Sơ yếu lý lịch tự thuật (CV) bao gồm các thông tin cá nhân, quá trình học tập, kinh nghiệm, mục tiêu, sở thích cá nhân... gửi về cho Bộ phận Tuyển dụng theo cách thức được hướng dẫn trong các tin đăng tuyển hoặc:
                                                    </h4>
                                                    <div>
                                                        <button onClick={()=>   setCheckShowPopup(true)} className="bg-KCTBS-yellow text-white" style={{width:300,fontSize:'24px',padding:'4px',alignItems:'center',borderRadius:'8px',marginTop:'8px'}}>
                                                            ỨNG TUYỂN NGAY
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B2}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Tiếp nhận và sàng lọc hồ sơ
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Sau khi ứng viên nộp hồ sơ, thông tin ứng tuyển, chúng tôi sẽ tập hợp và chọn những ứng viên phù hợp với yêu cầu của vị trí cần tuyển để mời tham dự các bước tiếp theo của hành trình truyển dụng. Những hồ sơ chưa được lựa chọn, chúng tôi sẽ lưu cho những vị trí và các giai đoạn khi có vị trí công việc phù hợp.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B3}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Kiểm tra kỹ năng chuyên môn
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">      Các bài kiểm tra sẽ được lựa chọn phù hợp cho từng vị trí tuyển dụng
                                                        Có hai hình thức kiểm đầu vào được áp dụng là: Thực hành trực tiếp và làm bài từ xa.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B4}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Phỏng vấn
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">       Thông qua buổi phỏng vấn này, Công ty và ứng viên sẽ có thêm các thông tin để đánh giá mức độ phù hợp của ứng viên dự tuyển với công việc cần tuyển.
                                                        Một số yếu tố chính Công ty thường xem xét khi phỏng vấn ứng viên gồm: Khả năng giao tiếp, khả năng làm việc (độc lập hay theo nhóm), khả năng tổ chức công việc và lập kế hoạch, khả năng tư duy và giải quyết vấn đề, kiểm tra lại một số thông tin trong hồ sơ: Quá trình học tập, kinh nghiệm, kỹ năng,...
                                                        Tùy từng ứng viên và vị trí tuyển dụng, ứng viên có thể sẽ cần tham gia nhiều hơn một buổi phỏng vấn.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B5}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Thỏa thuận hợp đồng
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">       Thông qua buổi phỏng vấn này, Công ty và ứng viên sẽ có thêm các thông tin để đánh giá mức độ phù hợp của ứng viên dự tuyển với công việc cần tuyển.
                                                        Các ứng viên được lựa chọn qua vòng phỏng vấn sẽ được chúng tôi liên hệ thoả thuận về hợp đồng và các vấn đề liên quan, bao gồm: loại hợp đồng, vị trí công việc, mức lương, phụ cấp, thời gian tiếp nhận, hồ sơ nhân sự,…
                                                    </h4>
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Sau khi ứng viên đạt được thỏa thuận với Công ty, chúng tôi sẽ gửi thư mời nhận việc chính thức qua email và hướng dẫn chuẩn bị hồ sơ nhân sự.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B6}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Hoàn thiện hồ sơ sau khi trúng tuyển
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Sau khi nhận thông báo trúng tuyển, ứng viên cần chuẩn bị hồ sơ theo hướng dẫn và gửi tới bộ phận Tuyển dụng để hoàn thiện thủ tục tiếp nhận nhân sự mới. Tùy thuộc vào vị trí công việc, chúng tôi có thể yêu cầu cung cấp những giấy tờ khác nhau.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B7}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Tiếp nhận công việc
                                        </h3>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium place-items-center">
                                                        Vào ngày đầu tiên tiếp nhận công việc, ứng viên sẽ được:
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex"  style={{alignItems: 'center'}}>
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                    <FaCheck size={"1rem"} style={{
                                                        color: '#FBBF24',
                                                        backgroundColor: '#FBBF241A',
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: 30,
                                                        padding: '6px'
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="ml-4 place-items-center">
                                                Nhận thư chào đón và lộ trình đào tạo phát triển
                                            </div>
                                        </div>
                                        <div className="flex"  style={{alignItems: 'center'}}>
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                    <FaCheck size={"1rem"} style={{
                                                        color: '#FBBF24',
                                                        backgroundColor: '#FBBF241A',
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: 30,
                                                        padding: '6px'
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="ml-4 place-items-center">
                                                Giới thiệu với Ban Điều hành và các phòng ban trong Công ty
                                            </div>
                                        </div>
                                        <div className="flex"  style={{alignItems: 'center'}}>
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                    <FaCheck size={"1rem"} style={{
                                                        color: '#FBBF24',
                                                        backgroundColor: '#FBBF241A',
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: 30,
                                                        padding: '6px'
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="ml-4 place-items-center">
                                                Cấp phát trang thiết bị, quyền truy cập các hệ thống công việc
                                            </div>
                                        </div>
                                        <div className="flex"  style={{alignItems: 'center'}}>
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                    <FaCheck size={"1rem"} style={{
                                                        color: '#FBBF24',
                                                        backgroundColor: '#FBBF241A',
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: 30,
                                                        padding: '6px'
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="ml-4 place-items-center">
                                                Hướng dẫn tiếp nhận công việc
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <img
                                                src={B8}
                                                alt="image1"
                                                className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <section className="flex h-full text-gray-700 gap-8">
                            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                                <div className="mx-auto mb-12 text-center lg:mb-20">
                                    <h2 className="mb-4 text-3xl font-bold text-KCTBS-blue sm:text-4xl md:text-[40px]">
                                        Hành trình tuyển dụng
                                    </h2>
                                    <p className="text-lg">
                                    </p>
                                </div>

                                <div ref={ref1} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Tìm kiếm cơ hội việc làm phù hợp
                                        </h3>
                                        <div className="mt-12">
                                            <motion.div
                                                variants={{
                                                    hidden: {opacity: 0, y: -75},
                                                    visible: {opacity: 1, y: 0},
                                                }}
                                                initial="hidden"
                                                animate={mainControlls1}
                                                transition={{duration: 0.5, delay: 0.15}}
                                                className="flex"
                                                style={{alignItems: 'center'}}
                                            >
                                                <div className="flex-shrink-0">
                                                    {/*<div*/}
                                                    {/*    className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                                    {/*    <FaCheck size={"1rem"} style={{*/}
                                                    {/*        color: '#FBBF24',*/}
                                                    {/*        backgroundColor: '#FBBF241A',*/}
                                                    {/*        width: '30px',*/}
                                                    {/*        height: '30px',*/}
                                                    {/*        borderRadius: 30,*/}
                                                    {/*        padding: '6px'*/}
                                                    {/*    }}/>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <div className="ml-4 place-items-center">
                                                    {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                                    {/*    Robust Analytical Capabilities*/}
                                                    {/*</h4>*/}

                                                    Ứng viên quan tâm tìm kiếm các vị trí tuyển dụng, cơ hội nghề nghiệp cùng KCTBS và cách thức dự tuyển tại:
                                                    <div>
                                                    <button onClick={()=>    navigate('/vieclamnoibat')} className="bg-KCTBS-yellow text-white" style={{width:300,fontSize:'24px',padding:'4px',alignItems:'center',borderRadius:'8px',marginTop:'8px'}}>
                                                        TÌM KIẾM VIỆC LÀM
                                                    </button>
                                                    </div>
                                                </div>

                                            </motion.div>
                                            {/*<motion.div*/}
                                            {/*    variants={{*/}
                                            {/*        hidden: {opacity: 0, y: -75},*/}
                                            {/*        visible: {opacity: 1, y: 0},*/}
                                            {/*    }}*/}
                                            {/*    initial="hidden"*/}
                                            {/*    animate={mainControlls1}*/}
                                            {/*    transition={{duration: 0.5, delay: 0.15}}*/}
                                            {/*    className="flex"*/}
                                            {/*    style={{alignItems: 'center', marginTop: 10}}*/}
                                            {/*>*/}
                                            {/*    <div className="flex-shrink-0">*/}
                                            {/*        <div*/}
                                            {/*            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                            {/*            <FaCheck size={"1rem"} style={{*/}
                                            {/*                color: '#FBBF24',*/}
                                            {/*                backgroundColor: '#FBBF241A',*/}
                                            {/*                width: '30px',*/}
                                            {/*                height: '30px',*/}
                                            {/*                borderRadius: 30,*/}
                                            {/*                padding: '6px'*/}
                                            {/*            }}/>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="ml-4 place-items-center">*/}
                                            {/*        Gửi Mẫu thông tin ứng viên hoặc Sơ yếu lý lịch tự thuật (CV) bao gồm*/}
                                            {/*        các thông tin cá nhân, quá trình học tập, kinh nghiệm, mục tiêu, sở*/}
                                            {/*        thích cá nhân... gửi về cho Bộ phận Tuyển dụng theo các phương pháp*/}
                                            {/*        được hướng dẫn trong các tin đăng tuyển.*/}
                                            {/*    </div>*/}
                                            {/*</motion.div>*/}
                                        </div>
                                    </div>
                                    <div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: 75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls1}
                                            transition={{duration: 0.5, delay: 0.25}}
                                            aria-hidden="true"
                                            className="mt-10 lg:mt-0"
                                        >
                                            <img
                                                src={B1}
                                                alt="image1"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref2}>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                        <div className="lg:col-start-2">
                                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                                Nộp hồ sơ ứng tuyển
                                            </h3>
                                            <p className="mt-3   font-thin ">
                                                Gửi Sơ yếu lý lịch tự thuật (CV) bao gồm các thông tin cá nhân, quá trình học tập, kinh nghiệm, mục tiêu, sở thích cá nhân... gửi về cho Bộ phận Tuyển dụng theo cách thức được hướng dẫn trong các tin đăng tuyển hoặc:
                                            </p>
                                            <button onClick={()=>   setCheckShowPopup(true)} className="bg-KCTBS-yellow text-white" style={{width:300,fontSize:'24px',padding:'4px',alignItems:'center',borderRadius:'8px',marginTop:'8px'}}>
                                                ỨNG TUYỂN NGAY
                                            </button>
                                        </div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: -75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls2}
                                            transition={{duration: 0.5, delay: 0.15}}
                                            className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                                        >
                                            <img
                                                src={B2}
                                                alt="image2"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref3} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Tiếp nhận và sàng lọc hồ sơ
                                        </h3>
                                        {/*<p className="mt-3 font-thin ">*/}
                                        {/*    Năm 2022, KCTBS đã đầu tư 130 tỷ đồng cho các hoạt động đào tạo và chương trình đào tạo*/}
                                        {/*    nội bộ với 676.127 lượt CBNV được đào tạo.*/}
                                        {/*</p>*/}
                                        <div className="mt-12">
                                            <p className="mt-3   font-thin ">
                                                Sau khi ứng viên nộp hồ sơ, thông tin ứng tuyển, chúng tôi sẽ tập hợp và chọn những ứng viên phù hợp với yêu cầu của vị trí cần tuyển để mời tham dự các bước tiếp theo của hành trình truyển dụng. Những hồ sơ chưa được lựa chọn, chúng tôi sẽ lưu cho những vị trí và các giai đoạn khi có vị trí công việc phù hợp.
                                            </p>
                                            {/*<motion.div*/}
                                            {/*    variants={{*/}
                                            {/*        hidden: {opacity: 0, y: -75},*/}
                                            {/*        visible: {opacity: 1, y: 0},*/}
                                            {/*    }}*/}
                                            {/*    initial="hidden"*/}
                                            {/*    animate={mainControlls3}*/}
                                            {/*    transition={{duration: 0.5, delay: 0.15}}*/}
                                            {/*    className="flex"*/}
                                            {/*    style={{alignItems: 'center'}}*/}
                                            {/*>*/}
                                            {/*    <div className="flex-shrink-0">*/}
                                            {/*        <div*/}
                                            {/*            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                            {/*            <FaCheck size={"1rem"} style={{*/}
                                            {/*                color: '#FBBF24',*/}
                                            {/*                backgroundColor: '#FBBF241A',*/}
                                            {/*                width: '30px',*/}
                                            {/*                height: '30px',*/}
                                            {/*                borderRadius: 30,*/}
                                            {/*                padding: '6px'*/}
                                            {/*            }}/>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="ml-4 place-items-center">*/}

                                            {/*        IQ - Kiểm tra tư duy logic*/}
                                            {/*    </div>*/}
                                            {/*</motion.div>*/}

                                        </div>
                                    </div>
                                    <div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: 75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls3}
                                            transition={{duration: 0.5, delay: 0.25}}
                                            aria-hidden="true"
                                            className="mt-10 lg:mt-0"
                                        >
                                            <img
                                                src={B3}
                                                alt="image1"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref4}>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                        <div className="lg:col-start-2">
                                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                                Kiểm tra kỹ năng chuyên môn
                                            </h3>
                                            <p className="mt-3  font-thin ">
                                                Các bài kiểm tra sẽ được lựa chọn phù hợp cho từng vị trí tuyển dụng
                                                Có hai hình thức kiểm đầu vào được áp dụng là: Thực hành trực tiếp và làm bài từ xa.
                                            </p>
                                        </div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: -75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls4}
                                            transition={{duration: 0.5, delay: 0.15}}
                                            className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                                        >
                                            <img
                                                src={B4}
                                                alt="image2"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref5} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Phỏng vấn
                                        </h3>
                                        <div className="lg:col-start-2">
                                            <p className="mt-3  font-thin ">
                                                Thông qua buổi phỏng vấn này, Công ty và ứng viên sẽ có thêm các thông tin để đánh giá mức độ phù hợp của ứng viên dự tuyển với công việc cần tuyển.
                                                Một số yếu tố chính Công ty thường xem xét khi phỏng vấn ứng viên gồm: Khả năng giao tiếp, khả năng làm việc (độc lập hay theo nhóm), khả năng tổ chức công việc và lập kế hoạch, khả năng tư duy và giải quyết vấn đề, kiểm tra lại một số thông tin trong hồ sơ: Quá trình học tập, kinh nghiệm, kỹ năng,...
                                                Tùy từng ứng viên và vị trí tuyển dụng, ứng viên có thể sẽ cần tham gia nhiều hơn một buổi phỏng vấn.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: 75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls5}
                                            transition={{duration: 0.5, delay: 0.25}}
                                            aria-hidden="true"
                                            className="mt-10 lg:mt-0"
                                        >
                                            <img
                                                src={B5}
                                                alt="image1"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref6}>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                        <div className="lg:col-start-2">
                                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                                Thỏa thuận hợp đồng
                                            </h3>
                                            <p className="mt-3  font-thin ">
                                                Các ứng viên được lựa chọn qua vòng phỏng vấn sẽ được chúng tôi liên hệ thoả thuận về hợp đồng và các vấn đề liên quan, bao gồm: loại hợp đồng, vị trí công việc, mức lương, phụ cấp, thời gian tiếp nhận, hồ sơ nhân sự,…
                                            </p>
                                            <p className="mt-3  font-thin ">
                                                Sau khi ứng viên đạt được thỏa thuận với Công ty, chúng tôi sẽ gửi thư mời nhận việc chính thức qua email và hướng dẫn chuẩn bị hồ sơ nhân sự.
                                            </p>
                                        </div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: -75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls6}
                                            transition={{duration: 0.5, delay: 0.15}}
                                            className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                                        >
                                            <img
                                                src={B6}
                                                alt="image2"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref7} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                            Hoàn thiện hồ sơ sau khi trúng tuyển
                                        </h3>
                                        <div className="lg:col-start-2">
                                            <p className="mt-3  font-thin ">
                                                Sau khi nhận thông báo trúng tuyển, ứng viên cần chuẩn bị hồ sơ theo hướng dẫn và gửi tới bộ phận Tuyển dụng để hoàn thiện thủ tục tiếp nhận nhân sự mới. Tùy thuộc vào vị trí công việc, chúng tôi có thể yêu cầu cung cấp những giấy tờ khác nhau.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <motion.div
                                            variants={{
                                                hidden: {opacity: 0, x: 75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls7}
                                            transition={{duration: 0.5, delay: 0.25}}
                                            aria-hidden="true"
                                            className="mt-10 lg:mt-0"
                                        >
                                            <img
                                                src={B7}
                                                alt="image1"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                                <div ref={ref8}>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                        <div className="lg:col-start-2">
                                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                                Tiếp nhận công việc
                                            </h3>
                                            <p className="mt-3  font-thin ">
                                                Vào ngày đầu tiên tiếp nhận công việc, ứng viên sẽ được:
                                            </p>
                                            <div className="mt-12">
                                                <motion.div
                                                    variants={{
                                                        hidden: {opacity: 0, y: -75},
                                                        visible: {opacity: 1, y: 0},
                                                    }}
                                                    initial="hidden"
                                                    animate={mainControlls8}
                                                    transition={{duration: 0.5, delay: 0.15}}
                                                    className="flex"
                                                    style={{alignItems: 'center'}}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                            <FaCheck size={"1rem"} style={{
                                                                color: '#FBBF24',
                                                                backgroundColor: '#FBBF241A',
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: 30,
                                                                padding: '6px'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 place-items-center">
                                                        Ký hợp đồng với các thông tin theo thỏa thuận
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    ref={ref}
                                                    variants={{
                                                        hidden: {opacity: 0, y: -75},
                                                        visible: {opacity: 1, y: 0},
                                                    }}
                                                    initial="hidden"
                                                    animate={mainControlls8}
                                                    transition={{duration: 0.5, delay: 0.15}}
                                                    className="flex"
                                                    style={{alignItems: 'center'}}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                            <FaCheck size={"1rem"} style={{
                                                                color: '#FBBF24',
                                                                backgroundColor: '#FBBF241A',
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: 30,
                                                                padding: '6px'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 place-items-center">
                                                        Nhận thư chào đón và lộ trình đào tạo phát triển
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    ref={ref}
                                                    variants={{
                                                        hidden: {opacity: 0, y: -75},
                                                        visible: {opacity: 1, y: 0},
                                                    }}
                                                    initial="hidden"
                                                    animate={mainControlls8}
                                                    transition={{duration: 0.5, delay: 0.15}}
                                                    className="flex"
                                                    style={{alignItems: 'center'}}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                            <FaCheck size={"1rem"} style={{
                                                                color: '#FBBF24',
                                                                backgroundColor: '#FBBF241A',
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: 30,
                                                                padding: '6px'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 place-items-center">
                                                        Giới thiệu với Ban Điều hành và các phòng ban trong Công ty
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    ref={ref}
                                                    variants={{
                                                        hidden: {opacity: 0, y: -75},
                                                        visible: {opacity: 1, y: 0},
                                                    }}
                                                    initial="hidden"
                                                    animate={mainControlls8}
                                                    transition={{duration: 0.5, delay: 0.15}}
                                                    className="flex"
                                                    style={{alignItems: 'center'}}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                            <FaCheck size={"1rem"} style={{
                                                                color: '#FBBF24',
                                                                backgroundColor: '#FBBF241A',
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: 30,
                                                                padding: '6px'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 place-items-center">
                                                        Cấp phát trang thiết bị, quyền truy cập các hệ thống công việc
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    ref={ref}
                                                    variants={{
                                                        hidden: {opacity: 0, y: -75},
                                                        visible: {opacity: 1, y: 0},
                                                    }}
                                                    initial="hidden"
                                                    animate={mainControlls8}
                                                    transition={{duration: 0.5, delay: 0.15}}
                                                    className="flex"
                                                    style={{alignItems: 'center'}}
                                                >
                                                    <div className="flex-shrink-0">
                                                        <div
                                                            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                                            <FaCheck size={"1rem"} style={{
                                                                color: '#FBBF24',
                                                                backgroundColor: '#FBBF241A',
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: 30,
                                                                padding: '6px'
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 place-items-center">
                                                        Hướng dẫn tiếp nhận công việc
                                                    </div>
                                                </motion.div>
                                                {/*<motion.div*/}
                                                {/*    ref={ref}*/}
                                                {/*    variants={{*/}
                                                {/*        hidden: {opacity: 0, y: -75},*/}
                                                {/*        visible: {opacity: 1, y: 0},*/}
                                                {/*    }}*/}
                                                {/*    initial="hidden"*/}
                                                {/*    animate={mainControlls}*/}
                                                {/*    transition={{duration: 0.5, delay: 0.15}}*/}
                                                {/*    className="flex"*/}
                                                {/*    style={{alignItems: 'center'}}*/}
                                                {/*>*/}
                                                {/*    <div className="flex-shrink-0">*/}
                                                {/*        <div*/}
                                                {/*            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                                {/*            <FaCheck size={"1rem"} style={{*/}
                                                {/*                color: '#FBBF24',*/}
                                                {/*                backgroundColor: '#FBBF241A',*/}
                                                {/*                width: '30px',*/}
                                                {/*                height: '30px',*/}
                                                {/*                borderRadius: 30,*/}
                                                {/*                padding: '6px'*/}
                                                {/*            }}/>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="ml-4 place-items-center">*/}
                                                {/*        Giấy chứng nhận sinh viên (nếu có)*/}
                                                {/*    </div>*/}
                                                {/*</motion.div>*/}
                                                {/*<motion.div*/}
                                                {/*    ref={ref}*/}
                                                {/*    variants={{*/}
                                                {/*        hidden: {opacity: 0, y: -75},*/}
                                                {/*        visible: {opacity: 1, y: 0},*/}
                                                {/*    }}*/}
                                                {/*    initial="hidden"*/}
                                                {/*    animate={mainControlls}*/}
                                                {/*    transition={{duration: 0.5, delay: 0.15}}*/}
                                                {/*    className="flex"*/}
                                                {/*    style={{alignItems: 'center'}}*/}
                                                {/*>*/}
                                                {/*    <div className="flex-shrink-0">*/}
                                                {/*        <div*/}
                                                {/*            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                                {/*            <FaCheck size={"1rem"} style={{*/}
                                                {/*                color: '#FBBF24',*/}
                                                {/*                backgroundColor: '#FBBF241A',*/}
                                                {/*                width: '30px',*/}
                                                {/*                height: '30px',*/}
                                                {/*                borderRadius: 30,*/}
                                                {/*                padding: '6px'*/}
                                                {/*            }}/>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="ml-4 place-items-center">*/}
                                                {/*        Bảng điểm, chứng chỉ bản sao*/}
                                                {/*    </div>*/}
                                                {/*</motion.div>*/}
                                                {/*<motion.div*/}
                                                {/*    ref={ref}*/}
                                                {/*    variants={{*/}
                                                {/*        hidden: {opacity: 0, y: -75},*/}
                                                {/*        visible: {opacity: 1, y: 0},*/}
                                                {/*    }}*/}
                                                {/*    initial="hidden"*/}
                                                {/*    animate={mainControlls}*/}
                                                {/*    transition={{duration: 0.5, delay: 0.15}}*/}
                                                {/*    className="flex"*/}
                                                {/*    style={{alignItems: 'center'}}*/}
                                                {/*>*/}
                                                {/*    <div className="flex-shrink-0">*/}
                                                {/*        <div*/}
                                                {/*            className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">*/}
                                                {/*            <FaCheck size={"1rem"} style={{*/}
                                                {/*                color: '#FBBF24',*/}
                                                {/*                backgroundColor: '#FBBF241A',*/}
                                                {/*                width: '30px',*/}
                                                {/*                height: '30px',*/}
                                                {/*                borderRadius: 30,*/}
                                                {/*                padding: '6px'*/}
                                                {/*            }}/>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*    <div className="ml-4 place-items-center">*/}
                                                {/*        02 ảnh 03 x 04, 2 ảnh 04x06.*/}
                                                {/*    </div>*/}
                                                {/*</motion.div>*/}
                                            </div>
                                        </div>

                                        <motion.div
                                            ref={ref}
                                            variants={{
                                                hidden: {opacity: 0, x: -75},
                                                visible: {opacity: 1, x: 0},
                                            }}
                                            initial="hidden"
                                            animate={mainControlls8}
                                            transition={{duration: 0.5, delay: 0.15}}
                                            className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                                        >
                                            <img
                                                src={B8}
                                                alt="image2"
                                                className="h-[500px] taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* end */}

            </div>
        <Footer/>
    </div>
  );
};

export default QuyTrinhTuyenDung;
