import React, {useEffect, useState} from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generate page numbers
    const [pages,setPages] = useState([]);

    useEffect(()=>{
        const t = [];
        for (let i = 1; i <= totalPages; i++) {
            t.push(i);
        }
        setPages(t);
        console.log(totalPages,t)
    },[totalPages])
    return (
        <div className="flex items-center justify-center space-x-1">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
                Trước
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-KCTBS-blue text-white' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`}
                >
                    {page}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
                Sau
            </button>
        </div>
    );
};

export default Pagination;
