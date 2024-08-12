import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "react-router-dom";

function ShowToast(toast, data, error, link, message) {
  useEffect(() => {
    (data || error) &&
      toast({
        variant: error ? "destructive" : "default",
        title: "feedback",
        description: data || error,
        action: (link && message) && (
          <Link className="block" to={link}>
            <ToastAction altText="Try again">{message}</ToastAction>
          </Link>
        ),
      });
  }, [data, error]);
}

export default ShowToast;
