import {  Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./home.css"
import wel from "../../assets/images/wel.png"
import { Link } from 'react-router-dom'



const Home = () => {
    return (
      <Link to="/welecome"> 
      <section className="home">
          <div className="container">
              <Stack direction={"column"}
              h={"100%"}
               justifyContent={"center"}
               alignItems={"center"}
               spacing={["16","56"]}
              >
                  <VStack
                    width={"full"} alignItems={'center' }
                      justifyContent={"center"}
                      
                      gap={"50vh"}
                  >
                   <Image className='vector-graphics' boxSize={"40"} src={wel} objectFit={"contain"} />
   <Text children="Back to Vedas 🕉️"   />
                  </VStack>
                  
              </Stack>
          </div>
          
            </section>
            </Link>
  )
}

export default Home