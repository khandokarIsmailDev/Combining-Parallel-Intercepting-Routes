import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap h-screen w-screen justify-center align-middle">
      <button className=" text-2xl font-bold text-green-500">
        <Link href="/gallery">Click to show gallery</Link>
      </button>
    </div>
  );
};

export default page;
