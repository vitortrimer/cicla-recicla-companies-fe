import ProductRegistrationForm from '../../components/ProductRegistrationForm/ProductRegistrationForm';
import ProductsSidebar from '../../components/ProductsSidebar/ProductsSidebar';
import * as S from './Styles'

const Home = () => {

  const products = [
    {
      id: 1,
      name: "Copo de café",
      type: "Plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 2,
      name: "Copo de café",
      type: "Metal",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 3,
      name: "Copo de café",
      type: "Papel",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 4,
      name: "Copo de café",
      type: "Vidro",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 5,
      name: "Copo de café",
      type: "plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 6,
      name: "Copo de café",
      type: "plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 7,
      name: "Copo de café",
      type: "plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 8,
      name: "Copo de café",
      type: "plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },  {
      id: 9,
      name: "Copo de café",
      type: "plástico",
      imgUrl: "https://embalagens.lojamegavale.com.br/imagens/copos-termico-cafe-descartaveis.png"
    },
  ]

  return(
    <S.HomeContainer>
      <S.ProductsMenu>
        <ProductsSidebar products={products} />
      </S.ProductsMenu>
      <S.MainContent>
        <ProductRegistrationForm product={products[0]} />
      </S.MainContent>
    </S.HomeContainer>
  )
}
export default Home;