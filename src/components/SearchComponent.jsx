import React from 'react';

const SearchComponent = ({position,setPosition,description,setDescription}) => {
    return (
        <div className=" p-4 flex justify-between items-center rounded">
            <input
                type="text"
                placeholder="Vị trí, Chức danh, Kỹ năng..."
                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
            />
            <input
                type="text"
                placeholder="Đơn vị"
                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 mx-2 rounded-lg text-sm focus:outline-none"
            />
            <input
                type="text"
                placeholder="Khu vực"
                className="flex-grow border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
            />
            <button className="bg-KCTBS-yellow text-white rounded-lg text-sm px-6 h-10 ml-2">
                Tìm kiếm
            </button>
        </div>
    );
};

export default SearchComponent;
