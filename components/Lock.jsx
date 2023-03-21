import Link from "next/link";
import React from "react";
import { FcLock } from "react-icons/fc";
function LockPage() {
  return (
    <div className="fixed inset-0 z-[999]">
      <div className=" bg-gray-500 flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-400 px-4 py-4 rounded shadow-lg">
          <FcLock size={80} />
        </div>
        <Link href="/plan">
          <p className="bg-blue-500 active:scale-95 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded shadow">
            اکنون طرح خود را انتخاب کنید
          </p>
        </Link>
        <Link href="/">
          <p className="mt-8 text-sm text-gray-400 font-bold hover:text-gray-800">
            بازگشت به خانه
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LockPage;
