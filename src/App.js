import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { BsFilterRight } from "react-icons/bs";
import Logo from './assets/Logo.png'


function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <div className="Search">
          <img src={Logo} alt="Logo da loja"/>
          <div className="InputNav">
            <FiSearch size={25} color="#000" />
            <input type="text" placeholder="Buscar Livros"></input>
          </div>
          <div className="Profile">
              <button><IoPersonCircleOutline size={35} color="#FFF"/></button>
            <div>
              <p>Olá, bem vindo(a)!</p>
              <a>Entrar ou  Cadastre - se</a>
            </div> 
            <button><IoMdCart size={35} color="#FFF"/></button>
          </div>
        </div>
        <div className="Filter">
            <a>DRAMA</a>
            <a>AÇÃO</a>
            <a>ROMANCE</a>
            <a>TERROR</a>
            <a>COMEDIA</a>
            <a>MANGA</a>
            <button> <BsFilterRight size={25} color="#FFF"/></button>
        </div>
      </div> 
    </div>
  );
}

export default App;
