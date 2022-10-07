import { GaleriaDesktop } from "./GaleriaDesktop/galeriaDesktop";
import { GaleriaMobile } from "./GaleriaMobile/galeriaMobile";
import { Modal } from "./Modal/Modal";

import { useState } from 'react';

export function Gallery({images }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="w-100 bg-light py-3">
      <div className="w-100 max-width-1180 mx-auto px-md-2">
        <GaleriaDesktop images={images} setModalIsOpen={setModalIsOpen}/>
        <GaleriaMobile images={images}/>
        <Modal images={images} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      </div>
    </div>
  );
}