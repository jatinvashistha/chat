import { Avatar, Box, Button, Container, FormLabel, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import wel from "../../assets/images/wel.png"

 
export const fileUploadCss =
    {
        cursor:"pointer",
        marginLeft:"-5%",
        width:"110%",
        border:"none",
        height:"100%",
        color:"#ECC94B",
        backgroundColor:"white"
    }


const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}

const Register = () => {
    
    const [email,setEmail] = useState("")

    const [name,setName] = useState("")

    const [password, setPassword] = useState("")
     const [cPassword,setCpassword] = useState("")

   


 

  return ( 
  <Container h={'100%'} >
  
  <VStack h={"full"} justifyContent="center"   spacing='1'    >
  <Image  boxSize={"80px"} src={wel} objectFit={"contain"} />
  
    <Heading textTransform="uppercase" children={"Sign up with Email"} padding={'2'}/>
<p>Enter your  details and dive into a realm of <br /> ancient wisdom! 💫</p>
    <form 
   
     style={{width:'100%'}}>

         

    <Box my={'3'}>
 <FormLabel htmlFor='name' children=" Your Name"/>
<Input 
   required
    id='name'
    value={name}
    onChange={e => setName(e.target.value)}
    placeholder='abc'
    type={'text'}
    focusBorderColor='yellow.500'
/>
 </Box>

 <Box my={'3'}>
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

 <Box my={'3'}>
 <FormLabel htmlFor='password' children="Password"/>
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

                  
 <Box my={'3'}>
 <FormLabel htmlFor='password' children="Confirm Password"/>
<Input 
required
id='password'
value={cPassword}
onChange={e => setCpassword(e.target.value)}
placeholder='Password'
type={'password'}
focusBorderColor='yellow.500'
/>
 </Box>

 

 

 <Button my={'3'} w={"full"} colorScheme='yellow' type='submit'>Create an account</Button>

 <Box my={'3'}>
    Already Signed Up?{' '}
   <Link to="/login"><Button colorScheme='yellow' variant="link"> Login</Button>{" "}
   here
   </Link>
 </Box>
    </form>
  </VStack>

  </Container>)
}
export default Register