import AppName from "./components/AppName";
import Input from "./components/Input";
import ToDo from "./components/ToDo.jsx";

const todoData = [
  {
    task: "get up",
    date: "24/09/2024",
  },
  {
    task: "get fresh",
    date: "24/09/2024",
  },
  {
    task: "get skilled",
    date: "24/09/2024",
  },
];

function App() {
  return (
    <>
      <div className="mainContainer">
        <AppName />
        <Input />
        <ToDo todoData={todoData} />
      </div>
    </>
  );
}

export default App;
