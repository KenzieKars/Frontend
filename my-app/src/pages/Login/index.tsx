import { useContext } from "react"
import Button from "../../components/buttons"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { NavBar } from "../../components/navBar"
import { Container, Div } from "./style"
import { AuthContext, ILogin } from "../../contexts/UserContext"
import { useForm } from "react-hook-form"
import { schema } from "../../serializers/login/login"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";



function LoginPage(){
    const {  login } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  const navigate = useNavigate()
    return(
        <Div>
            <NavBar/>
            <Container>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(login)}>
                    <Input label="Usuario" fieldName="usuario" type="text" placeholder="Digitar usuario" {...register("email")}/>
                    <p>{errors.email?.message}</p>
                    <Input label="Senha" fieldName="senha" type="password" placeholder="Digitar senha" {...register("senha")}/>
                    <p>{errors.senha?.message}</p>
                    <span>Esqueci minha senha</span>
                    <Button backgroundColor="var(--color-brand1)"
                    border= ""
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "var(--color-whiteFixed)"
                    fontColorHover= ""
                    onClick={()=>{}}
                    type="submit"
                    className="">Entrar</Button>
                    <p>Ainda não possui conta?</p>
                    <Button backgroundColor="var(--color-grey10)"
                    border= "var(--color-grey4)"
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "var(--color-grey0)"
                    fontColorHover= ""
                    onClick={()=>navigate('/register', {replace: true})}
                    type="button"
                    className="">Cadastrar</Button>
                </form>
            </Container>

            <Footer/>
        </Div>
    )
}

export default LoginPage

