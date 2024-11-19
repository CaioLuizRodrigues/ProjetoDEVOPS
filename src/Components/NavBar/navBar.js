import React from 'react';
import './style.css';
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { BsFilterRight } from "react-icons/bs";
import Logo from '../../Assets/Logo.png'

export default function NavBar() {
 return (
<nav className="App">
      <div className="NavBar">
        <div className="Search">
            <img className='Navlogo' src={Logo} alt="Logo da loja"/>
          <div className="InputNav">
            <FiSearch size={25} color="#000" />
            <input type="text" placeholder="Buscar Livros"></input>
          </div>
          <div className="Profile">
              <button><IoPersonCircleOutline size={35} color="#FFF"/></button>
            <div>
              <p>Olá, Bem vindo(a)!</p>
              <a href="#">Entrar ou  Cadastre - se</a>
            </div> 
            <button><IoMdCart size={35} color="#FFF"/></button>
          </div>
        </div>
        <div className="Filter">
            <a href="#">DRAMA</a>
            <a href="#">AÇÃO</a>
            <a href="#">ROMANCE</a>
            <a href="#">TERROR</a>
            <a href="#">COMEDIA</a>
            <a href="#">MANGA</a>
            <button> <BsFilterRight size={25} color="#FFF"/></button>
        </div>
      </div> 
    </nav>
  );
}