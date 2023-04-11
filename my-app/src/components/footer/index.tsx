import { ContainerF } from "./style";
const logo = require("../../assets/motorsShop.png") as string;
const direitos = require("../../assets/direitos.png") as string;
export const Footer = () => {
  return (
    <ContainerF>
      <div>
        <figure>
          <img src={logo} alt="Logo da empresa" />
        </figure>
        <figure>
          <img src={direitos}alt="Logo da empresa" />
        </figure>
        <a href="/">^</a>
      </div>
    </ContainerF>
  );
};