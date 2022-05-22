import logo from "../../icons/logo.png"
import plusIcon from "../../icons/botao-mais.png"

import * as S from "./Styles"
import RegisteredProduct from "../RegisteredProduct/RegisteredProduct"

const ProductsSidebar = ({ products, setSelectedIndex }) => {

  const handleAdd = () => {
    setSelectedIndex(0, true)
  }

  return(
    <div>
      <S.CenteredContent>
        <S.ImageLogo src={logo} />
        <h3>
          Selecione seu produto
        </h3>
        <S.ComposedButton onClick={handleAdd}>
          <img src={plusIcon} alt="Botão cadastrar produto" />
          <span>Cadastrar produto</span>
        </S.ComposedButton>
        <S.ProductsContainer >
          { products.map((product, index) => (
            <RegisteredProduct setSelectedIndex={setSelectedIndex} index={index} product={product} key={index} />
          ))}
        </S.ProductsContainer>
      </S.CenteredContent>
    </div>
  )
}
export default ProductsSidebar