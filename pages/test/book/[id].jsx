import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getTest } from "../../../services/testService";
import ReadQuestions from "../../../components/ReadQuestions";
import Navbar from "../../../components/ui/Navbar/Navbar";
import LockPage from "../../../components/Lock";

function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (id) {
      async function fetchData() {
        const { data } = await getTest(id);
        setData(data);
      }
      fetchData();
    }
  }, [id]);
  return (
    <div className="bg-gray-200  min-h-screen ">
      <Navbar/>
      <LockPage/>
      {!!data.length && <ReadQuestions data={data} />}
    </div>
  );
}

export default BookPage;
