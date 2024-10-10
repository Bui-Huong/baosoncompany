import {useState, useCallback, useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import CustomStepper from "./helpers/CustomStepper.jsx";
import MasterService from "./service/master.service.jsx";
import masterService from "./service/master.service.jsx";

//const RECAPTCHA_SITE_KEY = "6LdEn5QpAAAAAP_ldZCeWhdZ886Y1LsqyVY1Ckf8"; // Replace with your actual site key
// const RECAPTCHA_SITE_KEY = "6LdEn5QpAAAAAEsLmxBzNa2xF7HN8ermJ9tQNzs4"; // Replace with your actual site key
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Replace with your actual site key

const SearchBoxWithReCAPTCHA = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isVerified, setIsVerified] = useState(true);
    const [dataStatus, setDataStatus] = useState(null);
    const [seachEnable, setSearchEnable] = useState(false);
    const [listStatusCv, setListStatusCv] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    useEffect(()=>{
        setSearchEnable(false);
    },[])
    const onReCAPTCHAChange = useCallback(value => {
        // Here you would verify the received reCAPTCHA value with your backend
        console.log("Captcha value:", value);
        setIsVerified(true); // You should verify it before setting `isVerified` to true
    }, []);
    const handleSubmit = (e) => {
        setSearchEnable(true);
        e.preventDefault();
        if (isVerified) {
            masterService.getStatusCv(searchTerm).then(
                (data) => {
                    setDataStatus(data?.data?.result);
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
            console.log("Search term:", searchTerm);
        } else {
            // Alert the user that they must complete the reCAPTCHA
            alert("Please verify that you are a human!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="text-KCTBS-blue font-bold">
                    Tra cứu hồ sơ ứng tuyển
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Mã hồ sơ..."
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button
                        className="flex-shrink-0 bg-KCTBS-blue hover:bg-KCTBS-blue-bold border-KCTBS-blue hover:border-KCTBS-blue-bold text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Tìm kiếm
                    </button>
                </div>
                {seachEnable &&
                <div className="mt-4">
                    {dataStatus!=null ?
                    <CustomStepper data={dataStatus} />:(
                        <div style={{color:'gray'}}>
                            Không có dữ liệu tìm kiếm!
                        </div>
                        )
                    }
                    {/*<ReCAPTCHA*/}
                    {/*    sitekey={RECAPTCHA_SITE_KEY}*/}
                    {/*    onChange={onReCAPTCHAChange}*/}
                    {/*/>*/}
                </div>
                }
            </form>
        </div>
    );
};

export default SearchBoxWithReCAPTCHA;
