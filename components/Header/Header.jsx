"use client"
import Title from "./Title";
import Button from "./Button";
import NewProjectModal from './NewProjectModal';
import { useState } from 'react';


function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className="mt-6 grid grid-cols-[1fr,5fr,5fr,2.5fr] max-md:flex justify-between">
      <Title />
      <Button onClick={()=>setModalOpen(true)}>+Add campaign</Button>
      <NewProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </header>
  );
}

export default Header;