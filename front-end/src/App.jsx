import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const googleId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  
  return (
    <div>
      <GoogleOAuthProvider clientId={googleId}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RoutesConfig />
          </BrowserRouter>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
