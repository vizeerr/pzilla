"use client"
import CardGrid from "@/components/CardGrid";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import TopHeader from "@/components/TopHeader";
import TopNavbar from "@/components/TopNavbar";
import { useState } from "react";

export default function Home() {
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const ITEMS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
      }
  };

  return (
    <div>
      <div className='sticky top-0 bg-[#1E1E25] z-20 pb-4'>
      <TopNavbar/>
      <TopHeader/>
      <Tabs/>
    </div>
    <CardGrid data={paginatedData} />
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
    </div>
  );
}
