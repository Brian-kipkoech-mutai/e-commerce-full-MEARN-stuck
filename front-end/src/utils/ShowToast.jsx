import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "react-router-dom";

 
function ShowToast(toast, data, error) {
  useEffect(() => {
    (data || error) &&
      toast({
        variant: error ? "destructive" : "default",
        title: "feedback",
        description: data || error,
        action: error && (
          <Link className="block" to={"/login"}>
            <ToastAction altText="Try again">Log in</ToastAction>
          </Link>
        ),
      });
  }, [data, error]);

}

export default ShowToast;
