import Button from "../buttons";
import MobileMenu from "../mobileMenu";
import { DivNavBarUser, Nav } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";


const logo = require("../../assets/logo.png") as string;
interface IUserInfo {
  id: string  
  nome: string
  email: string              
  telefone:string
  bio:string
  imagem:string
  cpf:string
  aniversario:string
  vendedor?: boolean;
}


export const NavBar = () => { 
  const navigate = useNavigate()
    const userId = localStorage.getItem("@user:ID")
    const token = localStorage.getItem("@user:Token")
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

    useEffect(() => {
        api.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => {
              setUserInfo(res.data.foundUserByParam);
          })
          .catch((err) => {
            window.localStorage.clear();
          });
    }, []);
  return (
    <>
      <Nav>
        <figure>
          <img  onClick={()=>{navigate("/")}} src={logo} alt="logo da empresa" />
        </figure>
        <DivNavBarUser>
        <Button
            backgroundColor="#ffffff"
            backgroundColorHover="#212529"
            border=""
            fontColor="#495057"
            fontColorHover="#ffffff"
            className={userInfo.nome? "none" : "login"}
            onClick={()=>{navigate("/login")}}
          >
           
           Fazer Login

          </Button>
          
          <Button
            backgroundColor="#ffffff"
            backgroundColorHover="#212529"
            border="#ADB5BD"
            fontColor="#212529"
            fontColorHover="#ffffff"
            className={userInfo.nome? "none" : ""}
            onClick={()=>{navigate("/register")}}
          >
             Cadastrar
          </Button>
          <div className={userInfo.nome? "logado" : "none"} onClick={()=>{navigate("/user")}}>
              <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="user" />
              {userInfo.nome}
          </div>
        </DivNavBarUser>
      </Nav>
      <MobileMenu></MobileMenu>
    </>
  );
};

export default NavBar;