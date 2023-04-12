import React from "react";
import { Container, MenuDropdownSt } from "./style";
import Button from "../buttons";

const logo = require("../../assets/logo.png") as string;
const menu = require("../../assets/cardapio.png") as string;
const MobileMenu = () => {
    return(
    <Container>
      <MenuDropdownSt>
        <img src={logo} alt="Motors Shop" />
        <button onClick={()=>{
          const menu = document.querySelector("#menu")
          if(menu !== null) {
            if(menu.className==="open"){
              menu.className = "close"
              return
            }
          }
          if(menu !== null) {
            menu.className = "open"
          }
        }}>
          <img className="btnMenu" src={menu} alt="menu" />
        </button>
        <nav id="menu" className="close">
          <ul className="menu-list">
            <li>
              <a href="#carros">Carros</a>
            </li>
            <li>
              <a href="#motos">Motos</a>
            </li>
            <li>
              <a href="#leilao">Leilão</a>
            </li>
            {}
            <li>
              <a href="/login">Fazer Login</a>
            </li>
          </ul>
        </nav>
      </MenuDropdownSt>
    </Container>

    )
};

export default MobileMenu;