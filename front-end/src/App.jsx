import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import AuthProvider from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="487797481909-kgnk1keolgp2emp40soua8kunnu2vf6g.apps.googleusercontent.com">
        <AuthProvider>
          <BrowserRouter>
            <RoutesConfig />
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
