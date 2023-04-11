import React from "react";
import { Container, MenuDropdownSt } from "./style";
import Button from "../buttons";


const MobileMenu = () => {
    return(
    <Container>
      <MenuDropdownSt>
        <img src="../../assets/logo.png" alt="Motors Shop" />
          <img src="../../assets/cardpio.png" alt="menu" />
    

        <nav >
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