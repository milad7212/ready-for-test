import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ExplainBook from "../../components/ExplainBook";
import Footer from "../../components/Footer";
import SourceExams from "../../components/SourceExams";
import Navbar from "../../components/ui/Navbar/Navbar";
import { getBook } from "../../services/bookService";

function BookPage() {
  const router = useRouter();
  const [data, setData] = useState({});
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      async function fetchData() {
        const { data } = await getBook(id);
       
        setData(data);
      }
      fetchData();
    }
  }, [id]);
  return (
    <div className="relative min-h-screen bg-gray-200  ">
      <Navbar />
      <div className="min-h-screen">
        <ExplainBook data={data} />
        <SourceExams />
      </div>
      <Footer />
    </div>
  );
}

export default BookPage;
