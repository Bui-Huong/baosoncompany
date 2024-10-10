import axios from "axios";
import masterHeader from "./master-header.jsx";
import {API_URL} from "./DefaultValue.jsx";
const getListPost = (data) => {
    return axios.get(API_URL + "JobManagement/GetAll?position="+data?.position+"&description="+data?.description,{ headers: masterHeader() });
};
const getDetailPost = (id) => {
    return axios.get(API_URL + "JobManagement/GetId?id="+id,{ headers: masterHeader() });
};
const postFilePost = (data,tokenKey) => {
    return axios.postForm(API_URL + "JobManagement/UploadFile",data,{ headers: masterHeader(tokenKey) });
};
const postTinNhan = (data,tokenKey) => {
    return axios.post(API_URL + "JobManagement/CreateMessage",data,{ headers: masterHeader(tokenKey) });
};
const getStatusCv = (data) => {
    return axios.get(API_URL + "JobManagement/GetStatusCv?codeTracking="+data,{ headers: masterHeader() });
};
const getListStatusCv = () => {
    return axios.get(API_URL + "JobManagement/GetListStatusCv",{ headers: masterHeader() });
};
export default {
    getListPost,
    getDetailPost,
    postFilePost,
    getStatusCv,
    getListStatusCv,
    postTinNhan
};
