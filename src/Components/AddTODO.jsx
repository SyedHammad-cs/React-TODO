function AddTODO() {
  return (
    <div class="container text-center  row-gap-3">
      <div className="row column-gap-2 m-2">
        <input type="text" placeholder="Enter task..." class="col-4" />
        <input type="date" class="col-3" />
        <button type="button" class="col-2 btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTODO;