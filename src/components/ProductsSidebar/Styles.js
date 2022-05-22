import styled from "styled-components"

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  h3 {
    margin-top: 16px;
  }

`

export const ImageLogo = styled.img`
  width: 199px;
  margin-top: 16px;

  object-fit: cover;

`

export const ComposedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  margin-top: 16px;

  span {
    margin-left: 16px;
  }

`

export const ProductsContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 16px;

  height: 100vh;
  overflow-y: scroll;

  flex: 1 auto;
`
