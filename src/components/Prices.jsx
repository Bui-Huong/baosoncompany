import React, { useEffect, useRef } from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FcBarChart} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcFlowChart} from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";
import image1 from "./images/Chương trình đào tạo/Họp kĩ năng.jpg";
import image2 from "./images/Chương trình đào tạo/Ảnh đào tạo 2.jpg";
import image3 from "./images/Chương trình đào tạo/Ảnh đào tạo 3.jpg";
import dtcmnv from "./images/Chương trình đào tạo/Khối người lao động.jpg";
import dtnlkc from "./images/Chương trình đào tạo/Đào tạo.jpg";
import hinh1 from "./images/Chương trình đào tạo/Khối kinh doanh.jpg";
import so6 from "./images/Chương trình đào tạo/Hội thảo chia sẻ.jpg";
import Background from "./images/Background.png";
const Prices = () => {
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
    <div className="max-w-screen overflow-x-hidden font-poppins">
    {/*<div className="max-w-screen overflow-x-hidden font-poppins sticky bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${Background})`}}>*/}
      <div className="w-full py-[10rem] px-4  -mt-28">
        <div className="mx-auto mb-12 text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-KCTBS-blue sm:text-4xl md:text-[40px]">
                Công tác nguồn lực của KCTBS
            </h2>
            {/*<p className="text-lg text-KCTBS-blue">*/}
            {/*    Chính sách chăm sóc sức khoẻ của KCTBS được thiết kế đặc biệt để cán bộ nhân viên luôn có được thể trạng tốt nhất từ đó phát huy tính sáng tạo, nâng cao hiệu quả công việc:*/}
            {/*</p>*/}
        </div>
        <>
          {width <800 ? (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <div>
                  <Card
                    image={<img
                        src={image3}
                        alt="image1"
                        style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'280px' ,width:'100%'}}
                    />}
                    title={"Khối văn phòng kỹ thuật"}
                    content={"Khối văn phòng kỹ thuật đóng vai trò quan trọng trong việc thiết kế và quản lý dự án. Tinh thần đồng đội và hợp tác là nền tảng cho sự sáng tạo và năng suất cao, trong khi kinh nghiệm và chuyên môn của đội ngũ kỹ sư đảm bảo các giải pháp tối ưu cho từng dự án. Chúng tôi khuyến khích nhân viên liên tục cập nhật kiến thức mới và linh hoạt trong công việc, từ đó tạo ra những ý tưởng sáng tạo. Cam kết và trách nhiệm của mỗi thành viên không chỉ xây dựng môi trường làm việc tích cực mà còn củng cố lòng tin từ khách hàng, góp phần vào sự phát triển bền vững của công ty.\n" +
                          "\n"}
                  />
                </div>
                <div>
                  <Card
                      image={<img
                          src={hinh1}
                          alt="image1"
                          style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px' ,height:'380px',width:'100%'}}
                      />}
                      title={"Khối kinh doanh, kế toán"}
                      content={"Đảm bảo việc quản lý tài chính hiệu quả, từ việc lập kế hoạch ngân sách đến theo dõi chi phí và doanh thu. Đội ngũ kế toán viên chuyên nghiệp của chúng tôi cam kết cung cấp thông tin tài chính chính xác và kịp thời, giúp lãnh đạo đưa ra các quyết định chiến lược. Sự kết hợp giữa khối kinh doanh và kế toán không chỉ đảm bảo sự phát triển bền vững mà còn tạo điều kiện thuận lợi cho công ty trong việc đạt được các mục tiêu kinh doanh.\n" +
                          "\n"}
                  />
                </div>
                <div>
                  <Card
                      image={<img
                          src={dtcmnv}
                          alt="image1"
                          style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'280px',width:'200%' }}
                      />}
                      title={"Khối người lao động trực tiếp tham gia sản xuất\n"}
                      content={"Lực lượng chủ chốt, đóng góp trực tiếp vào việc tạo ra các sản phẩm chất lượng cao. Với tinh thần làm việc chăm chỉ, kỷ luật và trách nhiệm, họ không ngừng nỗ lực để đảm bảo tiến độ sản xuất, tuân thủ các tiêu chuẩn an toàn và chất lượng. Nhờ vào kinh nghiệm thực tế và kỹ năng kỹ thuật vững vàng, công nhân xưởng luôn hoàn thành tốt các nhiệm vụ, góp phần quan trọng vào sự thành công của mỗi dự án và sự phát triển của công ty.\n" +
                          "\n"}
                  />
                </div>
                  <div>
                      <Card
                          image={<img
                              src={image1}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'330px' , width: '380px'}}
                          />}
                          title={"Đào tạo, bồi dưỡng kỹ năng\n"}
                          content={"Các chương trình đào tạo kỹ năng được thiết kế gần gũi, thiết thực, mang tính thực chiến cao.\n" +
                              "\n"}
                      />
                  </div>
                  <div>
                      <Card
                          image={<img
                              src={dtnlkc}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'200px'}}
                          />}
                          title={"Đào tạo lực lượng cán bộ kế cận\n"}
                          content={"Chú trọng đào tạo các nhân sự được quy hoạch trở thành lực lượng quản lý, lãnh đạo kế cận, phục vụ nhu cầu phát triển dài hạn của Công ty và đảm bảo tính sẵn sàng cho hệ thống.\n" +
                              "\n"}
                      />
                  </div>
                  <div>
                      <Card
                          image={<img
                              src={so6}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'280px',width:'100%' }}
                          />}
                          title={"Hội thảo chia sẻ\n\n"}
                          content={"Các hội thảo chia sẻ kiến thức, kinh nghiệm,... được tổ chức định kỳ nhằm cung cấp một số thông tin bổ trợ theo chủ đề được cán bộ nhân viên quan tâm.\n" +
                              "\n"}
                      />
                  </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{alignItems:'center'}}>
                <motion.div
                  ref={ref}

                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                      image={<img
                          src={image3}
                          alt="image1"
                          style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'280px',width:'100%' }}
                      />}
                      title={"Khối văn phòng kỹ thuật"}
                      content={"Khối văn phòng kỹ thuật đóng vai trò quan trọng trong việc thiết kế và quản lý dự án. Tinh thần đồng đội và hợp tác là nền tảng cho sự sáng tạo và năng suất cao, trong khi kinh nghiệm và chuyên môn của đội ngũ kỹ sư đảm bảo các giải pháp tối ưu cho từng dự án. Chúng tôi khuyến khích nhân viên liên tục cập nhật kiến thức mới và linh hoạt trong công việc, từ đó tạo ra những ý tưởng sáng tạo. Cam kết và trách nhiệm của mỗi thành viên không chỉ xây dựng môi trường làm việc tích cực mà còn củng cố lòng tin từ khách hàng, góp phần vào sự phát triển bền vững của công ty.\n" +
                          "\n"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                      image={<img
                          src={hinh1}
                          alt="image1"
                          style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'360px',width:'90%' }}
                      />}
                      title={"Khối kinh doanh, kế toán"}
                      content={"Đảm bảo việc quản lý tài chính hiệu quả, từ việc lập kế hoạch ngân sách đến theo dõi chi phí và doanh thu. Đội ngũ kế toán viên chuyên nghiệp của chúng tôi cam kết cung cấp thông tin tài chính chính xác và kịp thời, giúp lãnh đạo đưa ra các quyết định chiến lược. Sự kết hợp giữa khối kinh doanh và kế toán không chỉ đảm bảo sự phát triển bền vững mà còn tạo điều kiện thuận lợi cho công ty trong việc đạt được các mục tiêu kinh doanh.\n" +
                          "\n"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                      image={<img
                          src={dtcmnv}
                          alt="image1"
                          style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'400px',width: '400px' }}
                      />}
                      title={"Khối người lao động trực tiếp tham gia sản xuất\n"}
                      content={"Lực lượng chủ chốt, đóng góp trực tiếp vào việc tạo ra các sản phẩm chất lượng cao. Với tinh thần làm việc chăm chỉ, kỷ luật và trách nhiệm, họ không ngừng nỗ lực để đảm bảo tiến độ sản xuất, tuân thủ các tiêu chuẩn an toàn và chất lượng. Nhờ vào kinh nghiệm thực tế và kỹ năng kỹ thuật vững vàng, công nhân xưởng luôn hoàn thành tốt các nhiệm vụ, góp phần quan trọng vào sự thành công của mỗi dự án và sự phát triển của công ty.\n" +
                          "\n"}
                  />
                </motion.div>
                  <motion.div
                      ref={ref}
                      variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                  >
                      <Card
                          image={<img
                              src={image1}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'320px', width: '380px'}}
                          />}
                          title={"Đào tạo, bồi dưỡng kỹ năng\n"}
                          content={"Các chương trình đào tạo kỹ năng được thiết kế gần gũi, thiết thực, mang tính thực chiến cao.\n" +
                              "\n"}
                      />
                  </motion.div>
                  <motion.div
                      ref={ref}
                      variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                  >
                      <Card
                          image={<img
                              src={dtnlkc}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'200px' }}
                          />}
                          title={"Đào tạo lực lượng cán bộ kế cận\n"}
                          content={"Chú trọng đào tạo các nhân sự được quy hoạch trở thành lực lượng quản lý, lãnh đạo kế cận, phục vụ nhu cầu phát triển dài hạn của Công ty và đảm bảo tính sẵn sàng cho hệ thống.\n" +
                              "\n"}
                      />
                  </motion.div>
                  <motion.div
                      ref={ref}
                      variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                  >
                      <Card
                          image={<img
                              src={so6}
                              alt="image1"
                              style={{ fontSize: '5rem',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',height:'280px' }}
                          />}
                          title={"Hội thảo chia sẻ\n\n"}
                          content={"Các hội thảo chia sẻ kiến thức, kinh nghiệm,... được tổ chức định kỳ nhằm cung cấp một số thông tin bổ trợ theo chủ đề được cán bộ nhân viên quan tâm.\n" +
                              "\n"}
                      />
                  </motion.div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};
export default Prices;

/* Card */

const Card = ({ standOutBg, marginMiddle,
    image,Feature1,title,content
  }) => {
    return (
      <div className={`w-full shadow-xl flex flex-col bg-white ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300 `} >
        <div className="w-200">
          {image}
        </div>
        <div style={{minHeight:'200px'}} className="font-medium">
          <p className="py-2 px-2 flex justify-between text-xl font-bold">
            {title}
          </p>
            <p className="py-2 px-2 flex">
            {content}
          </p>
        </div>
      </div>
    );
};
