import React from "react"
import * as S from "./Styles"
import checkIcon from "../../icons/check.png"

const Modal = ({ handleDismiss }) => {

  return(
    <S.Backdrop>
    <S.ModalContainer>
      <S.CircleIcon>
        <img src={checkIcon} alt="check" />
      </S.CircleIcon>
      <S.Title>
        SUCESSO
      </S.Title>
      <S.Subtitle>
        Produto cadastrado com sucesso!
      </S.Subtitle>
      <S.CloseButton onClick={handleDismiss}>
        FECHAR
      </S.CloseButton>
    </S.ModalContainer>
    </S.Backdrop>
  )
}
export default Modal