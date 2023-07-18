import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import ComponentA from "./component/client/ComponentA";
import LayoutCLient from "./layout/LayoutCLient";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutCLient />}>
              <Route index path="componentA" element={<ComponentA />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
