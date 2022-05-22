import logo from "../../icons/logo.png"
import plusIcon from "../../icons/botao-mais.png"

import * as S from "./Styles"
import RegisteredProduct from "../RegisteredProduct/RegisteredProduct"

const ProductsSidebar = ({ products }) => {

  return(
    <div>
      <S.CenteredContent>
        <S.ImageLogo src={logo} />
        <h3>
          Selecione seu produto
        </h3>
        <S.ComposedButton>
          <img src={plusIcon} alt="Botão cadastrar produto" />
          <span>Cadastrar produto</span>
        </S.ComposedButton>
        <S.ProductsContainer>
          { products.map(product => (
            <RegisteredProduct product={product} key={product.id} />
          ))}
        </S.ProductsContainer>
      </S.CenteredContent>
    </div>
  )
}
export default ProductsSidebar