import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Divider from "@/components/Divider";
import Trasition from "@/components/Trasition";
function Login(props) {
  return (
    <form className="max-w-xs mx-auto flex flex-col gap-4 py-8 ">
      <section>
        {" "}
        <Button className="w-full">Continue With Google</Button>{" "}
      </section>
      <Divider />
      <section className="flex flex-col gap-2">
        <fieldset>
          <label htmlFor="email" className="font-semibold  text-gray-700">
            Email
          </label>
          <Input className="email" type="email"></Input>
        </fieldset>
        <fieldset>
          <label htmlFor="name" className="font-semibold  text-gray-700">
            Name
          </label>
          <Input className="email"></Input>
        </fieldset>
        <div className="flex justify-end">
          <Link
            className=" hover:text-blue-600 hover:underline text-muted-foreground text-sm"
            to={"/forgotpassword"}
          >
            Forgot Password?
          </Link>
        </div>
      </section>
      <section>
        <Button className="w-full">Login</Button>
        <p className="text-center mt-6 ">
          <Link
            className="text-center hover:text-blue-600 hover:underline text-muted-foreground text-sm"
            to={"/signup"}
          >
            Don{"'"}t have an account? Sign up
          </Link>
        </p>
      </section>
      <Trasition />
    </form>
  );
}

export default Login;
