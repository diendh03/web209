import "./App.css";
import Header from "./component/client/header";
import Login from "./component/client/login";

function App() {
  return (
    <>
      <div className="App">
        <header>
          {/* <Header></Header> */}
          <Login></Login>
        </header>
      </div>
    </>
  );
}

export default App;
