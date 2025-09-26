import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import blog1 from "../images/blogs/bacsong.jpg";
import blog2 from "../images/blogs/chuchau.jpg";
import blog3 from "../images/blogs/trungquoc01.jpg";
import blog4 from "../images/blogs/nhatrang01.jpg";
import blog5 from "../images/blogs/vanphong.jpg";
import blog6 from "../images/blogs/bangiaodat.jpg";
import blog7 from "../images/blogs/SamSon01.jpg";
import videoKhoiCongNhaMay01 from "../images/Bảo Sơn Thái Nguyên/7052246591880.mp4";
import choThueNhaMay01 from "../images/Bảo Sơn Thái Nguyên/z7052318191209_82ec3f54e7a59550b3376efe04fb26d6.jpg";
import { motion } from "framer-motion";
const blogPosts = [
  {
    id: 1,
    title: "Nghỉ hưu của nhân viên",
    date: "2024-09-01",
    type: "image",
    src: blog1,
    description: "Cảm ơn bác Sóng đã đóng góp một phần không nhỏ trong quá trình phát triển của công ty.",
  },
  {
    id: 2,
    title: "Điều chuyển công tác",
    date: "2023-02-08",
    type: "image",
    src: blog2,
    description: "Chúc đồng chí Châu có thật nhiều thành công và sức khỏe trong công việc.",
  },
  {
    id: 3,
    title: "Sang Trung Quốc làm việc",
    date: "2023-06-17",
    type: "image",
    src: blog3,
    description: "Sang Trung Quốc làm việc.",
  },
  {
    id: 4,
    title: "Kì nghỉ Nha Trang",
    date: "2024-06-03",
    type: "image",
    src: blog4,
    description: "Kỷ niệm 25 năm cô cháu cùng làm việc. Phấn đấu 2 cô cháu làm việc cùng nhau 10 năm nữa thì về hưu.",
  },
  {
    id: 5,
    title: "Chuyển văn phòng mới Bảo Sơn",
    date: "2025-03-29",
    type: "image",
    src: blog5,
    description: "Thành công khi chúng ta càng ngày càng phát triển, đi cùng với đó sẽ là cơ sở vật chất khang trang hơn rất nhiều.",
  },
  {
    id: 6,
    title: "Ký hợp đồng thuê đất",
    date: "2025-04-29",
    type: "image",
    src: blog6,
    description: "Đánh dấu một bước tiến mới, hy vọng thế hệ tiếp nối sẽ tiếp bước, nỗ lực và đưa công ty lên một tầm cao mới.",
  },
  {
    id: 7,
    title: "Chuyến du lịch 2025",
    date: "2025-04-29",
    type: "image",
    src: blog7,
    description: "Du lịch Sầm Sơn cho cán bộ công nhân viên.",
  },
  {
    id: 8,
    title: "Khởi công xây dựng nhà máy Thái Nguyên",
    date: "2025-08-21",
    type: "video",
    src: videoKhoiCongNhaMay01, 
    description: "Nhà máy Bảo Sơn Thái Nguyên không chỉ là bước tiến vượt bậc trong sự phát triển của Bảo Sơn mà còn là bước đệm tâm huyết của thế hệ đi trước để lại cho thế hệ sau.",
  },
  {
    id: 9,
    title: "Cho thuê nhà máy tại Thái Nguyên",
    date: "2025-07-01",
    type: "image",
    src: choThueNhaMay01, 
    description: "Công ty chúng tôi đang có nhà xưởng rộng 32m dài 96m cao 9m tại Phú Bình Thái Nguyên cho thuê. Khách hàng có nhu cầu alo nhé. 0902250689",
  },
];
const TinTuc = () => {
    useEffect(() => {
        document.title="KCTBS | TinTuc";
    },[]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Sort bài viết theo ngày (mới → cũ)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };
  return (
    <>
    <Navbar />
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div class="container mx-auto">
          <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} 
                  class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <p className="text-lg text-gray-800">
                  ------------------------------------------------------------------------------------------------------------------------
                </p>
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Tin Tức Bảo Sơn
                </h2>
                <p className="text-lg text-gray-800">
                  Cùng nhau chia sẻ những cột mốc đáng nhớ của công ty.
                </p>
              </div>
            </div>
          </motion.div>
          <div class="-mx-4 flex flex-wrap">
            {
            currentPosts.map((post, index) => (
    <motion.div
      key={post.id}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 75 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: 0.2 + index * 0.2 }}
      className="w-full px-4 md:w-1/2 lg:w-1/3"
    >
      <div className="mx-auto mb-10 max-w-[370px]">
        <div className="mb-8 overflow-hidden rounded">
          {post.type === "image" ? (
            <img src={post.src} alt="image" className="w-full" />
          ) : (
            <video 
              className="w-[370px] h-[250px] object-cover rounded" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={post.src} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          )}
      </div>
        <div>
          <span className="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
            {new Date(post.date).toLocaleDateString("vi-VN", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
  })}
          </span>
          <h3>
            <a
              href="#"
              className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-body-color text-base">
            {post.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}

          </div>
        </div>
        <div className="flex justify-center space-x-1 dark:text-white">
  <button
    title="Previous"
    type="button"
    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
    className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500"
    disabled={currentPage === 1}
  >
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i + 1}
      onClick={() => handlePageChange(i + 1)}
      type="button"
      title={`Page ${i + 1}`}
      className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md ${
        currentPage === i + 1 ? "dark:bg-blue-700 dark:text-white" : "dark:bg-blue-500"
      }`}
    >
      {i + 1}
    </button>
  ))}

  <button
    title="Next"
    type="button"
    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
    className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500"
    disabled={currentPage === totalPages}
  >
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
</div>
      </section>
    <Footer />
    </>
  )
}
export default TinTuc;