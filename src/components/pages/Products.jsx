import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import thietbi1 from "../images/Thiết Bị Sản Xuất/1.jpg";
import thietbi2 from "../images/Thiết Bị Sản Xuất/2.jpg";
import thietbi3 from "../images/Thiết Bị Sản Xuất/3.jpg";
import thietbi4 from "../images/Thiết Bị Sản Xuất/4.jpg";
import { motion } from "framer-motion";
const blogPosts = [
  {
    id: 1,
    title: "Máy cắt Laser Fiber - Model ULG26035C - 20000W",
    type: "image",
    images: [
      thietbi1,
    ],
    specs: [
      { name: "Độ dày cắt thép cacbon (khí oxy)", unit: "mm", value: "50" },
      { name: "Độ dày thép cacbon (khí nén)", unit: "mm", value: "20" },
      { name: "Độ dày inox (Khí nito)", unit: "mm", value: "40" },
      { name: "Độ dày inox (Khí nén)", unit: "mm", value: "40" },
    ],
  },

  {
    id: 3,
    title: "Máy phun bi làm sạch dầm H",
    type: "image",
    images: [
      thietbi3,
    ],
    specs: [
      { name: "Model", unit: "", value: "SBH 1020-10" },
      { name: "Thương hiệu", unit: "", value: "BRUCO" },
      { name: "Xuất xứ", unit: "", value: "Trung Quốc" },
      { name: "Kích thước cửa buồn phun", unit: "Chiều rộng buồng (mm)", value: "1500" },
      { name: "", unit: "Chiều cao buồng (mm)", value: "2200" },
      { name: "Kích thước vật gia công", unit: "Chiều rộng của phôi (mm)", value: "1000" },
      { name: "", unit: "Chiều cao của phôi (mm)", value: "2000" },
      { name: "", unit: "Chiều dài của phôi (mm)", value: "15000" },
      { name: "Đầu phun", unit: "Số đầu phun", value: "10" },
    ],
  },
  {
    id: 4,
    title: "Máy tổ hợp dầm đứng đa năng V-0815",
    type: "image",
    images: [
      thietbi4,
      //  thietbi2
    ],
    specs: [
      { name: "Model", unit: "", value: "V0815N" },
      { name: "Thương hiệu", unit: "", value: "BRUCO" },
      { name: "Xuất xứ", unit: "", value: "Việt Nam" },
      { name: "Chiều cao bụng dầm", unit: "mm", value: "200 - 1500" },
      { name: "Độ dày bụng dầm (chế độ nắn)", unit: "mm", value: "6 - 20 (Q235)" },
      { name: "Chiều rộng cánh dầm", unit: "mm", value: "150-800" },
      { name: "Độ dày cánh dầm (chế độ nắn)", unit: "mm", value: "6 - 20 (Q235)" },
      { name: "Chiều dài dầm", unit: "mm", value: "4000-15000" },
      { name: "Tốc độ làm việc (hàn)", unit: "Mm/phút", value: "200-1500mm/phút" },
      { name: "Thông số mối hàn lớn nhất", unit: "mm", value: "8" },
    ],
  },
  {
    id: 5,
    title: "Máy hàn tổ hợp dầm 3 trong 1",
    type: "image",
    images: [
      thietbi2
    ],
    specs: [
      { name: "Chiều cao bụng", unit: "mm", value: "200-1500" },
      { name: "Độ dày bụng", unit: "mm", value: "6-12" },
      { name: "Độ rộng cánh", unit: "mm", value: "150-800" },
      { name: "Độ dày cánh", unit: "mm", value: "6-20" },
      { name: "Chiều dài dầm H", unit: "mm", value: "4000-15000" },
      { name: "Tốc độ hàn", unit: "m/phút", value: "0.6-1.3" },
      { name: "Loại hồ quang", unit: "", value: "Chế độ hàn 1 dây 1 hồ quang độc lập" },

    ],
  },

];
const TinTuc = () => {
  useEffect(() => {
    document.title = "KCTBS | ThietBiSanXuat";
  }, []);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState({});
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
                  Thiết Bị Sản Xuất
                </h2>
                <p className="text-lg text-gray-800">
                  Máy móc tham gia vào quá trình sản xuất của công ty.
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
                  className="w-full px-4"
                >
                  <div className="mx-auto mb-16 max-w-7xl bg-white rounded-xl shadow-lg p-6">

                    <h3 className="text-3xl font-bold text-blue-700 mb-8">
                      {post.title}
                    </h3>

                    <div className="flex flex-col lg:flex-row gap-8">

                      {/* Ảnh */}
                      <div className="lg:w-1/2">
                        {post.type === "image" ? (
                          <div>
                            {/* Ảnh lớn */}
                            <img
                              src={post.images[selectedImage[post.id] ?? 0]}
                              alt={post.title}
                              className="w-full h-[500px] object-contain rounded-lg border shadow-md"
                            />

                            {/* Các ảnh nhỏ */}
                            <div className="flex gap-2 mt-3 flex-wrap">

                              {post.images.map((image, index) => (

                                <img
                                  key={index}
                                  src={image}
                                  alt={`${post.title}-${index}`}
                                  onClick={() =>
                                    setSelectedImage(prev => ({
                                      ...prev,
                                      [post.id]: index,
                                    }))
                                  }
                                  className={`w-24 h-24 object-cover rounded border-2 cursor-pointer transition-all

                ${(selectedImage[post.id] ?? 0) === index
                                      ? "border-blue-600"
                                      : "border-gray-300"
                                    }

            `}
                                />

                              ))}

                            </div>
                          </div>
                        ) : (
                          <video
                            className="w-full rounded-lg"
                            controls
                          >
                            <source src={post.src} type="video/mp4" />
                          </video>
                        )}
                      </div>

                      {/* Bảng thông số */}
                      <div className="lg:w-1/2 overflow-x-auto">

                        <table className="w-full border-collapse border border-gray-300">

                          <thead>

                            <tr className="bg-blue-600 text-white">

                              <th className="border p-3">Mô tả</th>

                              <th className="border p-3 w-24">
                                ĐVT
                              </th>

                              <th className="border p-3">
                                Thông số kỹ thuật
                              </th>

                            </tr>

                          </thead>

                          <tbody>

                            {post.specs.map((item, index) => (

                              <tr
                                key={index}
                                className="hover:bg-gray-100"
                              >

                                <td className="border p-3">
                                  {item.name}
                                </td>

                                <td className="border p-3 text-center">
                                  {item.unit}
                                </td>

                                <td className="border p-3">
                                  {item.value}
                                </td>

                              </tr>

                            ))}

                          </tbody>

                        </table>

                      </div>

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
              className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md ${currentPage === i + 1 ? "dark:bg-blue-700 dark:text-white" : "dark:bg-blue-500"
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