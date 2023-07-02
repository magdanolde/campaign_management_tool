import Select from '../Main/Select';

function Board() {
  return (
    <div className="bg-color-gamma rounded-xl max-md:flex justify-center">
      <div className="flex flex-row-reverse pr-6 max-md:flex-col">
        <Select id="priority">
          <option value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Select id="category">
          <option value=" ">Category</option>
          <option value="brand">Brand</option>
          <option value="sales">Sales</option>
          <option value="local">Local</option>
        </Select>
      </div>
    </div>
  );
}

export default Board;