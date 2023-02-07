import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ListBooksExam from "../../components/ListBooksExam";


function ExamPage() {
  const router = useRouter();

  const { field, titleExam } = router.query;
  return (
    <div className="relative min-h-screen bg-gray-200  ">
      <Navbar />
      <div className="min-h-screen">
        <Breadcrumbs title={field} subTitle={titleExam}/>
        <ListBooksExam title = {`${field}  ${titleExam}`}/>
      </div>
      <Footer />
    </div>
  );
}

export default ExamPage;
