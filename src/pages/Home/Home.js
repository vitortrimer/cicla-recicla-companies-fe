import { useEffect, useState } from 'react';
import ProductRegistrationForm from '../../components/ProductRegistrationForm/ProductRegistrationForm';
import ProductRegistrationView from '../../components/ProductRegistrationView/ProductRegistrationView'
import ProductsSidebar from '../../components/ProductsSidebar/ProductsSidebar';
import ProductService from '../../services/Product';
import * as S from './Styles'

const Home = () => {
  const [products, setProducts] = useState([])
  const [isRegistering, setIsRegistering] = useState(true)
  const [selectedProductIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const service = new ProductService();
    service.getPackaging().then(result => {
      if(result?.data?.packaging) {
        setProducts(result.data.packaging)
      }
    })
  }, [])

  const selectFromSidebar = (index, isNewProduct) => {
    setIsRegistering(isNewProduct)
    setProductIndex(index)
  }

  const handleAddItem = (product) => {
    setIsRegistering(false)
    let newProducts = products
    newProducts.push(product)

    setProductIndex(newProducts.length - 1)
    setProducts(newProducts)
  }

  return(
    <S.HomeContainer>
      <S.ProductsMenu>
        <ProductsSidebar setSelectedIndex={selectFromSidebar} products={products} />
      </S.ProductsMenu>
      <S.MainContent>
        {
          isRegistering
          ? <ProductRegistrationForm setSelected={selectFromSidebar} handleAddItem={handleAddItem} />
          : <ProductRegistrationView product={products[selectedProductIndex]} />
        }
        
      </S.MainContent>
    </S.HomeContainer>
  )
}
export default Home;