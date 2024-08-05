import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Divider from "@/components/Divider";
import Trasition from "@/components/Trasition";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = ({
  handleChange,
  handleSubmit,
  handleGoogleSignup,
  loading,
  data,
  error,
}) => {
  
  return (
    <form
      className="max-w-xs mx-auto flex flex-col gap-4 py-8"
      onSubmit={handleSubmit}
    >
      {data && <section>{data.message}</section>}
      {error && (
        <motion.section
          className="text-red-600 p-4 font-bold "
          initial={{
            x: 20,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
            },
          }}
        >
          {error} !
        </motion.section>
      )}
      <section>
        <Button className="w-full" onClick={handleGoogleSignup}>
          Continue with Google
        </Button>
      </section>
      <Divider></Divider>
      <section className=" flex flex-col gap-2">
        <fieldset>
          <label htmlFor="name" className="font-semibold  text-gray-700">
            Name
          </label>
          <Input
            id="name"
            type="text"
            className="mt-1"
            onChange={handleChange}
            required
          ></Input>
        </fieldset>
        <fieldset>
          <label htmlFor="email" className="font-semibold  text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="mt-1"
            onChange={handleChange}
            required
          ></Input>
        </fieldset>
        <fieldset>
          <label htmlFor="password" className="font-semibold text-gray-700">
            Password
          </label>

          <Input
            id="password"
            type="password"
            className="mt-1"
            onChange={handleChange}
            required
          ></Input>
        </fieldset>
        <p className="text-center text-muted-foreground text-sm">
          By creating an account you agree with our Terms of Service, Privacy
          Policy,
        </p>
      </section>
      <section>
        <Button className="w-full  " type="submit" disabled={loading}>
          {loading ? "Creating account..." : "  Create account"}
        </Button>
      </section>
      <section>
        <Link to={"/login"}>
          <p className="text-center text-muted-foreground text-sm mt-6 hover:underline underline-offset-1 hover:text-blue-600 ">
            Already have an account? Log in
          </p>
        </Link>
      </section>
      <Trasition />
    </form>
  );
};

export default SignUp;
