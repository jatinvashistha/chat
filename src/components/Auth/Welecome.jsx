 import { Box, Button, Container, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import nam from "../../assets/images/nam.png";
 import soc from "../../assets/images/soc.png";
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
       <Container w={"100%"} justifyContent={"center"} >
             <img boxSize={"sm"}  src={nam} objectFit={"contain"} />
            <VStack width={"full"} alignItems={'center' }
                      justifyContent={"center"} spacing={10}>
                <Heading>
      Discover the timeless wisdom of  &nbsp;
      <span style={{ color: "#FFC746" }}>the Vedas.</span>
    </Heading>
                <p>Sign up and <span style={{ color: "#FFC746" }}>  journey through ancient knowledge with Arya </span>🌟</p>
                <img boxSize={40} src={soc} objectFit={"contain"} />
                <p>OR</p>
                  <Button my={'4'} w={"full"} colorScheme='yellow' type='submit'>Sign up with mail</Button>
                <Box my={'3'}>
    Existing account?{' '}
   <Link to="/login"><Button colorScheme='yellow' variant="link"> Login</Button>{" "}
   here
   </Link>
 </Box>
            </VStack>
            
        </Container>
        
   
    
  );
}

export default Welcome;
