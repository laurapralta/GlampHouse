import React from 'react';
import styled from './styles.module.scss';



export function GaleriaDesktop({images, setModalIsOpen}) {
  
  return (
    <div className={styled.container}>
      <div className={styled.item1}>
        <img className={styled.img}  onClick={() => setModalIsOpen(true)} src={images[0]?.urlImage} alt=""/>
      </div>
      <div className={styled.item}>
        <img className={styled.img} onClick={() => setModalIsOpen(true)} src={images[1]?.urlImage} alt=""/>
      </div>
      <div className={styled.item}>
        <img className={styled.img} onClick={() => setModalIsOpen(true)} src={images[2]?.urlImage} alt=""/>
      </div>
      <div className={styled.item} >
        <img className={styled.img} onClick={() => setModalIsOpen(true)} src={images[3]?.urlImage} alt=""/>
      </div>
      <div className={styled.item}>
        <img className={styled.img} onClick={() => setModalIsOpen(true)} src={images[4]?.urlImage} alt=""/>
        <button className={styled.button} onClick={() => setModalIsOpen(true)}> Ver más</button>
      </div>
    </div>
  );
}
