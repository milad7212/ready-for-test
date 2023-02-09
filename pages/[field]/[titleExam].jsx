import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {getResource} from '../../services/resourceService'
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ListBooksExam from "../../components/ListBooksExam";

function ExamPage() {
  const router = useRouter();

  const { field, titleExam } = router.query;
  const [data, setData] = useState({})
  useEffect(() => {
    if(field){
      async function fetchData() {
        const {data}=await getResource({examFiled:field,examSubFiled:titleExam})
        console.log(data);
        setData(data)
        
      }
      fetchData();
    }
    
    
  }, [field]);

  return (
    <div className="relative min-h-screen bg-gray-200  ">
      <Navbar />
      <div className="min-h-screen">
        <Breadcrumbs title={field} subTitle={titleExam} />
        <ListBooksExam data={data[0]} title={`${field}  ${titleExam}`} />
      </div>
      <Footer />
    </div>
  );
}

export default ExamPage;
