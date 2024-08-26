import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link className={buttonVariants()} href={"/auth/login"}>
        Login
      </Link>
    </div>
  );
};

export default page;
