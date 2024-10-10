import React, { useEffect, useRef } from "react";
import {FcGenealogy} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcPositiveDynamic} from "react-icons/fc";
import {FcComboChart} from "react-icons/fc";
import {FcLineChart} from "react-icons/fc";
import {FcRadarPlot} from "react-icons/fc";
import {FaCheck} from "react-icons/fa";
import image1 from "./images/Chính sách phát triển nhân viên/Nhà xưởng, nhà tiền chế.jpg";
import image2 from "./images/Chính sách phát triển nhân viên/Cầu trục.jpg";
import image3 from "./images/Chính sách đãi ngộ/TD-Huoi-Quang-2.jpg";
import image4 from "./images/Chăm sóc sức khỏe/biển quảng cáo.jpg";
import image6 from "./images/Chăm sóc sức khỏe/máy cát.jpg";
import image5 from "./images/Chăm sóc sức khỏe/biển quảng cáo 2.jpg";
import {useAnimation, useInView, motion } from "framer-motion";
import Background from "./images/Background.png";

const Features = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  

  const mainControlls = useAnimation();
  const mainControlls1 = useAnimation();
  const mainControlls2 = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControlls.start("visible");
    }
    if (isInView1) {
      mainControlls1.start("visible");
    }
    if (isInView2) {
      mainControlls2.start("visible");
    }
  }, [isInView,isInView1,isInView2]);
  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200 "></div>
      {/*<div  className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins sticky bg-cover bg-center bg-repeat-y  w-full" style={{backgroundImage:`url(${Background})`}}>*/}
      <div  className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins w-full">
        {/* features section */}
        {width <800 ? (
          <>
            <section className=" text-gray-700">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                <div className="mx-auto mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-KCTBS-blue sm:text-4xl md:text-[40px]">
                      Sản phẩm - Dịch vụ
                    </h2>
                    <p className="text-lg text-KCTBS-blue">

                    </p>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                      Nhà xưởng, nhà tiền chế
                    </h3>
                    <p className="mt-6 font-thin ">
                        Chúng tôi tự hào là đơn vị chuyên nghiệp trong lĩnh vực thiết kế, sản xuất và lắp dựng nhà xưởng và nhà tiền chế cho nhiều ngành công nghiệp khác nhau. Nhà tiền chế do chúng tôi cung cấp được sản xuất từ kết cấu thép chất lượng cao, đảm bảo độ bền, tính linh hoạt và tối ưu hóa chi phí cho các dự án xây dựng.
                    </p>
                    <p className="mt-6 font-thin ">
                        Nhà tiền chế là giải pháp xây dựng hiện đại và hiệu quả, phù hợp cho các công trình như nhà kho, nhà máy sản xuất, xưởng công nghiệp và các khu phức hợp công nghiệp. Với ưu điểm vượt trội về thời gian thi công nhanh chóng, tiết kiệm chi phí và khả năng tùy chỉnh linh hoạt theo yêu cầu sử dụng, sản phẩm của chúng tôi mang đến sự tiện lợi tối đa cho các doanh nghiệp.
                    </p>
                    <div>
                      <div className="">
                        <div style={{textAlign: 'center'}}
                             className="font-medium">
                          <div>
                            <div style={{fontSize: '40px'}} className="text-KCTBS-yellow">
                              151+
                            </div>
                            <div>
                              Các dự án nhà tiền chế, nhà xưởng
                            </div>
                          </div>
                          <div>
                            <div style={{fontSize: '40px'}} className="text-KCTBS-yellow">
                              30+
                            </div>
                            <div>
                              Tỉnh thành đã đến và làm việc, đang sử dụng các dự án của công ty
                            </div>
                          </div>
                          <div>
                            <div style={{fontSize: '40px'}} className="text-KCTBS-yellow">
                              15
                            </div>
                            <div>
                              Năm kinh nghiệm làm việc trong nghề
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                        Cẩu trục
                      </h3>
                      <p className="mt-3  font-thin ">
                         Chúng tôi cung cấp các giải pháp cầu trục hiện đại và hiệu quả, đáp ứng nhu cầu nâng hạ và di chuyển hàng hóa trong các nhà máy, nhà xưởng và công trình công nghiệp. Với nhiều năm kinh nghiệm trong ngành, chúng tôi chuyên thiết kế, sản xuất và lắp đặt các loại cầu trục như cầu trục dầm đơn, cầu trục dầm đôi, cầu trục treo, và cầu trục quay, phục vụ cho nhiều mục đích sử dụng khác nhau.
                      </p>
                      <p className="mt-3  font-thin ">
                          Với cam kết:
                      </p>
                      <div className="mt-0">
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
                            {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                            {/*    Robust Analytical Capabilities*/}
                            {/*</h4>*/}

                            Khả năng vận hành ổn định, an toàn và hiệu quả.
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
                            {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                            {/*    Robust Analytical Capabilities*/}
                            {/*</h4>*/}

                            Tùy chỉnh với tải trọng đa dạng.
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
                          Dịch vụ tư vấn thiết kế cho đến lắp đặt và bảo trì chuyên nghiệp.
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
                          Tối ưu hóa năng suất và hiệu quả sản xuất.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                        Thủy điện:
                      </h3>
                      <p className="mt-3  font-thin ">
                          Chúng tôi đảm bảo các dự án thủy điện đạt tiêu chuẩn an toàn cao nhất, đồng thời tối ưu hóa hiệu suất vận hành và khả năng khai thác nguồn năng lượng tự nhiên. Chúng tôi cung cấp các dịch vụ thiết kế và lắp đặt thiết bị, bao gồm hệ thống tua-bin, máy phát điện và hệ thống điều khiển, đáp ứng đầy đủ các yêu cầu kỹ thuật của các dự án thủy điện ở nhiều quy mô khác nhau.
                      </p>
                      <div className="mt-12">
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
                          Vật liệu và thiết bị chất lượng cao.
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
                          Giải pháp tối ưu hóa chi phí.
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
                          Thời gian thi công nhanh chóng.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                          src={image3}
                          alt="image2"
                          className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                        Các sản phẩm khác của công ty
                      </h3>
                      <p className="mt-3 font-thin ">
                      Với kinh nghiệm và công nghệ tiên tiến, chúng tôi cung tham gia sản xuất các sản phẩm khác như:
                      </p>
                      <div className="mt-12">
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
                          Biển quảng cáo trên đường cao tốc
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
                          Cung cấp và chế tạo thiết bị phục vụ cho ngành xây dựng đạc thù như máy nghiền, máy đột, máy cắt, máy hàn,...
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
                          Chế tạo và cung cấp thiết bị tiêu chuẩn cho các dây chuyền sản xuất xi măng, tuyển khoáng, thủy điện, luyện & cán thép…
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
                          {/* <div className="ml-4 place-items-center">
                            Giảm giá vé máy bay cho bản thân và gia đình – Ưu đãi độc quyền trong ngành hàng không
                          </div> */}
                        </div><div className="flex"  style={{alignItems: 'center'}}>
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
                          {/* <div className="ml-4 place-items-center">
                            Chế độ tham quan, nghỉ mát hàng năm.
                          </div> */}
                        </div><div className="flex"  style={{alignItems: 'center'}}>
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
                          {/* <div className="ml-4 place-items-center">
                            Tham dự các hoạt động văn hóa đoàn thể quy mô lớn của Công ty và Tổng Công ty: VNA Spirit, Tự hào VNAers, …
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                          src={image4}
                          alt="image2"
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
            <section className=" text-gray-700 gap-8">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                    <div className="mx-auto mb-12 text-center lg:mb-20">
                        <h2 className="mb-4 text-3xl font-bold text-KCTBS-blue sm:text-4xl md:text-[40px]">
                            Sản phẩm - Dịch vụ
                        </h2>
                        <p className="text-lg">

                        </p>
                    </div>

                    <div  ref={ref1} className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                Nhà xưởng, nhà tiền chế
                            </h3>
                            <p className="mt-6 font-thin ">
                            Chúng tôi tự hào là đơn vị chuyên nghiệp trong lĩnh vực thiết kế, sản xuất và lắp dựng nhà xưởng và nhà tiền chế cho nhiều ngành công nghiệp khác nhau. Nhà tiền chế do chúng tôi cung cấp được sản xuất từ kết cấu thép chất lượng cao, đảm bảo độ bền, tính linh hoạt và tối ưu hóa chi phí cho các dự án xây dựng.
                            </p>
                            <p className="mt-6 font-thin ">
                            Nhà tiền chế là giải pháp xây dựng hiện đại và hiệu quả, phù hợp cho các công trình như nhà kho, nhà máy sản xuất, xưởng công nghiệp và các khu phức hợp công nghiệp. Với ưu điểm vượt trội về thời gian thi công nhanh chóng, tiết kiệm chi phí và khả năng tùy chỉnh linh hoạt theo yêu cầu sử dụng, sản phẩm của chúng tôi mang đến sự tiện lợi tối đa cho các doanh nghiệp.
                            </p>
                            <motion.div
                                variants={{
                                    hidden: {opacity: 0, x: 75},
                                    visible: {opacity: 1, x: 0},
                                }}
                                initial="hidden"
                                animate={mainControlls1}
                                transition={{duration: 0.5, delay: 0.15}}
                                aria-hidden="true"
                                className="mt-10 lg:mt-0"
                            >
                                <div className="mt-12 space-y-12 ">
                                    <div style={{textAlign: 'center', justifyContent: 'space-between', display: 'flex'}}
                                         className="font-medium">
                                        <div style={{width: '33%'}}>
                                            <div style={{fontSize: '40px', color: ''}} className="text-KCTBS-yellow">
                                                150+
                                            </div>
                                            <div>
                                                Các dự án nhà tiền chế, nhà xưởng
                                            </div>
                                        </div>
                                        <div style={{width: '33%'}}>
                                            <div style={{fontSize: '40px', color: ''}} className="text-KCTBS-yellow">
                                              30+
                                            </div>
                                            <div>
                                              Tỉnh thành đã đến và làm việc, đang sử dụng các dự án của công ty
                                            </div>
                                        </div>
                                        <div style={{width: '33%'}}>
                                            <div style={{fontSize: '40px', color: ''}} className="text-KCTBS-yellow">
                                              15
                                            </div>
                                            <div>
                                            Năm kinh nghiệm làm việc trong nghề
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
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
                                    src={image1}
                                    alt="image1"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div ref={ref2}>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                  Cẩu trục
                                </h3>
                                <p className="mt-3  font-thin ">
                                Chúng tôi cung cấp các giải pháp cầu trục hiện đại và hiệu quả, đáp ứng nhu cầu nâng hạ và di chuyển hàng hóa trong các nhà máy, nhà xưởng và công trình công nghiệp. Với nhiều năm kinh nghiệm trong ngành, chúng tôi chuyên thiết kế, sản xuất và lắp đặt các loại cầu trục như cầu trục dầm đơn, cầu trục dầm đôi, cầu trục treo, và cầu trục quay, phục vụ cho nhiều mục đích sử dụng khác nhau.
                                </p>
                                <p className="mt-3  font-thin ">
                                Với cam kết:
                                </p>
                                <div className="mt-0">
                                    <motion.div
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls2}
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
                                            {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                            {/*    Robust Analytical Capabilities*/}
                                            {/*</h4>*/}

                                            Khả năng vận hành ổn định, an toàn và hiệu quả.
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls2}
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
                                            {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                            {/*    Robust Analytical Capabilities*/}
                                            {/*</h4>*/}

                                            Tùy chỉnh với tải trọng đa dạng.
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls2}
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
                                          Dịch vụ tư vấn thiết kế cho đến lắp đặt và bảo trì chuyên nghiệp.
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls2}
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
                                        Tối ưu hóa năng suất và hiệu quả sản xuất.
                                        </div>
                                    </motion.div>
                                </div>
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
                                    src={image2}
                                    alt="image2"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                              Thủy điện:
                            </h3>
                            <p className="mt-3  font-thin ">
                                Chúng tôi đảm bảo các dự án thủy điện đạt tiêu chuẩn an toàn cao nhất, đồng thời tối ưu hóa hiệu suất vận hành và khả năng khai thác nguồn năng lượng tự nhiên. Chúng tôi cung cấp các dịch vụ thiết kế và lắp đặt thiết bị, bao gồm hệ thống tua-bin, máy phát điện và hệ thống điều khiển, đáp ứng đầy đủ các yêu cầu kỹ thuật của các dự án thủy điện ở nhiều quy mô khác nhau.
                            </p>
                            <div className="mt-12">
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
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
                                        {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                        {/*    Robust Analytical Capabilities*/}
                                        {/*</h4>*/}

                                        Vật liệu và thiết bị chất lượng cao.
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
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
                                        {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                        {/*    Robust Analytical Capabilities*/}
                                        {/*</h4>*/}

                                        Giải pháp tối ưu hóa chi phí.
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
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
                                    Thời gian thi công nhanh chóng.
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

                                {/*        Thưởng theo hiệu quả kinh doanh và theo thành tích thực hiện dự án/công việc*/}
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

                                {/*        Phúc lợi xã hội: Bảo hiểm xã hội / y tế /thất nghiệp…*/}
                                {/*    </div>*/}
                                {/*</motion.div>*/}
                            </div>
                        </div>
                        <div ref={ref}>
                            <motion.div
                                variants={{
                                    hidden: {opacity: 0, x: 75},
                                    visible: {opacity: 1, x: 0},
                                }}
                                initial="hidden"
                                animate={mainControlls}
                                transition={{duration: 0.5, delay: 0.25}}
                                aria-hidden="true"
                                className="mt-10 lg:mt-0"
                            >
                                <img
                                    src={image3}
                                    alt="image1"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-KCTBS-blue">
                                Các sản phẩm khác của công ty
                                </h3>
                                <p className="mt-3  font-thin ">
                                Với kinh nghiệm và công nghệ tiên tiến, chúng tôi cung tham gia sản xuất các sản phẩm khác như:
                                </p>
                                <div className="mt-12">
                                    <motion.div
                                        ref={ref}
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls}
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
                                            {/*<h4 className="text-lg font-medium leading-6 text-blue-700">*/}
                                            {/*    Robust Analytical Capabilities*/}
                                            {/*</h4>*/}

                                            Biển quảng cáo trên đường cao tốc
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        ref={ref}
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls}
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
                                        Cung cấp và chế tạo thiết bị phục vụ cho ngành xây dựng đạc thù như máy nghiền, máy đột, máy cắt, máy hàn,...
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        ref={ref}
                                        variants={{
                                            hidden: {opacity: 0, y: -75},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        initial="hidden"
                                        animate={mainControlls}
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
                                        Chế tạo và cung cấp thiết bị tiêu chuẩn cho các dây chuyền sản xuất xi măng, tuyển khoáng, thủy điện, luyện & cán thép…
                                        </div>
                                    </motion.div>
                                  <motion.div
                                      ref={ref}
                                      variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                      }}
                                      initial="hidden"
                                      animate={mainControlls}
                                      transition={{duration: 0.5, delay: 0.15}}
                                      className="flex"
                                      style={{alignItems: 'center'}}
                                  >
                                    <div className="flex-shrink-0">
                                      {/* <div
                                          className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                        <FaCheck size={"1rem"} style={{
                                          color: '#FBBF24',
                                          backgroundColor: '#FBBF241A',
                                          width: '30px',
                                          height: '30px',
                                          borderRadius: 30,
                                          padding: '6px'
                                        }}/>
                                      </div> */}
                                    </div>
                                    {/* <div className="ml-4 place-items-center">
                                      Giảm giá vé máy bay cho bản thân và gia đình – Ưu đãi độc quyền trong ngành hàng không
                                    </div> */}
                                  </motion.div>
                                  <motion.div
                                      ref={ref}
                                      variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                      }}
                                      initial="hidden"
                                      animate={mainControlls}
                                      transition={{duration: 0.5, delay: 0.15}}
                                      className="flex"
                                      style={{alignItems: 'center'}}
                                  >
                                    <div className="flex-shrink-0">
                                      {/* <div
                                          className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                        <FaCheck size={"1rem"} style={{
                                          color: '#FBBF24',
                                          backgroundColor: '#FBBF241A',
                                          width: '30px',
                                          height: '30px',
                                          borderRadius: 30,
                                          padding: '6px'
                                        }}/>
                                      </div> */}
                                    </div>
                                    {/* <div className="ml-4 place-items-center">
                                      Chế độ tham quan, nghỉ mát hàng năm.
                                    </div> */}
                                  </motion.div>
                                  <motion.div
                                      ref={ref}
                                      variants={{
                                        hidden: {opacity: 0, y: -75},
                                        visible: {opacity: 1, y: 0},
                                      }}
                                      initial="hidden"
                                      animate={mainControlls}
                                      transition={{duration: 0.5, delay: 0.15}}
                                      className="flex"
                                      style={{alignItems: 'center'}}
                                  >
                                    <div className="flex-shrink-0">
                                      {/* <div
                                          className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                                        <FaCheck size={"1rem"} style={{
                                          color: '#FBBF24',
                                          backgroundColor: '#FBBF241A',
                                          width: '30px',
                                          height: '30px',
                                          borderRadius: 30,
                                          padding: '6px'
                                        }}/>
                                      </div> */}
                                    </div>
                                    {/* <div className="ml-4 place-items-center">
                                      Tham dự các hoạt động văn hóa đoàn thể quy mô lớn của Công ty và Tổng Công ty: VNA Spirit, Tự hào VNAers, …
                                    </div> */}
                                  </motion.div>
                                </div>
                            </div>
                            <img
                                    src={image6}
                                    alt="image6"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                                <img
                                    src={image5}
                                    alt="image5"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                            <motion.div
                                ref={ref}
                                variants={{
                                    hidden: {opacity: 0, x: -75},
                                    visible: {opacity: 1, x: 0},
                                }}
                                initial="hidden"
                                animate={mainControlls}
                                transition={{duration: 0.5, delay: 0.15}}
                                className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                            >
                                <img
                                    src={image4}
                                    alt="image2"
                                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
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
        <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>
    </>
  );
};

export default Features;
