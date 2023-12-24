import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <h1>About me</h1>
      <button>
        <Link href="/">HOME</Link>
      </button>
    </section>
  );
};

export default page;
