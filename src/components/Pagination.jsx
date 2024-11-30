"use client"
import { IoTriangleSharp } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center gap-2 my-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-white"
            >
                <IoTriangleSharp className={`${currentPage>1 ? 'opacity-100':'opacity-30'} -rotate-90`}/>
                
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`px-4 py-2 rounded-xl font-montserrat font-[900] ${
                        currentPage === i + 1
                            ? "bg-white text-sec"
                            : "bg-sec text-white hover:bg-gray-300 hover:text-sec"
                    } `}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-white"
            >
                <IoTriangleSharp className={`${currentPage < totalPages ? 'opacity-100':'opacity-30'} rotate-90`}/>
            </button>
        </div>
    );
};

export default Pagination;
