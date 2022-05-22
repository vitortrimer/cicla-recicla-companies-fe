import { useState, useEffect, useRef } from "react";
import recycleImage from "../../icons/reciclagem.png";
import editImage from "../../icons/edit.png";
import saveImage from "../../icons/salvar.png";
import deleteImage from "../../icons/excluir.png";
import imagePaceholder from "../../icons/image-placeholder.png"
import ProductService from "../../services/Product";
import { Input } from '@chakra-ui/react';
import Modal from "../Modal/Modal";
import * as S from "./Styles";

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  IconButton
} from '@chakra-ui/react'

import { 
  ChevronDownIcon,
  AddIcon
} from '@chakra-ui/icons'

import editIcon from "../../icons/icone-editar.png"

const ProductRegistrationForm = ({ product, handleAddItem }) => {
  const hiddenFileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [isPresentingSuccess, setIsPresentingSuccess] = useState(false)
  const [responseData, setResponseData] = useState({})

  const service = new ProductService();

  const [formData, setFormData] = useState({
    name: "",
    type: "Tipo de material",
    image: "",
    disposalInstructions: [
      { icon: "", instruction: "" },
    ]
  })

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
    getBase64(e.target.files[0])
    setSelectedFile(e.target.files[0])
  }

  const handleClickEditImage = event => {
    hiddenFileInput.current.click();
  };

  const handleAddInstruction = () => {
    let disposalInstructions = formData.disposalInstructions
    disposalInstructions.push({icon: "", instruction: ""})

    setFormData(prevState => ({
      ...prevState,
      disposalInstructions: disposalInstructions
    }))
  }

  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setFormData(prevState => ({
      ...prevState,
      [inputName]: value
    }))
  }

  const handleType = (typeName) => {
    setFormData(prevState => ({
      ...prevState,
      type: typeName
    }))
  }

  const handleInstruction = (e, index) => {
    const value = e.target.value;
    let disposalInstructions = formData.disposalInstructions;
    disposalInstructions[index].instruction = value;

    setFormData(prevState => ({
      ...prevState,
      disposalInstructions: disposalInstructions
    }))
  }

  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormData(prevState => ({
        ...prevState,
        image: reader.result
      }))
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  const handleSubmit = () => {
    service.packaging(formData).then(result => {
      if(result.data) {
        setResponseData(result.data)
        setIsPresentingSuccess(true)
      }
    })
  }

  const dismissModal = () => {
    setIsPresentingSuccess(false)
    handleAddItem(responseData)
  }

  return(
    <S.FormContainer>
      { isPresentingSuccess &&
        <Modal handleDismiss={dismissModal} />
      }
      <Input name="name" onChange={handleChange} value={formData.name} placeholder='Nome do produto' size='md' />
      <S.ImagePreviewContainer>
        <S.ProductImage
          src={selectedFile ? previewImageUrl : imagePaceholder}
          alt="Imagem do produto"
        />
        <S.EditButton
          onClick={handleClickEditImage}
        >
          <img src={editIcon} alt="editar"/>
        </S.EditButton>
      </S.ImagePreviewContainer>
      <S.MenuButtonContainer>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {formData.type}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {handleType("Plástico")}} minH='40px'>
              <span>Plástico</span>
            </MenuItem>
            <MenuItem onClick={() => {handleType("Metal")}} minH='40px'>
              <span>Metal</span>
            </MenuItem>
            <MenuItem onClick={() => {handleType("Vidro")}}  minH='40px'>
              <span>Vidro</span>
            </MenuItem>
            <MenuItem onClick={() => {handleType("Papel")}} minH='40px'>
              <span>Papel</span>
            </MenuItem>
            <MenuItem onClick={() => {handleType("Não Reciclável")}} minH='40px'>
              <span>Não Reciclável</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </S.MenuButtonContainer>
      <S.ProductDescription>
        <S.DescriptionTitle>
        Instruções de descarte:
        </S.DescriptionTitle>
        <S.ProductDescriptionItemsContainer>
          { formData.disposalInstructions.map((_, index) => (
            <S.InfoInputView value={formData.disposalInstructions[index].instruction} onChange={(e) => {handleInstruction(e, index)}} key={index}>
            <Input placeholder='Instrução de descarte' size='md' />
            { index === (formData.disposalInstructions.length - 1) &&
              (
              <IconButton
              variant='outline'
              aria-label='Adicionar novo'
              icon={<AddIcon />}
              onClick={handleAddInstruction}
              />
              )
            }
            </S.InfoInputView>
          ))

          }

        </S.ProductDescriptionItemsContainer>
      </S.ProductDescription>

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
        <S.ActionButton onClick={handleSubmit}>
          <span>Salvar</span>
          <img src={saveImage} alt="Ícone disquete"/>
        </S.ActionButton>
      </S.FormActions>
    </S.FormContainer>
  )
}

export default ProductRegistrationForm