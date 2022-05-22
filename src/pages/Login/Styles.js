import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #F8F8F8;
  max-width: 600px;
`

export const Logo = styled.img`
  margin-top: 10vh;
  width: 337px;
  object-fit: cover;

`

export const Welcomne = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #030303;
  font-family: 'Poppins';
  font-style: normal;

  margin-bottom: 24px;
  p {
    font-size: 34px;
    font-weight: 500;
  }

  span {
    color: #636364;
  }
`

export const InputContainer = styled.div`
  padding-bottom: 24px;
  width: 100%;

  p {
    margin-bottom: 8px;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  background: #338152;
  box-shadow: 0px 4px 10px rgba(233, 68, 75, 0.25);
  border-radius: 12px;

  color: #FFFFFF;
  font-family: 'Poppins' !important;
  font-weight: 500;
  font-size: 14px;

  padding: 8px 0;
  margin-bottom: 24px;

`
