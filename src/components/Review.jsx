import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import A from './images/Reviews/Dương.jpg';
import B from './images/Reviews/Nhật.jpg';
import C from './images/Reviews/hải.jpg';
import D from './images/Reviews/TuanAnh.png';
import Background from "./images/Background.png";
const Review = () => {
    const { innerWidth: width, innerHeight: height } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
      // <div className="overflow-x-hidden max-w-screen font-poppins sticky bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(${Background})`}}>
      <div className="overflow-x-hidden max-w-screen font-poppins">
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
        <section className="">
          {width <800 ? (
              <>
                <div className="container px-6 py-12 mx-auto">
                  <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div
                        className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                      <h2 className="text-4xl font-bold text-KCTBS-blue">
                        Mọi người nói gì về KCTBS
                      </h2>
                      <p className="text-black">
                        Một số điều mọi người nói về trải nghiệm tại KCTBS!
                      </p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid content-center gap-4">
                          <div className="p-6 rounded shadow-md bg-white">
                            <p className="italic">
                                KCTBS là một môi trường đáng để trải nghiệm, ở đây luôn đề cao công tác đào tạo từ văn hóa, chuyên môn nghiệp vụ đến các kỹ năng mềm. Tôi đã học và trưởng thành hơn sau hơn 5 năm làm việc tại đây. Cơ hội được làm việc trực tiếp với Ban điều hành, ban lãnh đạo, tiếp xúc với người có tầm nhìn lớn không phải ở đâu bạn cũng có thể được trải nghiệm, là một cơ hội học hỏi rất quý báu.
                            </p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img
                                  src={A}
                                  alt="profile"
                                  className="w-12 h-12 bg-center bg-cover rounded-full "
                              />
                              <div>
                                <p className="text-md font-semibold">Bùi Thùy Dương</p>
                                <p className="text-sm text-gray-400"> Phát triển sản phẩm</p>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-6 rounded shadow-md bg-white">
                              <p className="italic">
                              Tôi cảm nhận rõ rệt sự quan trọng của vai trò mình trong quá trình sản xuất. Mỗi ngày, tôi cùng đồng nghiệp thực hiện các công đoạn từ chế tạo, lắp ráp đến kiểm tra chất lượng sản phẩm, đảm bảo mọi chi tiết đều đạt tiêu chuẩn cao nhất. Qua từng nhiệm vụ, tôi không chỉ rèn luyện kỹ năng kỹ thuật mà còn học hỏi thêm về quy trình sản xuất và an toàn lao động.</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img
                                  src={D}
                                  alt=""
                                  className="w-12 h-12 bg-center bg-cover rounded-full "
                              />
                              <div>
                                <p className="text-md font-semibold">
                                    Phạm Tuấn Anh
                                </p>
                                <p className="text-sm dark:text-gray-400">
                                    Tổ Trưởng công xưởng
                                </p>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid content-center gap-4">
                          <div className="p-6 rounded shadow-md bg-white">
                              <p className="italic">
                              Nhờ vào môi trường làm việc chuyên nghiệp và sự hỗ trợ từ các đồng nghiệp, tôi đã có cơ hội nâng cao kỹ năng phân tích tài chính và quản lý ngân sách. Bên cạnh đó, chúng tôi luôn được khuyến khích áp dụng công nghệ mới vào quy trình kế toán để đảm bảo công việc được thực hiện nhanh chóng, hiệu quả và chính xác hơn. Mỗi ngày làm việc là một trải nghiệm thực tế giúp tôi cải thiện bản thân và đóng góp vào sự phát triển bền vững của công ty.</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img
                                  src={C}
                                  alt=""
                                  className="w-12 h-12 bg-center bg-cover rounded-full "
                              />
                              <div>
                                <p className="text-md font-semibold">
                                    Nguyễn Thị Hải
                                </p>
                                <p className="text-sm dark:text-gray-400">TP.Kế toán</p>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-6 rounded shadow-md bg-white">
                              <p className="italic">KCTBS cho tôi cơ hội được trải nghiệm và thực chiến ở một lĩnh vực cần nhiều sự tỉ mỉ, chỉn chu.
                                  Tôi nhận thấy KCTBS là nơi lý tưởng để phát triển sự nghiệp của mình.</p>
                              <div className="flex items-center mt-4 space-x-4">
                              <img
                                  src={B}
                                  alt=""
                                  className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                              />
                              <div>
                                <p className="text-md font-semibold">
                                    Trần Thành Nhật
                                </p>
                                <p className="text-sm dark:text-gray-400">TP.kỹ thuật viên</p>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
          ) : (
              <>
                <div className="container px-6 py-12 mx-auto">
                  <div className="grid items-center gap-4 xl:grid-cols-5">
                    <motion.div
                        ref={ref}
                        variants={{
                          hidden: {opacity: 0},
                          visible: {opacity: 1},
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration: 0.5, delay: 0.25}}
                        className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8  space-y-4 text-center xl:col-span-2 xl:text-left"
                    >
                      <h2 className="text-4xl font-bold text-KCTBS-blue">
                        Mọi người nói gì về KCTBS
                      </h2>
                      <p className="text-gray-800">
                          Một số trải nghiệm thực tế của các thành viên đang làm việc tại KCTBS!
                      </p>
                    </motion.div>
                    <div className="p-6 xl:col-span-3">
                      <div className="grid gap-4 md:grid-cols-2">

                        <div className="grid content-center gap-4">
                          <motion.div
                              ref={ref}
                              variants={{
                                hidden: {opacity: 0, x: -75, y: -45},
                                visible: {opacity: 1, x: 0, y: 0},
                              }}
                              initial="hidden"
                              animate={mainControlls}
                              transition={{duration: 0.6, delay: 0.15}}
                              className="p-6 rounded-lg shadow-lg bg-white mt-6"
                          >
                            <p className="italic">
                            Công việc không chỉ đơn thuần là quản lý các con số mà còn là quá trình liên tục học hỏi và phát triển. Chúng tôi chịu trách nhiệm đảm bảo tính chính xác của các báo cáo tài chính, từ việc theo dõi chi phí đến lập kế hoạch ngân sách và đối chiếu sổ sách hàng tháng.

                            </p>
                            <div className="flex justify-between items-center mt-4 space-x-4">
                              <div className="flex">
                                <img
                                    src={A}
                                    alt=""
                                    className="w-12 h-12 bg-center bg-cover rounded-full "
                                />
                                <div className="flex-col ml-4">
                                  <p className="text-lg font-semibold block">
                                    Bùi Thùy Dương
                                  </p>
                                  <p className="text-sm text-gray-400 block">
                                    Nhân viên kế toán
                                  </p>
                                </div>
                              </div>

                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                              ref={ref}
                              variants={{
                                hidden: {opacity: 0, x: -75, y: 45},
                                visible: {opacity: 1, x: 0, y: 0},
                              }}
                              initial="hidden"
                              animate={mainControlls}
                              transition={{duration: 0.6, delay: 0.35}}
                              className="p-6 rounded-lg shadow-lg bg-white "
                          >
                            <p className="italic">
                            Tôi cảm nhận rõ rệt sự quan trọng của vai trò mình trong quá trình sản xuất. Mỗi ngày, tôi cùng đồng nghiệp thực hiện các công đoạn từ chế tạo, lắp ráp đến kiểm tra chất lượng sản phẩm, đảm bảo mọi chi tiết đều đạt tiêu chuẩn cao nhất. Qua từng nhiệm vụ, tôi không chỉ rèn luyện kỹ năng kỹ thuật mà còn học hỏi thêm về quy trình sản xuất và an toàn lao động.</p>
                            <div className="flex items-center justify-between mt-4 space-x-4">
                              <div className="flex">
                                <img
                                    src={D}
                                    alt=""
                                    className="w-12 h-12 bg-center bg-cover rounded-full "
                                />
                                <div className="flex-col sm:ml-2 ">
                                  <p className="text-lg font-semibold block">
                                    Phạm Tuấn Anh
                                  </p>
                                  <p className="text-sm text-gray-400 block">
                                    Tổ trưởng công xưởng
                                  </p>
                                </div>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        <div className="grid content-center gap-4">
                          <motion.div
                              ref={ref}
                              variants={{
                                hidden: {opacity: 0, x: 75, y: -45},
                                visible: {opacity: 1, x: 0, y: 0},
                              }}
                              initial="hidden"
                              animate={mainControlls}
                              transition={{duration: 0.7, delay: 0.55}}
                              className="p-6 rounded-lg shadow-lg bg-white"
                          >
                            <p className="italic">
                            Nhờ vào môi trường làm việc chuyên nghiệp và sự hỗ trợ từ các đồng nghiệp, tôi đã có cơ hội nâng cao kỹ năng phân tích tài chính và quản lý ngân sách. Bên cạnh đó, chúng tôi luôn được khuyến khích áp dụng công nghệ mới vào quy trình kế toán để đảm bảo công việc được thực hiện nhanh chóng, hiệu quả và chính xác hơn. Mỗi ngày làm việc là một trải nghiệm thực tế giúp tôi cải thiện bản thân và đóng góp vào sự phát triển bền vững của công ty.</p>
                            <div className="flex justify-between items-center mt-2 space-x-4">
                              <div className="flex">
                                <img
                                    src={C}
                                    alt=""
                                    className="w-12 h-12 bg-center bg-cover rounded-full "
                                />
                                <div className="flex-col ml-4">
                                  <p className="text-lg font-semibold block">
                                    Nguyễn Thị Hải
                                  </p>
                                  <p className="text-sm text-gray-400 block">
                                  TP.Kế toán
                                  </p>
                                </div>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                              ref={ref}
                              variants={{
                                hidden: {opacity: 0, x: 75, y: 45},
                                visible: {opacity: 1, x: 0, y: 0},
                              }}
                              initial="hidden"
                              animate={mainControlls}
                              transition={{duration: 0.8, delay: 0.75}}
                              className="p-6 rounded-lg shadow-lg bg-white"
                          >
                            <p className="italic">KCTBS cho tôi cơ hội được trải nghiệm và thực chiến ở một lĩnh vực cần nhiều sự tỉ mỉ, chỉn chu.
                                Tôi nhận thấy KCTBS là nơi lý tưởng để phát triển sự nghiệp của mình.</p>
                            <div className="flex justify-between items-center mt-4 space-x-4">
                              <div className="flex">
                                <img
                                    src={B}
                                    alt=""
                                    className="w-12 h-12 bg-center bg-cover rounded-full "
                                />
                                <div className="flex-col ml-4">
                                  <p className="text-lg font-semibold block">
                                    Trần Thành Nhật
                                  </p>
                                  <p className="text-sm text-gray-400 block">
                                  TP.Kỹ thuật
                                  </p>
                                </div>
                              </div>
                              <div className="flex">
                                <MdVerified
                                    size={width <800 ? 35 : 40}
                                    className="text-KCTBS-blue ml-2"
                                />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
          )}
        </section>
      </div>
  );
};

export default Review;
