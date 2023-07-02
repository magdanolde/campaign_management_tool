"use client"
import ButtonModal from "./ButtonModal";
import { useState } from 'react';

function NewProjectModal({modalOpen, setModalOpen}) {
  const [title, setTitle] = useState('');
  const [selectItem, setSelectCategory] = useState({
    selectCategory: "",
    selectPrio: "",
  }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({title, selectItem});

  }

  return (
     modalOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className=" bg-color-beta max-w-md w-90p mx-auto flex justify-center items-center p-8 rounded-lg relative" >
          <div className="absolute top-[-10px] right-0 transform -translate-y-full text-2.5xl p-2 rounded-md bg-color-beta text-black-2 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out z-10"
           onClick={()=>setModalOpen(false)} 
           onKeyDown={()=>setModalOpen(false)} 
           role="button"
           tabIndex={0}>
            X
          </div>
          <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-color-delta text-xl font-semibold mb-6 capitalize">
              ADD CAMPAIN
            </h1>
            <label htmlFor="title">
              Title
              <input
                className="mt-0.5 mb-4 w-full p-3 border-none bg-color-gamma text-lg rounded-lg"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="category">
              Category
              <select
                className="mt-0.5 mb-4 w-full p-3 border-none bg-color-gamma text-lg rounded-lg"
                id="category"
                value={selectItem.selectCategory}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectCategory({
                    ...selectItem,
                    selectCategory: e.target.value,
                  });
                }}
              > <option value="">Select category</option>
                <option value="brand">Brand</option>
                <option value="sales">Sales</option>
                <option value="local">Local</option>
              </select>
            </label>
            <label htmlFor="prio">
              Priority
              <select
                className="mt-0.5 mb-4 w-full p-3 border-none bg-color-gamma text-lg rounded-lg"
                id="prio"
                value={selectItem.selectPrio}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectCategory({
                    ...selectItem,
                    selectPrio: e.target.value,
                  });
                }}
              >
                <option value="">Choose priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <div className="flex justify-around items-center mt-8 gap-4">
              <ButtonModal type="submit" onSubmit={(e) => handleSubmit(e)}>Add Campaign</ButtonModal>
              <ButtonModal 
                style={{backgroundColor: "grey"}}
                onClick={()=>setModalOpen(false)} 
                >Cancel
              </ButtonModal>
            </div>
          </form>
        </div>
      </div>
      )
  );
}

export default NewProjectModal;
