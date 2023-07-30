import { Box, Button, Container, Divider, FormLabel, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
 import soc from "../../assets/images/soc.png";

const Login = () => {
    
    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

 

  return ( <Container h={'95vh'} >
  
  <VStack h={'full'} justifyContent="center" spacing={'2'}>
    <Heading children={"Login to Mokx"}/>
          <p>Welcome back! Sign in using your social <br />&nbsp; &nbsp;&nbsp;  account or email to continue us</p>
          <img src={soc} alt="image_description"></img>
 
      <p>OR</p>
       
  
    <form 
    
    style={{width:'100%'}}>
 <Box my={'2'}>
 <FormLabel htmlFor='email' children="Your email"/>
<Input 
required
id='email'
value={email}
onChange={e => setEmail(e.target.value)}
placeholder='abc@gmail.com'
type={'email'}
focusBorderColor='yellow.500'
/>
 </Box>
 
 <Box my={'4'}>
 <FormLabel htmlFor='password' children=" Password"/>
<Input 
required
id='password'
value={password}
onChange={e => setPassword(e.target.value)}
placeholder='Password'
type={'password'}
focusBorderColor='yellow.500'
/>
 </Box>

  

 <Button my={'4'} w={"full"} colorScheme='yellow' type='submit'>Login</Button>
<Box>
    <Link to="/forgetpassword"><Button w={"full"} fontSize={'sm'} colorScheme='yellow'
    variant={'link'}
    >Forget Password?</Button></Link>
 </Box>
 <Box my={'4'}>
    New User?{' '}
   <Link to="/register"><Button colorScheme='yellow' variant="link"> Sign Up</Button>{" "}
   here
   </Link>
 </Box>
    </form>
  </VStack>

  </Container>)
}

export default Login