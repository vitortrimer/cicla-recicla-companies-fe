import styled from "styled-components"

export const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  margin-top: 50px;
`


export const ProductTitle = styled.h3`
  margin-bottom: 50px;
`

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 236px;
  height: 236px;
  background: #fff;
  margin-top: 16px;

  border-radius: 50%;
`

export const ProductImage = styled.img`
  width: 236px;
  height: 236px;
  object-fit: scale-down;
  border-radius: 50%;
`

export const EditButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 15px;
`

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`

export const ProductDescription = styled.div`
  width: 100%;
`

export const DescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #202020;
`

export const ProductDescriptionItemsContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 26px;
`

export const ProductDescriptionItem = styled.div`
  display: flex;
  align-items: center;

  background: #FFFFFF;
  padding: 10px 26px;

  span {
    color: #338152;
    margin-left: 24px;
  }

  img {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin-bottom: 20px;
`

export const ActionButton = styled.button`
  margin-left: 16px;
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 700;

  img {
    margin-left: 8px;
  }
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
`

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  margin-left: 16px;

  img {
    margin-top: 12px;
    width: 178px;
    object-fit: cover;
  }
`