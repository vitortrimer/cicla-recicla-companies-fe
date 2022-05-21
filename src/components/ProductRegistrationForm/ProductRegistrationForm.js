import { useState, useEffect, useRef } from "react";
import * as S from "./Styles";

import imagePaceholder from "../../icons/image-placeholder.png";
import editIcon from "../../icons/icone-editar.png"

const ProductRegistrationForm = () => {
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
    <div>
      <S.ImagePreviewContainer>
        <img
          src={selectedFile ? previewImageUrl : imagePaceholder}
          alt="Imagem do produto"
        />
        <S.EditButton
          onClick={handleClickEditImage}
        >
          <img src={editIcon} alt="editar"/>
        </S.EditButton>
      </S.ImagePreviewContainer>
      <input
        type="file"
        id="product-image"
        name="product-image"
        accept="image/png, image/jpeg" 
        onChange={uploadFile}
        ref={hiddenFileInput}
        style={{display: 'none'}}
      />
    </div>
  )
}

export default ProductRegistrationForm