import AppName from "./components/AppName";
import Input from "./components/Input";
import Item from "./components/Item";

function App() {
  return (
    <>
      <div className="mainContainer">
        <AppName />
        <Input />
        <Item task="get up" date="24/09/2024" />
        <Item task="get fresh" date="24/09/2024" />
        <Item task="get skills" date="24/09/2024" />
      </div>
    </>
  );
}

export default App;
