import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Trasition from "@/components/Trasition";
function ForgotPassword(props) {
  return (
    <form className=" text-gray-800 ">
      <div className="max-w-xs mx-auto flex flex-col gap-6 py-28">
        <p className="text-muted-foreground text-sm text-justify">
          Please enter the email address associated with your account. {"We'll"}
          promptly send you a link to reset your password.
        </p>
        <section>
          <label htmlFor="email" className="font-semibold  text-gray-700">
            Email
          </label>
          <Input id="email" className="mt-2"></Input>
        </section>
        <section>
          <Button className="w-full">Send Reset Link</Button>
        </section>
      </div>
      <Trasition />
    </form>
  );
}

export default ForgotPassword;
