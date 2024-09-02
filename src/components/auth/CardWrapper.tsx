"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  footerTextLabel: string;
  footerTextHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  footerTextLabel,
  footerTextHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <h2 className="mx-auto font-semibold text-xl">{headerLabel}</h2>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Button
            onClick={() => {
              signIn("google", {
                callbackUrl: DEFAULT_LOGIN_REDIRECT,
              });
            }}
            variant={"outline"}
            className="w-full flex gap-2"
          >
            <FcGoogle className="text-xl" />{" "}
            <span className="font-semibold">Continue with google</span>
          </Button>
        </CardFooter>
      )}
      <CardFooter>
        <Link className="text-sm font-medium mx-auto" href={footerTextHref}>
          {footerTextLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
