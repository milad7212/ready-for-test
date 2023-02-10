import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getTest } from "../../../services/testService";
import ReadQuestions from "../../../components/ReadQuestions";

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
      {!!data.length && <ReadQuestions data={data} />}
    </div>
  );
}

export default BookPage;
