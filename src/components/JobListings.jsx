import React, {useEffect, useState} from 'react';
import Pagination from "./helpers/Pagination.jsx";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import image2 from "./images/logo.png";
import bannerdoc from  "./images/6ad7ed8f-0550-4bac-a03f-8ccf445b71bd.jpg";
import A from "./images/Reviews/hieulm.png";

const JobListings = ({jobs=[]}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowChanges, setRowChanges] = useState([]);
    const [totalPages, setTotalPages] = useState(1);// Assume total pages is 10 for this example
    const navigate = useNavigate();
    const rowsPerPage=5;
    const onPageChange = (page) => {
        setCurrentPage(page);
        // Here you would also fetch new data for the current page
    };
    useEffect(()=>{
        if(jobs.length>=0) {
            if(jobs.length<=rowsPerPage){
                setCurrentPage(1);
                setTotalPages(1);
            }
            setRowChanges(jobs.slice(
                (currentPage-1) * rowsPerPage,
                (currentPage) * rowsPerPage
            ))
        }else{
            setCurrentPage(1);
            setTotalPages(1);
        }
    },[currentPage,rowsPerPage,jobs])
    useEffect(()=>{
        setTotalPages(parseInt(jobs.length/rowsPerPage)+(jobs.length%rowsPerPage>0?1:0))
    },[jobs])
    return (
        <div className="max-w-xl py-4 mx-auto lg:max-w-7xl" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div className="w-full mr-8">
            {rowChanges.length>0 && rowChanges.map((job, index) => (
                <div onClick={()=>{
                    navigate('/chitietcongviec/'+job?.id);
                }} key={index}
                     // className="bg-KCTBS-yellow-throw p-4 rounded shadow mb-4"
                     className="cursor-pointer bg-white p-4 rounded shadow mb-4 border border-KCTBS-blue "
                     style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}
                >
                    <img
                        src={image2}
                        alt="image2"
                        style={{height:'100px',padding:'20px'}}
                    />
                    <div style={{width:'80%'}}>
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">{job?.viTriTuyenDung}</h2>
                        {job?.hot && <span className="text-red-500 border border-red-500 px-2 py-1 rounded">HOT</span>}
                        <span style={{backgroundColor:'red'}} className="text-white bg-red text-bold border border-red-500 px-2 py-1 rounded">HOT</span>
                    </div>
                    <p className="text-KCTBS-green">{job?.luong}</p>
                    <p style={{color:'rgba(0,0,0,0.32)'}}>{job?.diaDiemTitle}</p>
                    <p>{job?.description}</p>
                    <p className="mt-2 text-gray-700">{job?.description}</p>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div className="flex mt-2">
                        {job?.tags?.length>0 && job?.tags?.split(',')?.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-sm bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                        {/*<p className="mt-2 text-gray-700">{dayjs(job?.creationTime).format('DD/MM/YYYY')}</p>*/}
                        {(job?.hanNopHoSo &&job?.trangThaiCode !='DA_HET_HAN')? <p className="mt-2 text-gray-400" style={{fontSize:'14px'}}>{'Hạn nộp hồ sơ: '}{dayjs(job?.hanNopHoSo).format('DD/MM/YYYY')}</p>:<p className="mt-2 text-gray-400" style={{fontSize:'14px'}}>{job?.trangThai}</p>}
                    </div>
                </div>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
            <div className="bg-KCTBS-blue-bold w-999000 text-white content-center text-center h-100">
                <img  src={bannerdoc}
                      alt="banner"/>
            </div>
        </div>
    );
};

export default JobListings;
