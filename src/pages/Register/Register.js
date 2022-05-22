import { Input, Button, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import UserService from '../../services/User'
import logoImage from '../../icons/logo.png'
import * as S from '../Login/Styles'

const Register = () => {
  const service = new UserService()
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    service.register(formData).then((response) => {
      if(response.data) {
        const data = response.data
        localStorage.setItem("user-token", data.token)
        localStorage.setItem("user-name", data.name)
        window.location.assign("/")
      }
    })
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
          <p>CADASTRAR!</p>
          <span>Por favor, insira alguns dados.</span>
        </S.Welcomne>
        <S.InputContainer>
        <p>Nome</p>
        <Input
          type="text"
          value={formData.name}
          onChange={handleInput}
          name="name"
          placeholder='Nome da empresa'
        />
        </S.InputContainer>
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
        <p>Email</p>
        <Input
          type="text"
          value={formData.email}
          onChange={handleInput}
          name="email"
          placeholder='Email'
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
          FAZER LOGIN
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}

export default Register;