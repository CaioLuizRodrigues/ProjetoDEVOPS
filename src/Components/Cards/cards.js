import React from 'react';
import './style.css';
import { PiCrownBold } from "react-icons/pi";
import Eassimqueacaba from "../../Assets/Eassimqueacaba.png"

export default function Cards() {
 return (
   <div className='CardsContainer'>
    <div className='Cards'>
    <div className='IconCard'>
        <PiCrownBold size={25} color="#e2d636"/>
    </div>    
    <div className='ImgLivro'>
        <img src={Eassimqueacaba} alt="Livro É assim que acaba" width="100%" height="100%"></img>
    </div>
        <p>Lily Bloom decide começar uma nova vida em Boston…</p>
    <div className='ButtonCardContainer'>
        <button className='ButtonCard'>Adquirir</button>
        <button className='ButtonCard'>Ver mais</button>
    </div>
    </div>
   </div>
  );
}