

import Button from "../buttons";


import MobileMenu from "../mobileMenu";


import { DivNavBar, DivNavBarUser, Nav } from "./style";

export const NavBar = () => { (
    <>
      <Nav>
        <figure>
          <img src="../../assets/logo.svg" alt="logo da empresa" />
        </figure>
        <div className="navbar-teste">
          <DivNavBar>
            <a href="#Carros">Carros</a>
            <a href="#Motos">Motos</a>
            <a href="#Leilão">Leilão</a>
          </DivNavBar>

          <DivNavBarUser>
            <span >Fazer login</span>
            <Button
              backgroundColor="#ffffff"
              backgroundColorHover="#212529"
              border="#212529"
              fontColor="#212529"
              fontColorHover="#ffffff"
             
            >
              Cadastrar
            </Button>
          </DivNavBarUser>
        </div>
      </Nav>
      <MobileMenu />
    </>
  );
};

export default NavBar;