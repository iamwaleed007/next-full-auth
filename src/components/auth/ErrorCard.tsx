import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorCard = () => {
  return (
    <div className="flex gap-4 justify-center flex-col items-center">
      <h2>Oops! Something went wrong</h2>
      <Link href={"/auth/login"}>
        <Button>Back to login</Button>
      </Link>
    </div>
  );
};

export default ErrorCard;
