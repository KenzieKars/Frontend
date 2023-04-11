import Button from "../../components/buttons"
import NavBar from "../../components/navBar"
import { Footer } from "../../components/footer"
import { Container, Aside, Main, ProductContainer, ProductDetails, ProductOwner } from "./style"
import { ThemeTitle } from "../../styles/typography"
import { Products } from "./style"
import { Pagination } from "./style"

const banner = require("../../assets/car.png") as string;

function HomePage(){
    return(
        <>
            <NavBar/>
            <Container>
                <img src={banner} alt="banner" />
                <ThemeTitle
                    tag= "h1"
                    className=""
                    titleSize="Heading-1-700"
                >Motors Shop</ThemeTitle>
                <ThemeTitle
                    tag= "h1"
                    className=""
                    titleSize="Heading-2-600"
                >A melhor plataforma de anúncios de carros do país</ThemeTitle>
            </Container>
            <Main>
                <Aside>
                    <ul>
                        <ThemeTitle
                        tag= "h2"
                        className=""
                        titleSize="Heading-4-600"
                        >Marca</ThemeTitle>
                        <li><button className="btn">General Motors</button></li>
                        <li><button className="btn">Fiat</button></li>
                        <li><button className="btn">Ford</button></li>
                        <li><button className="btn">Honda</button></li>
                        <li><button className="btn">Porsche</button></li>
                        <li><button className="btn">Volswagen</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Modelo</ThemeTitle>
                        <li><button className="btn">Civic</button></li>
                        <li><button className="btn">Corolla</button></li>
                        <li><button className="btn">Cruze</button></li>
                        <li><button className="btn">Fit</button></li>
                        <li><button className="btn">Gol</button></li>
                        <li><button className="btn">Ka</button></li>
                        <li><button className="btn">Onix</button></li>
                        <li><button className="btn">Porsche 718</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Cor</ThemeTitle>
                        <li><button className="btn">Azul</button></li>
                        <li><button className="btn">Branca</button></li>
                        <li><button className="btn">Cinza</button></li>
                        <li><button className="btn">Prata</button></li>
                        <li><button className="btn">Preta</button></li>
                        <li><button className="btn">Verde</button></li>
                    </ul>
                    
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Ano</ThemeTitle>
                        <li><button className="btn">2021</button></li>
                        <li><button className="btn">2018</button></li>
                        <li><button className="btn">2015</button></li>
                        <li><button className="btn">2013</button></li>
                        <li><button className="btn">2012</button></li>
                        <li><button className="btn">2010</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Combustível</ThemeTitle>
                        <li><button className="btn">Diesel</button></li>
                        <li><button className="btn">Etanol</button></li>
                        <li><button className="btn">Gasolina</button></li>
                        <li><button className="btn">Flex</button></li>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Km</ThemeTitle>
                        <div>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Mínima</Button>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Máxima</Button>
                        </div>
                    </ul>
                    <ul>
                    <ThemeTitle
                    tag= "h2"
                    className=""
                    titleSize="Heading-4-600"
                >Preço</ThemeTitle>
                        <div>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Mínimo</Button>
                        <Button
                        backgroundColor= "#CED4DA"
                        border= ""
                        backgroundColorHover= ""
                        borderHover= ""
                        fontColor= "var(--color-grey3)"
                        fontColorHover= ""
                        onClick={()=>{}}
                        type="button"
                        className=""
                        >
                        Máximo</Button>
                        </div>
                    </ul>
                </Aside>
                <Products>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                    <ProductContainer>
                        <div>
                            <img className="product-img" src="https://bluesky-cogcms-prodb.cdn.imgeng.in/media/5o4jo4yv/quattroporte.png?width=520" alt="anuncio" />
                        </div>
                        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
                        Miserati - Ghibli
                        </ThemeTitle>
                        <div className="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere optio unde aliquid error dolorem...</p>
                        </div>
                
                        <ProductOwner>
                            <img className="owner-avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user" />
                            <span className="owner-name">Username</span>
                        </ProductOwner>
                
                        <ProductDetails>
                            <div className="product-details">
                                <p className="product-mileage">0 KM</p>
                                <p className="product-year">2019</p>
                            </div>
                            <span className="product-price">
                                R$ 12.000,00
                            </span>
                        </ProductDetails>
                    </ProductContainer>
                </Products>
            </Main>
            <Pagination>
                <span className="page">1</span>
                <span>de 2</span>
                <button className="btn">Seguinte {'>'} </button>
            </Pagination>
            <Footer/>
        </>
    )
}
export default HomePage
