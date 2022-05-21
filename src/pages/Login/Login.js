import { Input, Button, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'
import UserService from '../../services/User'

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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={formData.document}
        onChange={handleInput}
        name="document"
        placeholder='CNPJ'
      />
      <Input
        value={formData.password}
        onChange={handleInput}
        type="password"
        name="password"
        placeholder='Password'
      />
      <Button type="submit" colorScheme='teal' size='md' onClick={handleSubmit}>
        Login
      </Button>
    </form>
  )
}

export default Login;