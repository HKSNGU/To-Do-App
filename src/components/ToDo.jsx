import Item from "./Item.jsx";

function ToDo({ todoData }) {
  return (
    <>
      {todoData.map((data) => (
        <Item task={data.task} date={data.date} />
      ))}
      ;
    </>
  );
}
export default ToDo;
