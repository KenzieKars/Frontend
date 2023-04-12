import Button from "../buttons";
import MobileMenu from "../mobileMenu";
import { DivNavBar, DivNavBarUser, Nav } from "./style";

const logo = require("../../assets/logo.png") as string;

export const NavBar = () => { return (
    <>
      <Nav>
        <figure>
          <img src={logo} alt="logo da empresa" />
        </figure>
        <DivNavBarUser>
        <Button
            backgroundColor="#ffffff"
            backgroundColorHover="#212529"
            border=""
            fontColor="#495057"
            fontColorHover="#ffffff"
            className="login"
            
          >
            Fazer Login
          </Button>
          
          <Button
            backgroundColor="#ffffff"
            backgroundColorHover="#212529"
            border="#ADB5BD"
            fontColor="#212529"
            fontColorHover="#ffffff"
            
          >
            Cadastrar
          </Button>
        </DivNavBarUser>
      </Nav>
      <MobileMenu></MobileMenu>
    </>
  );
};

export default NavBar;