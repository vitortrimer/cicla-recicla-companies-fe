
import { useState, useEffect, useRef } from "react";
import recycleImage from "../../icons/reciclagem.png";
import editImage from "../../icons/edit.png";
import saveImage from "../../icons/salvar.png";
import deleteImage from "../../icons/excluir.png"
import * as S from "./Styles";

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
} from '@chakra-ui/react'

import { 
  ChevronDownIcon
} from '@chakra-ui/icons'

import editIcon from "../../icons/icone-editar.png"

const ProductRegistrationView = ({ product }) => {
    const hiddenFileInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [previewImageUrl, setPreviewImageUrl] = useState("");
  
    useEffect(() => {
      if (!selectedFile) {
        setPreviewImageUrl(undefined)
          return
      }
  
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreviewImageUrl(objectUrl)
  
      return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
  
    const uploadFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
      }
  
      setSelectedFile(e.target.files[0])
    }
  
    const handleClickEditImage = event => {
      hiddenFileInput.current.click();
    };
  
    return(
      <S.FormContainer>
        <S.ProductTitle>
          {product.name}
        </S.ProductTitle>
        <S.ImagePreviewContainer>
          <S.ProductImage
            src={product.image}
            alt="Imagem do produto"
          />
          <S.EditButton
            disabled
            onClick={handleClickEditImage}
          >
            <img src={editIcon} alt="editar"/>
          </S.EditButton>
        </S.ImagePreviewContainer>
        <S.BottomContainer>
          <S.ProductDescription>
            <S.DescriptionTitle>
            Instruções de descarte:
            </S.DescriptionTitle>
            <S.ProductDescriptionItemsContainer>
              { product?.disposalInstructions?.map((instruction) => (
                  <S.ProductDescriptionItem>
                    <img src={recycleImage} alt="Ícone de reciclagem" />
                    <span>{instruction.instruction}</span>
                  </S.ProductDescriptionItem>
                ))
              }
            </S.ProductDescriptionItemsContainer>
          </S.ProductDescription>
          <S.AsideContainer>
            <Menu>
              <MenuButton style={{'width': '178px'}} disabled as={Button} rightIcon={<ChevronDownIcon />}>
                {product.type}
              </MenuButton>
              <MenuList>
                <MenuItem minH='40px'>
                  <span>Plástico</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>Metal</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>Vidro</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>Papel</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>Não Reciclável</span>
                </MenuItem>
              </MenuList>
            </Menu>
            <img src={product.qrCode} alt="Código para impressão" />
          </S.AsideContainer>
        </S.BottomContainer>
  
        <input
          type="file"
          id="product-image"
          name="product-image"
          accept="image/png, image/jpeg" 
          onChange={uploadFile}
          ref={hiddenFileInput}
          style={{display: 'none'}}
        />
        <S.FormActions>
          <S.ActionButton>
            <span>Salvar</span>
            <img src={saveImage} alt="Ícone disquete"/>
          </S.ActionButton>
          <S.ActionButton>
            <span>Editar</span>
            <img src={editImage} alt="Ícone lapis"/>
          </S.ActionButton>
          <S.ActionButton>
            <span>Excluir</span>
            <img src={deleteImage} alt="Ícone lixeira"/>
          </S.ActionButton>
        </S.FormActions>
      </S.FormContainer>
  )
}

export default ProductRegistrationView;