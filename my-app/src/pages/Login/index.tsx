import Button from "../../components/buttons"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { NavBar } from "../../components/navBar"
import { Container, Div } from "./style"


function LoginPage(){
    return(
        <Div>
            <NavBar/>
            <Container>
                <h1>Login</h1>
                <form>
                    <Input label="Usuario" fieldName="usuario" type="text" placeholder="Digitar usuario"/>
                    <Input label="Senha" fieldName="senha" type="password" placeholder="Digitar senha"/>
                    <span>Esqueci minha senha</span>
                    <Button backgroundColor="var(--color-brand1)"
                    border= ""
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "var(--color-whiteFixed)"
                    fontColorHover= ""
                    onClick={()=>{}}
                    type="button"
                    className="">Entrar</Button>
                    <p>Ainda não possui conta?</p>
                    <Button backgroundColor="var(--color-grey10)"
                    border= "var(--color-grey4)"
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "var(--color-grey0)"
                    fontColorHover= ""
                    onClick={()=>{}}
                    type="button"
                    className="">Cadastrar</Button>
                </form>
            </Container>

            <Footer/>
        </Div>
    )
}

export default LoginPage