import { useContext } from "react"
import Button from "../../components/buttons"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { NavBar } from "../../components/navBar"
import { AuthContext, ISignUp } from "../../contexts/UserContext"
import { registerSchema } from "../../serializers/register/register"
import { Container, Div } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

function RegisterPage(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({ resolver: yupResolver(registerSchema) });

  const signUp = (user: ISignUp) => {
    user.imagem = "asv"
    console.log(user)
    api.post("/users", { ...user })
      .then((res) => {
        console.log("Cadastro efetuado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate()

    return(
        <Div>
            <NavBar/>
            <Container>
                <h1>Cadastro</h1>
                <p>Informações pessoais</p>
                <form onSubmit={handleSubmit(signUp)}>
                    <Input label="Nome" fieldName="nome" type="text" placeholder="Ex: Samuel Leão"  {...register('nome')}/>
                    <p>{errors.nome?.message}</p>
                    <Input label="Email" fieldName="email" type="email" placeholder="Ex:samuel@kenzie.com.br" {...register('email')}/>
                    <p>{errors.email?.message}</p>
                    <Input label="CPF" fieldName="cpf" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF no formato: xxx.xxx.xxx-xx" placeholder="000.000.000-00"  {...register('cpf')}/>
                    <p>{errors.cpf?.message}</p>
                    <Input label="Celular" fieldName="celular" type="tel" placeholder="(DDD) 90000-0000" {...register('telefone')}/>
                    <p>{errors.telefone?.message}</p>
                    <Input label="Data de nascimento" fieldName="dataNascimento" type="date" placeholder="00/00/00"{...register('aniversario')}/>
                    <p>{errors.aniversario?.message}</p>
                    <Input label="Descrição" fieldName="descricao" type="text" placeholder="Digitar descrição" className="descricao"{...register('bio')}/>
                    <p>{errors.bio?.message}</p>
                    <p>Informações de endereço</p>
                    <Input label="CEP" fieldName="cep" type="text" placeholder="00000.000"/>
                    <Input label="Estado" fieldName="estado" type="text" placeholder="Digitar Estado"/>
                    <Input label="Cidade" fieldName="cidade" type="text" placeholder="Digitar cidade"/>
                    <Input label="Rua" fieldName="rua" type="text" placeholder="Digitar rua"/>
                    <Input label="Numero" fieldName="numero" type="text" placeholder="Digitar número"/>
                    <Input label="Complemento" fieldName="complemento" type="text" placeholder="Ex: apart 307"/>
                    <p className="conta">Tipo de conta</p>
                    <div className="input-option356">
                        <div className="radio">
                            <label>
                                <input type="radio" id="comprador" name="tipoConta" value="comprador" checked/>
                                <span>Comprador</span>
                            </label>

                        </div>
                        
                        <div className="radio">
                            <label>
                                <input type="radio" id="anunciante" name="tipoConta" value="anunciante"/>
                                <span>Anunciante</span>
                            </label>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Input label="Senha" fieldName="senha" placeholder="Digitar senha"{...register('senha')}/>
                    <p>{errors.senha?.message}</p>
                    <Input label="Confirmar Senha" fieldName="confirmarSenha" placeholder="Digitar senha"{...register('senha')}/>
                    <p>{errors.senha?.message}</p>
                    <Button backgroundColor="var(--color-brand1)"
                    border= ""
                    backgroundColorHover= ""
                    borderHover= ""
                    fontColor= "var(--color-whiteFixed)"
                    fontColorHover= ""
                    onClick={()=>{handleSubmit(signUp)}}
                    type="submit"
                    className="">Finalizar cadastro</Button>

                </form>
                


            </Container>
            <Footer/>
        </Div>

        
    )
}

export default RegisterPage