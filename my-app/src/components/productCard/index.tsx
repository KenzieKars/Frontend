import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbreviate";
import { ThemeTitle } from "../../styles/typography";
import { IProductCardProps } from "../../interfaces/productCard";
import { ProductContainer, ProductOwner, ProductDetails } from "./style";


export const ProductCard = ({ announcement }: IProductCardProps) => {
 
    return (
      <ProductContainer color={announcement.is_published ? "#4529E6" : "#ADB5BD"}>
        {/* {url === "https://motorshopm6.vercel.app/profileUser" ? ( */}
          <div
          >
            <img src={announcement.cover_img} alt={announcement.title} />
            <label>{announcement.is_published ? "Ativo" : "Inativo"}</label>
          </div>
         (
          <div
          >
            <img src={announcement.cover_img} alt={announcement.title} />
          </div>
        )
  
        <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
          {announcement.title}
        </ThemeTitle>
        <div className="product-description">
          <p>{announcement.description}</p>
        </div>
  
        <ProductOwner
        >
          <p
            className="owner-avatar"
            style={{ backgroundColor: stringToColor(announcement.user.name) }}
          >
            {nameAbbreviate(announcement.user.name)}
          </p>
          <span className="owner-name">{announcement.user.name}</span>
        </ProductOwner>
  
        <ProductDetails>
          <div className="product-details">
            <p className="product-mileage">{announcement.mileage} KM</p>
            <p className="product-year">{announcement.year}</p>
          </div>
          <span className="product-price">
            {announcement.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </ProductDetails>
      </ProductContainer>
    );
  };



