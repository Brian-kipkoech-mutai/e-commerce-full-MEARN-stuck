import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import AuthProvider from "./context/AuthContext";

 

function App() {
  

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <RoutesConfig />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
