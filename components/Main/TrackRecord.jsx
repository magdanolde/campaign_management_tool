function TrackRecord() {
    return (
      <div className="mt-10">
        <div className="mb-8">
          <p className="text-xl mb-2">Total Projects</p>
          <div className="flex justify-between w-1/2">
            <div className="border-l-4 border-solid border-color-omega h-8"></div>
            <p className="font-extrabold text-2xl">4</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-xl mb-2">In Progress</p>
          <div className="flex justify-between w-1/2">
            <div className="border-l-4 border-solid border-color-mu h-8"></div>
            <p className="font-extrabold text-2xl">4</p>
          </div>
        </div>
        <div>
          <p className="text-xl mb-2">Completed</p>
          <div className="flex justify-between w-1/2">
            <div className="border-l-4 border-solid border-color-alpha h-8"></div>
            <p className="font-extrabold text-2xl">4</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default TrackRecord;