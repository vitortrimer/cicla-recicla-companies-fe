import { Input, Button, InputGroup } from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("submit works")
    console.log("form data", formData)
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
        value={formData.username}
        onChange={handleInput}
        name="username"
        placeholder='Username'
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