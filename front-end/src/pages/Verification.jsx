import { Button } from "@/components/ui/button";
import classNames from "classnames";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Verification = () => {
  const { status } = useParams();
  const success = status === "success";

  return (
    <div className="grid place-items-center min-h-60 ">
      <div
        className={classNames(
          "w-full max-w-sm px-3 py-5 font-semibold  bg-gray-100 shadow-xl my-6 text-gray-800 rounded-lg  ",
          {
            "bg-green-50": success,
            "bg-red-50": !success,
          }
        )}
      >
        {success ? (
          <>
            <h2>Verification Successful!</h2>
            <p>
              Your account has been successfully verified. You can now log in
              and start using our services.
              <Link className=" w-full flex justify-center pt-5">
                <Button className="w-3/4"> Log in</Button>
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2>Verification Failed!</h2>
            <p>
              Unfortunately, your verification link has expired. Please request
              a new verification email.
            </p>
            <Link className=" w-full flex justify-center pt-5">
              <Button className="w-3/4">Resend Link</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Verification;
