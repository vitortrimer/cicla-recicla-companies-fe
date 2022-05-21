import ProductRegistrationForm from '../../components/ProductRegistrationForm/ProductRegistrationForm';
import * as S from './Styles'

const Home = () => {

  return(
    <S.HomeContainer>
      <S.MainContent>
        <ProductRegistrationForm />
      </S.MainContent>
      <S.ProductsMenu>
        teste
      </S.ProductsMenu>
    </S.HomeContainer>
  )
}
export default Home;