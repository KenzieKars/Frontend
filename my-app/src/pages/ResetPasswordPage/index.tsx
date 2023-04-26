import Button from "../../components/buttons"
import NavBar from "../../components/navBar"
import {  Main, Div } from "./style"
import { Input } from "../../components/input"
import { ThemeTitle } from "../../styles/typography"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"

function ResetPasswordPage(){
    const navigate = useNavigate()
    let data={
        token: "",
        email: "",
        senha: ""
    }
    return(
        <Div>
            <NavBar/>
            <Main>
                <form className="div">
                    <Input id="email" label="Digite seu email" fieldName="usuario" type="text" placeholder="Digite seu email" />
                    <Input id="senha" label="Digite a nova senha" fieldName="usuario" type="password" placeholder="Digite a nova senha" />
                    <Input id="token" label="Digite o código que você recebeu por email" fieldName="usuario" type="text" placeholder="Digite o código" />
                    <Button
                        backgroundColor= "#6200E3"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "#FFFFFF"
                        fontColorHover= ""
                        type="button"
                        className="btn"
                        onClick={()=>{
                            let email = document.getElementById("email") as HTMLInputElement
                            data.email = email.value
                            let token = document.getElementById("token") as HTMLInputElement
                            data.token = token.value
                            let senha = document.getElementById("senha") as HTMLInputElement
                            data.senha = senha.value
                            api
                            .post(`/senha/reset_password`, data)
                            .then((res) => {
                                console.log(res.data);
                            })
                            .catch((err) => {
                                console.log(err)
                            });
                        }}
                        >
                        Enviar</Button>

                </form>
            </Main>
        </Div>
    )
}
export default ResetPasswordPage
