import AppName from "./components/AppName";
import Input from "./components/Input";
import Item from "./components/Item";

function App() {
  return (
    <>
      <div className="mainContainer">
        <AppName />
        <Input />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}

export default App;
