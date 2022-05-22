import { useEffect, useState } from "react"
import * as S from "./Styles"

const RegisteredProduct = ({ product, index, setSelectedIndex }) => {
  const [typeColor, setTypeColor] = useState("#C4C4C4");
  const [typeTextColor, setTypeTextColor] = useState("#53595F");

  const handleItem = (index) => {
    setSelectedIndex(index, false)
  }

  useEffect(() => {
    if(product.type === "Plástico") {
      setTypeColor("#D24528");
      setTypeTextColor("#000000");
    }
    if(product.type === "Metal") {
      setTypeColor("#DFBD41");
      setTypeTextColor("#53595F");
    }
    if(product.type === "Vidro") {
      setTypeColor("#3C6A22");
      setTypeTextColor("#000000");
    }
    if(product.type === "Papel") {
      setTypeColor("#296EB5");
      setTypeTextColor("#000000");
    }
  }, [])

  return(
    <S.ProductCard onClick={() => { handleItem(index) }}>
      <S.ProductContent>
        <S.ProductImage src={product.image} />
        <span>
          {product.name}
        </span>
      </S.ProductContent>
      <S.ProductsContainer>
        <S.Product
          textColor={typeTextColor}
          background={typeColor}
        >
          {product.type}
        </S.Product>
      </S.ProductsContainer>
    </S.ProductCard>
  )
}

export default RegisteredProduct