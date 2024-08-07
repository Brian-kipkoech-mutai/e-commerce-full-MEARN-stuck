import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import usePost from "@/hooks/usePost";
import { resendEmailLink } from "@/services/authServices";
import ShowToast from "@/utils/ShowToast";
import classNames from "classnames";
import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Verification = () => {
  const { status } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const success = status === "success";
  const { toast } = useToast();
  const { data, error, loading, postData, resetDefault } =
    usePost(resendEmailLink);
  ShowToast(toast, data, error);
  const handlePost = () => {
    resetDefault();
    postData({ token });
  };
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
              <Link className="block" to={"/login"}>
                <Button className="w-3/4 mt-5"> Log in</Button>
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

            <Button
              className="w-3/4 mt-5"
              onClick={handlePost}
              disabled={loading}
            >
              {loading ? "resending link..." : "Resend Link"}
            </Button>
          </>
        )}
        <Toaster />
      </div>
    </div>
  );
};

export default Verification;
