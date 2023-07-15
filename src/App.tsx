import "./App.css";
import ComponentA from "./component/client/ComponentA";
import ComponentB from "./component/client/ComponentB";
import ParentMount from "./component/client/ParentMount";
import Header from "./component/client/header";
import Login from "./component/client/login";

function App() {
  return (
    <>
      <div className="App">
        <header>
          {/* <Header></Header> */}
          <Login></Login>
          <ParentMount />
          <ComponentA />
          <ComponentB />
        </header>
      </div>
    </>
  );
}

export default App;
