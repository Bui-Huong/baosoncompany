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
import giaBinh01 from "../images/Gia Bình/z7052199856120_f719a2585b135812a0535ac909fc5b8b.jpg";
import giaBinh02 from "../images/Gia Bình/z7052199863954_df1f483ada1d3b4927d692d5fa8ce6df.jpg";
import giaBinh03 from "../images/Gia Bình/z7052199866591_3ce3e3f721b15c1ad2a44036c1d2630f.jpg";
import giaBinh05 from "../images/Gia Bình/z7052200088492_110a257760bd4cb30cde968c87d14173.jpg";
import mizen01 from "../images/Mizen/z7052199932022_786a0a2d7e7d58de164401c80c4e24d1.jpg";
import mizen02 from "../images/Mizen/z7052199936254_cb017764f0a318ba1936c3677a34099f.jpg";
import mizen03 from "../images/Mizen/z7052199945702_b62253ece7ec1725741738558d172583.jpg";
import mizen04 from "../images/Mizen/z7052199945972_d7279eb47f6d3686a542a0926211e18c.jpg";
import mizen05 from "../images/Mizen/z7052199955352_8d35e9c552b4c93be2cd31ee217aaf84.jpg";
import mungLienHa01 from "../images/Mừng Liên Hà/z7052200201612_7da65df7c113a7d5d725b5232efd2293.jpg";
import thachThat01 from "../images/Thạch Thất/z7052199963070_d12e0b5104fdf614f834748519a3ee7e.jpg";
import thachThat02 from "../images/Thạch Thất/z7052199970541_2424d59714ab3a97b9c4706b65a617bc.jpg";
import thachThat03 from "../images/Thạch Thất/z7052199978141_ce21cf0d7a27fec60af67f84605b4c8a.jpg";
import thachThat04 from "../images/Thạch Thất/z7052199978402_90d7d4c40f8082eeb0a96f2414110930.jpg";
import thachThat05 from "../images/Thạch Thất/z7052199989301_1c155f28eb35490feefe34738a3739b4.jpg";
import thachThat06 from "../images/Thạch Thất/z7052199995080_860f3187037023ea748727c6f3beecf7.jpg";
import giaBinh06 from "../images/Gia Bình/z7392535516298_fad69e7408aac28cfacf0372a9d182c4.jpg";
import giaBinh07 from "../images/Gia Bình/z7392535517744_25f74c25e7a8056befbfa55043b83e53.jpg";
import giaBinh08 from "../images/Gia Bình/z7392535524099_a1211e2639a74d0182d2677e56b15f23.jpg";
import giaBinh09 from "../images/Gia Bình/z7392535524219_2ead3c6009e68dc2fe515b9ee37f6b4d.jpg";
import giaBinh10 from "../images/Gia Bình/z7392535524361_9f4843b6ff0341d9470220f5040b88a2.jpg";
import giaBinh11 from "../images/Gia Bình/z7392535526467_d8529af3a749464206ab6e58319394a3.jpg";
import giaBinh12 from "../images/Gia Bình/z7392535532031_dd2a2c26e1b5896941c314647c8e8c09.jpg";
import giaBinh13 from "../images/Gia Bình/z7392535532273_8d59498fe524e11856164148137f99e7.jpg";
import giaBinh14 from "../images/Gia Bình/z7392535533877_28771d0513e8cef89ec0d42303a45f9d.jpg";
import giaBinh15 from "../images/Gia Bình/z7392535534773_434b94489df477c1cbbea051b5b3958d.jpg";
import giaBinh16 from "../images/Gia Bình/z7392535545447_39fa0ea2b0ad229b77e00f96d796f2cc.jpg";
import giaBinh17 from "../images/Gia Bình/z7392535545681_63486bcdf26ec99dba3f1f1f5268d56d.jpg";
import giaBinh18 from "../images/Gia Bình/z7392535546135_05b94c32fec946a4386d9c57e614236b.jpg";
import giaBinh19 from "../images/Gia Bình/z7392535547084_083d01ef3cd2d8476a23f1acc40129ce.jpg";
import giaBinh20 from "../images/Gia Bình/z7392535556521_03941c028a7d1753eb97ca336beec0c8.jpg";
import giaBinh21 from "../images/Gia Bình/z7392535558815_98756f4b9cd4a959fddc30bf854793f0.jpg";
import giaBinh22 from "../images/Gia Bình/z7392535565400_893222b47b5b71ba49f30180dd268c99.jpg";
import giaBinh23 from "../images/Gia Bình/z7392535568268_43e012e2bda00f8c150b7da9d41cdc22.jpg";
import phuongtrang01 from "../images/Phuong Trang/z7392665790962_5e16b87c75a5ec10eb0219a662b70f82.jpg";
import phuongtrang02 from "../images/Phuong Trang/z7392665794191_893425c47ea4a5a4ec64063df12f8b68.jpg";
import phuongtrang03 from "../images/Phuong Trang/z7392665803028_856e4667f8ee8dcd8ddaef50cae19bfd.jpg";
import phuongtrang04 from "../images/Phuong Trang/z7392665803154_ca27aecc7ade4aa142997fee0a315285.jpg";
import phuongtrang05 from "../images/Phuong Trang/z7392665803259_785343b98f1567b1839e5b45a34450b5.jpg";
import phuongtrang06 from "../images/Phuong Trang/z7392665866122_1dec274aef24763e42d0fc792eacc47a.jpg";
import phuongtrang07 from "../images/Phuong Trang/z7392665867420_d5e85b303179dcc304dcc39a17530fc6.jpg";
import phuongtrang08 from "../images/Phuong Trang/z7392665869686_b83bda1d0e9c49682d82535923766178.jpg";
import phuongtrang09 from "../images/Phuong Trang/z7392665872558_054b75cfa85bdd048fc613eb1fd5f674.jpg";
import phuongtrang10 from "../images/Phuong Trang/z7392665875821_55bffcfc9296e6d9ab2fd4ab7c99d5e0.jpg";
import phuongtrang11 from "../images/Phuong Trang/z7392665875921_58659fb8a9e81c03a9e26123dda02090.jpg";
import phuongtrang12 from "../images/Phuong Trang/z7392665892002_81a8a027b7879dd2d36c2c67291450e3.jpg";
import quangtuan01 from "../images/Quang Tuan/z7392540822413_a4fdc3366d37bb834fef2cf62f53920a.jpg";
import quangtuan02 from "../images/Quang Tuan/z7392540822848_0d7bdcbc2b112a268e5b8acfa3444698.jpg";
import quangtuan03 from "../images/Quang Tuan/z7392540827104_08641659877e7dfe33b9d8b46412ffaf.jpg";
import quangtuan04 from "../images/Quang Tuan/z7392540851372_36e2e61c61dae4c97ecfc3ce70ebcdd8.jpg";
import quangtuan05 from "../images/Quang Tuan/z7392540852040_84d9182fa2963b32c6d5c66d2e37a974.jpg";
import quangtuan06 from "../images/Quang Tuan/z7392540856391_1bdb81efe600c5f28d9fe96beae0de48.jpg";
import quangtuan07 from "../images/Quang Tuan/z7392540860962_3bf5d362d9f725ffa3ab9cb227c0a273.jpg";
import quangtuan08 from "../images/Quang Tuan/z7392540861275_8cbde24f0befc9500608c87da3b5c028.jpg";




const projectPosts = [
  {
    id: 1,
    title: "Công trình máy Gia Bình",
    date: "2024-09-01",
    type: "image",
    src: [giaBinh01, giaBinh02, giaBinh03, giaBinh05,giaBinh06,giaBinh07,giaBinh08,giaBinh09,giaBinh10,giaBinh11,giaBinh12,giaBinh13,giaBinh14,giaBinh15,giaBinh16,giaBinh17,giaBinh18,giaBinh19,giaBinh20,giaBinh21,giaBinh22,giaBinh23],
    region: "Miền Bắc",
    description: "Nhà máy sản xuất kết cấu thép tại khu công nghiệp Gia Bình.\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép Q345(hoặc tương đương)- chưa qua sử dụng.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.\n\n"+
    "Sơn 01 lớp chống rỉ và 02 lớp trang trí màu ghi sáng (Son THHN hệ ALkyd) bằng phương pháp sơn phun áp lực cao.\n\n"+
    "Địa điểm sản xuất: Thôn Quảng Hội, Xã Nội Bài, Thành phố Hà Nội.\n\n"+
    "Địa điểm lắp dựng: Lô CN-05.3. Khu công nghiệp Gia Bình, xã Đại Bái, Tỉnh Bắc Ninh.\n\n"+
    "Giá trị hợp đồng 8.536.000.000 VND",
  },
  {
    id: 2,
    title: "Khu công nghiệp Nguyên Khê",
    date: "2025-01-12",
    type: "image",
    src: [mizen01, mizen02, mizen03, mizen04, mizen05],
    region: "Miền Bắc",
    description: "Dự án xây dựng hạ tầng KCN Mizen..\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép SS400(hoặc tương đương)- mới 100%.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.\n\n"+
    "Giá trị hợp đồng 1: 1.490.000.000 VND, hợp đồng 2: 195.000.000 VND, hợp đồng 3: 415.187.000 VND, ",
  },
  {
    id: 3,
    title: "Công trình xưởng Liên Hà",
    date: "2025-03-21",
    type: "image",
    src: mungLienHa01,
    region: "Miền Bắc",
    description: "Nhà xưởng sản xuất và kho bãi tại Liên Hà.\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép SS400(hoặc tương đương)- mới 100%.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.\n\n"+
    "Giá trị hợp đồng: 766.000.000 VND",
  },
  {
    id: 4,
    title: "Công trình ở Thạch thất",
    date: "2025-05-21",
    type: "image",
    src: [thachThat01, thachThat02, thachThat03, thachThat04, thachThat05, thachThat06],
    region: "Miền Bắc",
    description: "Nhà ở tại Thạch Thất.\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép SS400(hoặc tương đương)- mới 100%.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.",
  },
  {
    id: 5,
    title: "Công trình Phương Trang",
    date: "2025-12-1",
    type: "image",
    src: [phuongtrang01, phuongtrang02, phuongtrang03, phuongtrang04, phuongtrang05, phuongtrang06,phuongtrang07,phuongtrang08,phuongtrang09,phuongtrang10,phuongtrang11,phuongtrang12],
    region: "Miền Bắc",
    description: "khu công nghiệp Phạm Ngũ Lão. Sản xuất, vận chuyển và lắp dựng kết cấu thép nhà xưởng K21 L82.5 H6.8 B7.5.\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép Q345(hoặc tương đương)- mới 100%.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.\n\n"+
    "Sơn 01 lớp chống rỉ và 02 lớp trang trí màu ghi sáng (Son THHN hệ ALkyd) bằng phương pháp sơn phun áp lực cao.\n\n"+
    "Địa điểm sản xuất: Thôn Quảng Hội, Xã Nội Bài, Thành phố Hà Nội\n\n"+
    "Giá trị hợp đồng 786.000.000 VND",
  },
  {
    id: 6,
    title: "Công trình Quang Tuấn",
    date: "2025-07-23",
    type: "image",
    src: [quangtuan01, quangtuan02, quangtuan03, quangtuan04, quangtuan05, quangtuan06,quangtuan07,quangtuan08],
    region: "Miền Bắc",
    description: "khu công nghiệp Sơn cầm 1. Sản xuất, vận chuyển và lắp dựng kết cấu thép nhà xưởng.\n\n"+
    "Toàn bộ kết cấu thép chính được làm từ thép SS400(hoặc tương đương)- mới 100%.\n\n"+
    "Các kết cấu chính được hàn bằng phương pháp tự động.\n\n"+
    "Làm sạch bằng phun hạt kim loại.\n\n"+
    "Sơn 01 lớp chống rỉ và 02 lớp trang trí màu ghi sáng (Son THHN hệ ALkyd) bằng phương pháp sơn phun áp lực cao.\n\n"+
    "Địa điểm sản xuất: Thôn Quảng Hội, Xã Nội Bài, Thành phố Hà Nội\n\n"+
    "Địa điểm lắp dựng: Lô CN-6.1. Khu công nghiệp Sơn Cầm 1, Phường Quan Triều, Tỉnh Thái Nguyên.\n\n"+
    "Giá trị hợp đồng 2.301.000.000 VND",
  },
];

const images = [bannerngang, bannerngang1, bannerngang2, bannerngang3, bannerngang4, bannerngang5];

const DuAn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentModalImage, setCurrentModalImage] = useState(0);
  const postsPerPage = 3;

  const filteredProjects = projectPosts.filter((p) => {
    const matchTitle = p.title.toLowerCase().includes(description.toLowerCase());
    const matchRegion = position ? p.region === position : true;
    return matchTitle && matchRegion;
  });

  const sortedPosts = [...filteredProjects].sort((a, b) => new Date(b.date) - new Date(a.date));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

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
          {/* Banner */}
          <div
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              transition: "background-image 1s ease-in-out",
            }}
            className="sticky bg-cover bg-center bg-no-repeat h-[400px] container max-w-xl p-6 py-24 mx-auto lg:px-8 lg:max-w-7xl rounded-b-3xl"
          >
            <motion.div
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 75 } }}
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

            {/* Search + Filter */}
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

          {/* Danh sách dự án */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => {
                  setSelectedProject(post);
                  setCurrentModalImage(0);
                }}
              >
                {post.type === "image" ? (
                  <img
                    src={Array.isArray(post.src) ? post.src[0] : post.src}
                    alt={post.title}
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <video src={post.src} className="w-full h-80 object-cover" autoPlay loop muted />
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

          {/* Pagination */}
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
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-5xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.type === "image" ? (
              Array.isArray(selectedProject.src) ? (
                <>
                  <img
                    src={selectedProject.src[currentModalImage]}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
                  />
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() =>
                        setCurrentModalImage(
                          (prev) =>
                            prev > 0 ? prev - 1 : selectedProject.src.length - 1
                        )
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        setCurrentModalImage(
                          (prev) =>
                            prev < selectedProject.src.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      ›
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )
            ) : (
              <video
                src={selectedProject.src}
                controls
                autoPlay
                loop
                muted
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-600">
                {selectedProject.date} • {selectedProject.region}
              </p>
              <p className="mt-2">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DuAn;
