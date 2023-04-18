import Button from "../../components/buttons"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { NavBar } from "../../components/navBar"
import { Container, Div } from "./style"

function RegisterPage(){
    return(
        <Div>
            <NavBar/>
            <Container>
                <h1>Cadastro</h1>
                <p>Informações pessoais</p>
                <form>
                <Input label="Nome" fieldName="nome" type="text" placeholder="Ex: Samuel Leão"/>
                <Input label="Email" fieldName="email" type="email" placeholder="Ex:samuel@kenzie.com.br"/>
                <Input label="CPF" fieldName="cpf" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF no formato: xxx.xxx.xxx-xx" placeholder="000.000.000-00"/>
                <Input label="Celular" fieldName="celular" type="tel" placeholder="(DDD) 90000-0000"/>
                <Input label="Data de nascimento" fieldName="dataNascimento" type="date" placeholder="00/00/00"/>
                <Input label="Descrição" fieldName="descricao" type="text" placeholder="Digitar descrição" className="descricao"/>
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
                <Input label="Senha" fieldName="senha" placeholder="Digitar senha"/>
                <Input label="Confirmar Senha" fieldName="confirmarSenha" placeholder="Digitar senha"/>
                <Button backgroundColor="var(--color-brand1)"
                border= ""
                backgroundColorHover= ""
                borderHover= ""
                fontColor= "var(--color-whiteFixed)"
                fontColorHover= ""
                onClick={()=>{}}
                type="button"
                className="">Finalizar cadastro</Button>

                </form>
                


            </Container>
            <Footer/>
        </Div>

        
    )
}

export default RegisterPage