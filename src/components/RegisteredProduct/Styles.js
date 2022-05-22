import styled from "styled-components"

export const ProductCard = styled.button`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 16px;

  :not(:first-child) {
    margin-top: 16px;
  }

  background: white;
  border-radius: 20px;
`

export const ProductImage = styled.img`
  object-fit: scale-down;
  width: 35px;
  height: 35px;
`

export const ProductContent = styled.div`
  display: flex;
  font-weight: 700;

  margin-bottom: 12px;
  span {
    margin-left: 12px;
    flex: 1;
  }

`

export const ProductsContainer = styled.div`
  display: flex;
`

export const Product = styled.div`
  padding: 4px 8px;

  color: ${props => props.textColor || "#000"};
  background: ${ props => props.background || "rgba(18, 170, 115, 0.18)" };
  
  border-radius: 30px;

  font-size: 12px;
  font-weight: 500;
  font-family: 'Poppins';
`