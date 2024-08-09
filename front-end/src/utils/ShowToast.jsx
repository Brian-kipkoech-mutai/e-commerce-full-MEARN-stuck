import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "react-router-dom";
 

function ShowToast(toast, data, error, link = "/login", message = "log In") {
  console.log(data, error);
  useEffect(() => {
    (data || error) &&
      toast({
        variant: error ? "destructive" : "default",
        title: "feedback",
        description: data || error,
        action: error && (
          <Link className="block" to={link}>
            <ToastAction altText="Try again">{message}</ToastAction>
          </Link>
        ),
      });
  }, [data, error]);
}

export default ShowToast;
