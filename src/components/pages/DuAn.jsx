import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { motion } from "framer-motion";
import bannerngang from "../images/55b3cc2d-1325-4b3b-9425-e6709b37b333.jfif";
import bannerngang1 from "../images/05725818-c9df-4357-b3bf-3c7e7ac7c122.jfif";
import bannerngang2 from "../images/26858962-14d4-4eff-910a-72da6539ebd9.jfif";
import bannerngang3 from "../images/ac699f37-15ca-4c8e-b602-4a7edd5b1ddf.jfif";
import bannerngang4 from "../images/2d1ca6fa-1d2f-4f34-9dc4-2b043509a890.jfif";
import bannerngang5 from "../images/d3b50b93-a92e-4afe-9dff-88cbea4e7764.jfif";
import Background from "../images/Background.png";
import giaBinh01 from "../images/Gia Bình/z7052199866591_3ce3e3f721b15c1ad2a44036c1d2630f.jpg";
import mizen01 from "../images/Mizen/z7052199936254_cb017764f0a318ba1936c3677a34099f.jpg";
import mungLienHa01 from "../images/Mừng Liên Hà/z7052200201612_7da65df7c113a7d5d725b5232efd2293.jpg";
import thachThat01 from "../images/Thạch Thất/z7052199989301_1c155f28eb35490feefe34738a3739b4.jpg";

const projectPosts = [
  {
    id: 1,
    title: "Nhà máy Gia Bình",
    date: "2024-09-01",
    type: "image",
    src: giaBinh01,
    region: "Miền Bắc",
    description: "Nhà máy sản xuất kết cấu thép tại khu công nghiệp Gia Bình.",
  },
  {
    id: 2,
    title: "Khu công nghiệp Nguyên Khê",
    date: "2025-01-12",
    type: "image",
    src: mizen01,
    region: "Miền Trung",
    description: "Dự án xây dựng hạ tầng KCN Mizen.",
  },
  {
    id: 3,
    title: "Nhà xưởng Liên Hà",
    date: "2025-03-21",
    type: "image",
    src: mungLienHa01,
    region: "Miền Nam",
    description: "Nhà xưởng sản xuất và kho bãi tại Liên Hà.",
  },
  {
    id: 4,
    title: "Nhà ở Thạch thất",
    date: "2025-05-21",
    type: "image",
    src: thachThat01,
    region: "Miền Bắc",
    description: "Nhà ở tại Thạch Thất.",
  },
];

const images = [
  bannerngang,
  bannerngang1,
  bannerngang2,
  bannerngang3,
  bannerngang4,
  bannerngang5,
];

const DuAn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [position, setPosition] = useState(""); // lọc theo region
  const [description, setDescription] = useState(""); // tìm kiếm theo title
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // ✅ Lọc dữ liệu dự án
  const filteredProjects = projectPosts.filter((p) => {
    const matchTitle = p.title.toLowerCase().includes(description.toLowerCase());
    const matchRegion = position ? p.region === position : true;
    return matchTitle && matchRegion;
  });

  // ✅ Sắp xếp theo ngày mới nhất
  const sortedPosts = [...filteredProjects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // ✅ Phân trang
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  // ✅ Chạy banner tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "KCTBS | Dự Án Và Sản Phẩm";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="max-w-screen overflow-x-hidden overflow-y-hidden font-poppins mt-16 sticky bg-cover bg-center bg-no-repeat w-full min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <section>
          {/* ✅ Banner */}
          <div
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              transition: "background-image 1s ease-in-out",
            }}
            className="sticky bg-cover bg-center bg-no-repeat h-[400px] container max-w-xl p-6 py-24 mx-auto lg:px-8 lg:max-w-7xl rounded-b-3xl"
          >
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-wrap"
            >
              <div className="w-full">
                <div className="mx-auto max-w-[510px] text-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                    Dự án của công ty
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* ✅ Thanh tìm kiếm + filter */}
            <div className="p-4 flex justify-between items-center rounded">
              <input
                type="text"
                placeholder="Tên dự án"
                style={{ width: "60%", marginRight: "8px" }}
                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <select
                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="">Tất cả khu vực</option>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Nam">Miền Nam</option>
              </select>
            </div>
          </div>

          {/* ✅ Danh sách dự án */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => alert(`Đi tới chi tiết dự án: ${post.title}`)}
              >
                {post.type === "image" ? (
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <video
                    src={post.src}
                    className="w-full h-80 object-cover"
                    autoPlay
                    loop
                    muted
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    {post.date} • {post.region}
                  </p>
                  <p className="text-sm mt-2">{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Pagination */}
          <div className="flex justify-center items-center space-x-2 pb-8">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              «
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              »
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DuAn;
