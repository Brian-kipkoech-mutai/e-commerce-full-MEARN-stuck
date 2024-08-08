import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Divider from "@/components/Divider";
import Trasition from "@/components/Trasition";
import { Toaster } from "@/components/ui/toaster";
function Login({ handleChange, handleSubmit, loading, postData }) {
  return (
    <form
      className="max-w-xs mx-auto flex flex-col gap-4 py-8 "
      onSubmit={(e) => handleSubmit(e, postData)}
    >
      <Toaster />
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
          <Input
            className=""
            type="email"
            name="email"
            onChange={handleChange}
            disabled={loading}
          ></Input>
        </fieldset>
        <fieldset>
          <label htmlFor="name" className="font-semibold  text-gray-700">
            Password
          </label>
          <Input
            className=""
            name="password"
            onChange={handleChange}
            disabled={loading}
          ></Input>
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
        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Login in..." : "Login"}
        </Button>
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
