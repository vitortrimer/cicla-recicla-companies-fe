import styled from "styled-components"

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  padding-top: 69px;
  width: 331px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
`

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -22%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: #338152;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.p`
  text-align: center;
  font-family: 'Poppins' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #7C8691;
`

export const Subtitle = styled.p`
  margin-top: 18px;
  text-align: center;
  color: #D3DAE0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`

export const CloseButton = styled.button`
  margin-top: 29px;
  margin-bottom: 16px;
  background: #D0DEEB;
  border-radius: 4px;
  padding: 10px 0;
  width: 144px;

  font-family: 'Poppins' !important;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 21px;
  color: #9BA9B9;

`