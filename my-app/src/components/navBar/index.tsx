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
        <div className="navbar-teste">
          <DivNavBar>
            
          </DivNavBar>

          <DivNavBarUser>
          <span>

              Fazer Login
          </span>
            
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