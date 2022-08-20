import RegisterUsers from "./Components/RegisterUsers";
import "./App.css";

const App = () => {
  return <RegisterUsers c={() => console.log("work1")} />;
};

export default App;
