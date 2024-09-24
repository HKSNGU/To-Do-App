function Item({ task, date }) {
  return (
    <>
      <div className="row containers">
        <p className="col-5 column">{task}</p>
        <p className="col-4 column">{date}</p>
        <button
          id="delButton"
          name="delButton"
          className="col-2 btn btn-danger  column"
        >
          Delete
        </button>
      </div>
    </>
  );
}
export default Item;
