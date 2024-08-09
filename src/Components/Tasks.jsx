function Tasks() {
  let taskName = "College jao"
  let taskDate = "21/07/1930"
  return (
    <div class="container text-center  row-gap-3">
      <div className="row column-gap-2 m-2">
        <p class="col-4">{taskName}</p>
        <p class="col-3">{taskDate}</p>
        <button type="button" class="col-2 btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Tasks;
