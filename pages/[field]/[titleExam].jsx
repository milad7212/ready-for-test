import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getResource, getCountResource } from "../../services/resourceService";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ListBooksExam from "../../components/ListBooksExam";
import Head from "next/head";

function ExamPage() {
  const router = useRouter();

  const { field, titleExam } = router.query;
  const [data, setData] = useState({});
  const [dataCount, setDataCount] = useState({});
  useEffect(() => {
    if (field) {
      async function fetchData() {
        const { data } = await getResource({
          examFiled: field,
          examSubFiled: titleExam,
        });
        const { data: dataCount } = await getCountResource();
        if(dataCount.length){
          const newData = dataCount.reduce((acc, curr) => {
                      acc[curr.source] = curr.count || 0;
              return acc;
                  },{});
                  setDataCount( newData);
        }
        
        
       
        setData(data);
      }
      fetchData();
    }
  }, [field]);
  

 
  

  return (
    <div className="relative min-h-screen bg-gray-200  ">
      <Head>
      <title>{`${field} | ${titleExam}`}</title>
      </Head>
      <Navbar />
      <div className="min-h-screen">
        <Breadcrumbs title={field} subTitle={titleExam} />
        <ListBooksExam dataCount={dataCount} data={data[0]} title={`${field}  ${titleExam}`} />
      </div>
      <Footer />
    </div>
  );
}

export default ExamPage;
