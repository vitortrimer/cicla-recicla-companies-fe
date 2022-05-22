import { Input, Button, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import UserService from '../../services/User'
import logoImage from '../../icons/logo.png'
import * as S from './Styles'

const Login = () => {

  const service = new UserService()
  const [formData, setFormData] = useState({
    document: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    service.login(formData).then((response) => {
      if(response.data) {
        const data = response.data
        localStorage.setItem("user-token", data.token)
        localStorage.setItem("user-name", data.name)
        window.location.assign("/")
      }
    })
  }

  const redirectToRegister = () => {
    window.location.assign("/cadastro")
  }

  const handleInput = (e) => {
    const inputName = e.target.name;

    setFormData(
      prevState => ({
        ...prevState,
        [inputName]: e.target.value
      })
    );
  }

  return(
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Logo src={logoImage} />
        <S.Welcomne>
          <p>BEM VINDO!</p>
          <span>Por favor, insira seus dados.</span>
        </S.Welcomne>
        <S.InputContainer>
        <p>CNPJ</p>
        <Input
          type="text"
          value={formData.document}
          onChange={handleInput}
          name="document"
          placeholder='CNPJ sem pontuação'
        />
        </S.InputContainer>
        <S.InputContainer>
          <p>Senha</p>
          <Input
            value={formData.password}
            onChange={handleInput}
            type="password"
            name="password"
            placeholder='********'
          />
        </S.InputContainer>
        <S.SubmitButton type="submit" onClick={handleSubmit}>
          ENTRAR
        </S.SubmitButton>
        <S.SubmitButton onClick={redirectToRegister}>
          CADASTRAR
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}

export default Login;