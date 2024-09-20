function Input() {
  return (
    <>
      <div className="row containers">
        <input
          type="text"
          name="task"
          placeholder="Task"
          className="col-5 column"
        ></input>
        <input type="date" name="date" className="col-4 column"></input>
        <button name="addButton" className="col-2 btn btn-success column">
          Add
        </button>
      </div>
    </>
  );
}
export default Input;
