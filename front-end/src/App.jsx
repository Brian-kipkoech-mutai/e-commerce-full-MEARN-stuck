import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import RoutesConfig from "./routes/routesConfig";

 

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <RoutesConfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
