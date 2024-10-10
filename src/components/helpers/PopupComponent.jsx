import React, {useEffect, useState} from 'react';
import moment from "moment";
import MasterService from "../service/master.service.jsx";
import SelectBox from "./SelectBox.jsx";
import {useParams} from "react-router-dom";
import {Dialog} from "@material-tailwind/react";
import {sha256} from "js-sha256";
import {SecureKey} from "../service/DefaultValue.jsx";
const PopupComponent = ({open, onClose }) => {
    const {id} = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [mucLuongMongMuon, setMucLuongMongMuon] = useState('');
    const [position, setPosition] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [processingCheck, setProcessingCheck] = useState(false);
    const [errorFile, setErrorFile] = useState(false);
    const [errorMessage, setErrorMessage] = useState("File đính kèm là thông tin bắt buộc!");
    const [errorPosition, setErrorPosition] = useState(false);
    const [listData, setListData] = useState([]);
    const [emailError, setEmailError] = useState('Email là trường bắt buộc!');
    const [phoneError, setPhoneError] = useState('Số điện thoại là trường bắt buộc!');
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };
    const validatePhone = (phone) => {
        const regex = /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;
            return regex.test(phone);
        };
    const handleClose =()=>{
        setName('');
        setPhone('');
        setEmail('');
        setPosition('');
        setSelectedFile(null);
        setSubmitted(false);
        onClose();
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);

    };
    const validate = () =>{
        let err  = false;
        if (name.trim() === '') {
            err = true;
            setError(true);
        }else {
            setError(false);
        }
        if (phone.trim() === '') {
            err = true;
            setErrorPhone(true);
        } else {
            if (!validatePhone(phone)) {
                setErrorPhone(true);
                setPhoneError('Định dạng số điện thoại không phù hợp');
            } else {
                setErrorPhone(false);
            }

        }
        if (email.trim() === '') {
            err = true;
            setErrorEmail(true);
        }else {
            if (!validateEmail(email)) {
                setEmailError('Định dạng email không phù hợp');
                setErrorEmail(true);
            } else {
                setEmailError('');
                setErrorEmail(false);
            }

        }
        if (position.trim() === '') {
            err = true;
            setErrorPosition(true);
        }else {
            setErrorPosition(false);
        }

        if (selectedFile!=null && selectedFile?.size > 3000000) {
            setErrorMessage('File đính kèm không lớn hơn 3MB!')
            err = true;
            setErrorFile(true);
        }else {
            if (selectedFile == null) {
                err = true;
                setErrorFile(true);
            }else {
                setErrorFile(false);
            }
        }
        console.log(err)
        return err;
    }
    const handleSubmit=(event)=>{

         event.preventDefault();
        let token = sha256.hmac(SecureKey,(new Date()).toString()+email);
        if (validate()== false) {
            setProcessingCheck(true);
            setSubmitted(true);
            let formData = new FormData();
            formData.append('myFile', selectedFile);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('name', name);
            formData.append('diaChi', '');
            formData.append('mucLuongMongMuon', mucLuongMongMuon);
            formData.append('jobId', position);
            formData.append('createTime', (new Date()).toString());
            formData.append('tokenCheck', token);

            formData.append('filePathFolder', moment(new Date()).year() + '\\' + moment(new Date()).format('yyyyMMDDTHHmmss'));
            console.log(2);
            MasterService.postFilePost(formData,token).then(
                (data) => {
                    setProcessingCheck(false);
                    alert('Xác nhận ứng tuyển thành công!\nCảm ơn bạn đã ứng tuyển cùng KCTBS.\nMã tra cứu hồ sơ ứng tuyển của bạn:'+data?.data?.result);
                    handleClose();
                },
                (error) => {
                    setProcessingCheck(false);
                    const message =
                        (error.response &&
                            error.response.data && !Array.isArray(error.response.data.error) &&
                            error.response.data.error.message) ||
                        (error.response &&
                            error.response.data && Array.isArray(error.response.data.detail) &&
                            error.response.data.detail[0].msg) ||
                        error.message ||
                        error.toString();
                    alert(message);
                });
        } else {
            setSubmitted(true);
        }
    }
    useEffect(()=>{
        if(submitted){
            validate();
        }
    },[name,email,phone,selectedFile,submitted])
    useEffect(()=>{
        console.log(id,listData)
        if(id!=null && id!=undefined){
            setPosition(id);
        }
    },[id])
    useEffect(()=>{
        MasterService.getListPost({position:'',description:''}).then(
            (data) => {
                setListData(data?.data?.result?.data);
            },
            (error) => {
                console.log(error)
                const message =
                    (error.response &&
                        error.response.data && !Array.isArray(error.response.data.error) &&
                        error.response.data.error.message) ||
                    (error.response &&
                        error.response.data && Array.isArray(error.response.data.detail) &&
                        error.response.data.detail[0].msg) ||
                    error.message ||
                    error.toString();
            });
    },[])
    return (
        <Dialog  open={open} handler={onClose} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                <h2 className="text-xl text-center font-semibold mb-4 text-KCTBS-blue">Nộp Đơn Ứng Tuyển</h2>
                <form className="bg-white">
                    {/* Form fields go here */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Vị trí công việc<span style={{color: 'red'}}>*</span>
                        </label>
                        <SelectBox arrayDt={listData} setPositon={setPosition} position={position}/>
                        {errorPosition && <p className="text-red-500 text-xs italic">Vị trí công việc là trường bắt buộc!</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Họ và tên<span style={{color: 'red'}}>*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Họ tên"
                            onChange={handleNameChange}
                        />
                        {error && <p className="text-red-500 text-xs italic">Họ tên là trường bắt buộc!</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Email<span style={{color: 'red'}}>*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                        />
                        {errorEmail && <p className="text-red-500 text-xs italic">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Số điện thoại<span style={{color:'red'}}>*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Số điện thoại"
                            onChange={event => setPhone(event.target.value)}
                        />
                        {errorPhone && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Mức lương mong muốn (nếu có)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="luong"
                            type="text"
                            placeholder="Mức lương mong muốn"
                            onChange={event => setMucLuongMongMuon(event.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-KCTBS-blue hover:text-KCTBS-blue-bold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                            <span>Chọn file máy tính<span className="italic" style={{color: 'red',}}>*(Lưu ý: chỉ được đính kèm duy nhất 1 file với các định dạng cho phép bao gồm doc,docx,pdf,zip và dung lượng file không lớn hơn 3MB)</span></span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                   onChange={handleFileChange}/>
                        </label>
                        {selectedFile && <p className="text-sm text-gray-800 mt-1">{selectedFile.name}</p>}
                        {errorFile && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
                    </div>
                    {/* ... other fields ... */}
                    <div className="flex items-end justify-end">
                        <button
                            className="mr-4 bg-KCTBS-blue hover:bg-KCTBS-blue-bold text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                            disabled={processingCheck}
                        >
                            Ứng Tuyển
                        </button>
                        <button
                            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded"
                            type="button"
                            onClick={handleClose}
                        >
                            Bỏ qua
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
};
export default PopupComponent
