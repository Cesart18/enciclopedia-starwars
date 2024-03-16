import { useState } from "react";
import { Modal } from "./Modal";

export const CardItem = ({ char, setShowModal, showModal}) => {
    const { name, mass, height, gender } = char;
    
    const cards = document.querySelectorAll('.card');
  return (
    <>
    <div className="card" onClick={ () => setShowModal(!showModal)}>
        <h3>name: {name}</h3>
        <p>gender: {gender}</p>
        <p>height: {height}</p>
        <p>mass: {mass}</p>
    </div>
    {
      showModal && ( <Modal char={char} setShowModal={setShowModal}/>)

    }
    {
      cards.forEach( card =>  {
        if( showModal ){
          card.classList.add('open-modal')
        }else{
          card.classList.remove('open-modal');
        }
      })
    }
    </>
  )

}

