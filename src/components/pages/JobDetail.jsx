import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar.jsx";
import {motion} from "framer-motion";
import SearchComponent from "../SearchComponent.jsx";
import JobListings from "../JobListings.jsx";
import Footer from "../Footer.jsx";
import { IoBriefcase, IoTime, IoBusiness, IoCash, IoCalendar } from 'react-icons/io5';
import MasterService from "../service/master.service.jsx";
import {useParams} from "react-router-dom";
import moment from "moment";
import Background from "../images/Background.png";
const JobDetail = () => {
    const {id} = useParams();
    const [data,setData] = useState({});
    useEffect(() => {
        document.title="KCTBS | Chi tiết công việc";
    },[]);
    useEffect(()=>{
        MasterService.getDetailPost(id).then(
            (data) => {
                setData(data?.data?.result);
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
    },[])
    const fontFamilyStyle ={
        fontFamily:'Arial,sans-serif !important',
        fontSize:'12px !important'
    }
    return (
        <>
        <Navbar />
    <div className="max-w-screen overflow-x-hidden font-poppins mt-20 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed" style={{backgroundImage:`url(${Background})`}}>
        <section className="">
            <div className="max-w-5xl mx-auto bg-white p-6 shadow-md ">
                {/* Header Section */}
                <div className="border-b pb-4">
                    <h1 className="text-2xl font-bold mb-2 text-center">{data?.viTriTuyenDung}</h1>
                    <p className="text-sm mb-2  text-center">{data?.diaDiemTitle}</p>
                    <div className="flex gap-10 bg-white p-4 flex-row">
                        <div style={{width:'70%'}}>
                            <div className="flex items-center gap-2">
                                <IoBriefcase className="text-KCTBS-yellow"/>
                                <span>Số lượng cần tuyển: {data?.soLuongTuyen}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoTime className="text-KCTBS-yellow"/>
                                <span>Loại hình công việc: Toàn thời gian</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoBusiness className="text-KCTBS-yellow"/>
                                <span>Kinh nghiệm: {data?.kinhNghiemTitle}</span>
                            </div>
                        </div>
                        <div style={{width:'30%'}}>
                        <div className="flex items-center gap-2">
                            <IoCash className="text-KCTBS-yellow"/>
                            <span>Mức lương: {data?.luong}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoCalendar className="text-KCTBS-yellow"/>
                            <span>Hạn nộp hồ sơ: {moment(data?.hanNopHoSo).format('DD/MM/YYYY')}</span>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Job Details Section */}
                <div className="py-4">
                    {/* Each section like Số lượng cần tuyển, Loại hình công việc, etc. */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Icon + text */}
                        </div>
                        <div className="flex items-center">
                            {/* Icon + text */}
                        </div>
                    </div>
                    {/* More job details */}
                </div>

                {/* Job Description Section */}
                <div className="border-t pt-4">
                    <h2 className="font-semibold text-lg mb-2">CHI TIẾT CÔNG VIỆC</h2>
                    <div style={fontFamilyStyle} dangerouslySetInnerHTML={{__html:data?.chiTietCongViec}}></div>
                </div>

                {/* Requirements Section */}
                <div className="border-t pt-4">
                    <h2 className="font-semibold text-lg mb-2">YÊU CẦU CÔNG VIỆC</h2>
                    <div style={fontFamilyStyle} dangerouslySetInnerHTML={{__html:data?.yeuCauCongViec}}></div>
                </div>

                {/* Benefits Section */}
                <div className="border-t pt-4">
                    <h2 className="font-semibold text-lg mb-2">QUYỀN LỢI</h2>

                        <div style={fontFamilyStyle} dangerouslySetInnerHTML={{__html:data?.quyenLoi}}></div>
                </div>
                {/* Additional Information Section */}
                {/*<div className="border-t pt-4">*/}
                {/*    <h2 className="font-semibold text-lg mb-2">THÔNG TIN THAM KHẢO</h2>*/}
                {/*    /!* Additional information content *!/*/}
                {/*</div>*/}

                {/* Footer Section */}
                <div className="border-t pt-4">
                    <h2 className="font-semibold text-lg mb-2">NƠI LÀM VIỆC</h2>
                    <p>{data.diaDiemTitle}</p>
                    {/* Contact information */}
                </div>
            </div>
        </section>
    </div>
    <Footer/>
        </>
);
};

export default JobDetail;
