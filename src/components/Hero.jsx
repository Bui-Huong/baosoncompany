import React from 'react';
import {motion} from 'framer-motion';
import  anh1 from './images/Ảnh trang chủ/Ảnh trang chủ 1.jpg';
import Background from "./images/Background.png";
function Hero() {
  return (
    <div className="font-poppins overflow-x-hidden bg-gradient-to-br">
     {/*<div className="font-poppins overflow-x-hidden  sticky bg-cover bg-center bg-repeat-y  w-full" style={{backgroundImage:`url(${Background})`}}>*/}
        <div className="relative pt-[120px] pb-[110px] lg:pt-[150px]"  >
            <div className="container mx-auto max-sm:px-2">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.75, delay: 0.25 }}
                            className=''
                            >
                            <h1 class="sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  xl:mt-20
                            font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">

                                Chào mừng bạn tới <br/>
                                <p class="text-gray-800 my-8 max-w-[700px] sm:text-base"></p>
                                <span className="sm:text-6x1 text-5xl xl:my-40 ">
                                 <span className='text-KCTBS-blue cursor-pointer my-40'>Kết Cấu Thép Bảo Sơn</span> <br/>
                                </span>

                            </h1>
                            <p class="text-gray-800 my-8 max-w-[700px] sm:text-base">
                            Công ty TNHH Thiết Bị và Kết Cấu Bảo Sơn, được thành lập vào năm 2012, là đơn vị hàng đầu trong lĩnh vực kết cấu thép, nhà tiền chế và hệ thống cầu trục tại Việt Nam. Với hơn một thập kỷ kinh nghiệm, chúng tôi chuyên cung cấp các giải pháp toàn diện về gia công kết cấu thép, xây dựng nhà xưởng hiện đại và thiết kế các hệ thống kết cấu thép công nghiệp, cầu trục.
                            </p>
                            <p class="text-gray-800 my-8 max-w-[700px] sm:text-base">
                            Dịch vụ của chúng tôi bao gồm tư vấn chuyên nghiệp, thiết kế, lắp đặt và bảo trì kết cấu thép và thiết bị nặng, đảm bảo tiêu chuẩn chất lượng cao và công nghệ tiên tiến. Danh mục sản phẩm của chúng tôi bao gồm các khung thép, nhà tiền chế và hệ thống cầu trục cho nhiều ứng dụng công nghiệp.
                            </p>
                            <p class="text-gray-800 my-8 max-w-[700px] sm:text-base">
                            Dưới sự dẫn dắt của ông Bùi Thiện Căn, chúng tôi tự hào mang đến các giải pháp công nghệ hiện đại và tùy chỉnh theo nhu cầu cụ thể của khách hàng. Với cơ sở sản xuất hiện đại và đội ngũ lao động tay nghề cao, chúng tôi cam kết chất lượng sản xuất hàng đầu và hoàn thành dự án đúng tiến độ.
                            </p>
                            <p class="text-gray-800 my-8 max-w-[700px] sm:text-base">
                            Chúng tôi luôn duy trì mối quan hệ lâu dài với các đối tác thông qua dịch vụ tư vấn, thiết kế và bảo trì xuất sắc.
                            </p>
                            <p class="text-gray-800 my-8 max-w-[700px] sm:text-base">
                            Tại Bảo Sơn, chúng tôi tin tưởng vào sự đổi mới, chất lượng và sự minh bạch, luôn đảm bảo đáp ứng các yêu cầu thay đổi của ngành xây dựng và công nghiệp.
                            </p>
                        </motion.div>
                        {/*<motion.div*/}
                        {/*    variants={{*/}
                        {/*        visible: { opacity: 1 },*/}
                        {/*        hidden: { opacity: 0 },*/}
                        {/*    }}*/}
                        {/*    initial="hidden"*/}
                        {/*    animate="visible"*/}
                        {/*    transition={{ duration: 0.75, delay: 0.25 }}*/}
                        {/*    class="clients pt-16"*/}
                        {/*    >*/}
                        {/*    <h6 class="text-body-color mb-2 flex items-center text-xs font-normal text-gray-800">*/}
                        {/*        <span className='text-KCTBS-blue cursor-pointer sm:text-xl text-xl'> Một số khách hàng-đối tác</span>*/}

                        {/*        <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>*/}
                        {/*    </h6>*/}
                        {/*    <div class="flex items-center">*/}
                        {/*    <div class="mr-4 w-full py-3">*/}
                        {/*            <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-vna.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div class="mr-4 w-full py-3">*/}
                        {/*            <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-skypec.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div class="mr-4 w-full py-3">*/}
                        {/*            <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-vasco.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div class="flex items-center">*/}
                        {/*        <div class="mr-4 w-full py-3">*/}
                        {/*            <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-sap.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div class="mr-4 w-full py-3">*/}
                        {/*        <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-oracle.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div class="mr-4 w-full py-3">*/}
                        {/*            <img src="https://KCTBS.vn/QUAN_TRI_WEB_KCTBS/Upload/Images/logo-fujisu.jpg" alt=""/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</motion.div>*/}
                    </div>
                    </div>

                   <div className="hidden lg:block"></div>

                    <div class="w-full lg:w-7/12 ">
                        <div class="lg:ml-auto lg:text-right">
                            <motion.div
                                variants={{
                                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.75, delay: 0.25 }}
                                class="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                                >
                                <img
                                    src={anh1}
                                    alt="hero"
                                    class="max-w-full lg:ml-auto rounded-l-[20%] "
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
