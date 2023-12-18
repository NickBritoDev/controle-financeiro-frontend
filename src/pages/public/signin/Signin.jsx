import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Text,
  Image,
  VStack
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import React, { useState } from 'react'
import { FcMoneyTransfer } from 'react-icons/fc'
import logo from '../../../images/logo.jpeg'
import '../../../animations/form.css'
import '../../../animations/image.css'
import '../../../animations/logo.css'
import { useNavigate } from 'react-router-dom'

export default function Signin () {
  const navigate = useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    navigate('/home')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin()
  }

  return (
    <Box
      overflow={'hidden'}
      h={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      borderRadius={'40px 40px 0 0'}
      w={{ base: '100%', md: '500px', lg: '650px' }}
      justifyContent="space-around"
      color={'white'}
    >
      <Box bg="black" filter="grayscale(40%) blur(4px)" bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8U37MZZON_Qmyl_pGkb_K5uD5zU0zFdG6w&usqp=CAU')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%" h={'80vh'} pos={'fixed'} top={0}></Box>
      <VStack w={'100vw'} margin={'10px auto'} className='scale-up-top' mt={{ base: '-90%', md: '-90%', lg: '-60%', sm: '-60%' }}>
        <Image className='slide-bck-center' bg={'rgba(98, 87, 148, 0.4)'} p={2} boxShadow={'2xl'} borderRadius={'50%'} mt={12} width={'130px'} src={logo} />
        <Text
          color={'gray.100'} mt={2} display={'flex'} gap={2} alignItems={'center'}
          justifyContent={'center'} fontFamily={'sans-serif'}
          fontWeight={'bold'} fontSize={{ base: '26', md: '28', lg: '30' }} >
          <Text>Controle</Text>
          <FcMoneyTransfer fontSize={40} />
          <Text>Financeiro</Text>
        </Text>
      </VStack>
      <VStack className='scale-up-bottom' boxShadow={'2xl'} pos={'absolute'} bottom={-1} borderRadius={'50px 50px 0 0'} w={'100%'} bg={'gray.700'} >
        <form onSubmit={handleSubmit}>
          <FormControl id="usuario">
            <FormLabel fontSize={{ base: '20', md: '22', lg: '24' }} mt={8} ml={1}>Usuario</FormLabel>
            <Input
              fontSize={{ base: '14', md: '16', lg: '18' }}
              _placeholder={{ color: 'white' }}
              borderRadius={'25px'}
              type="text"
              placeholder="Seu Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </FormControl>
          <FormControl id="senha">
            <FormLabel fontSize={{ base: '20', md: '22', lg: '24' }} mt={4} ml={1}>Senha</FormLabel>
            <InputGroup size='md'>
              <Input
                fontSize={{ base: '14', md: '16', lg: '18' }}
                _placeholder={{ color: 'white' }}
                borderRadius={'25px'}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Sua Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                mb={12}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button fontSize={{ base: '22', md: '24', lg: '26' }} w={'100%'} mb={12} borderRadius={'25px'} type="submit" colorScheme="green">
            Acessar
          </Button>
        </form>
      </VStack>
    </Box>
  )
}
