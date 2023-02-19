import "./App.css";
import SideBar from "./components/sidebar";
import RightVector from "./components/rightvector";
import Arnia from "./components/arniavector";
import Header from "./components/header";
import Forms from "./components/forms";
import TaskList from "./components/tasklist";

function App() {
  return (
    <div className="App">
      <SideBar />
      <RightVector />
      <Arnia />
      <Header />
      <TaskList
        tasks={{
          num: 0,
          description: "dasissod",
          date: "datata",
          status: "idjasodsa",
        }}
      />
      <Forms />
    </div>
  );
}

export default App;
