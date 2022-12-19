import { Alert, AlertIcon, Avatar, Box, Button, Checkbox, Divider, Flex, FormControl, FormErrorMessage, HStack, Image, Input, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const PaymentPage = () => {
  const [input, setInput] = useState('')

  const handlechange = (e) => setInput(e.target.value)
  const isError = input === ''

  const alert=()=>{
    <Alert status='success'>
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>

  }
  return (
    <div>
      <Flex bg='#008ECC'  py='10px'>
       <Image  pl='25%' src='https://www.jiomart.com/msassets/jiomart_logo_beta.svg' size={{sm:'sm',md:"sm"}}></Image>
      </Flex>
      <Flex mt='10px'>
        <Text color='black' fontWeight='semibold' fontSize={{sm:'20px',md:'20px',lg:'30px'}} pl={{sm:'1cm',md:"1cm",lg:'4cm'}}>Order Summary</Text>
        <Spacer/>
        <HStack  spacing={{sm:'1cm'}} px={{sm:"10px",md:'15px',lg:'4cm'}}>
        <Text>Your Cart</Text>
       
        <Text>Order Summary</Text>
       
        <Text>Payment</Text>
        </HStack> 
      </Flex>
      <SimpleGrid columns={[1,1,2,2]} w='80%' margin='auto'  mt='2cm'>
        
        <Box w='100%' >
           <Text fontWeight='bold' fontSize='20px' align='left'>Select the Delivery Address</Text>
           <Box display='flex'>
           <Box w='70%'  h='4cm' bg=''>
            <FormControl isInvalid={isError}>
           <Input mt={4} placeholder='Pin Code' onChange={handlechange} isRequired={true}></Input>
           {
            isError&&(
              <FormErrorMessage>Pincode is required.</FormErrorMessage>
            )
           }
           <Input  mt={4}  placeholder='Building/Apartment Name'  onChange={handlechange}></Input>
           {
            isError&&(
              <FormErrorMessage>Building and Aparment is required.</FormErrorMessage>
            )
           }
           <Input  mt={4} placeholder='Address'  onChange={handlechange}></Input>
           {
            isError&&(
              <FormErrorMessage>Adress and Aparment is required.</FormErrorMessage>
            )
           }
           <Input  mt={4} placeholder='LandMark/Area'  onChange={handlechange}></Input>
           {
            isError&&(
              <FormErrorMessage>Land/Area is required.</FormErrorMessage>
            )
           }
           
           <Input  mt={4} placeholder='City, State'  onChange={handlechange}></Input>
           {
            isError&&(
              <FormErrorMessage>City is required.</FormErrorMessage>
            )
           }
           </FormControl>
           </Box>
           <Button mt='11cm' align='left' bg='#008ECC' color='white' onClick={alert}>Add Address</Button>
           </Box>
        </Box>
        <Box alignItems='left' mt={{sm:'30px',md:'30px'}}>
            <HStack px='10px' spacing={5}>
              <Avatar src='https://png.pngtree.com/element_pic/00/00/05/31574d5cbd9f117.jpg'size='md' alt='whatsapp'></Avatar>
              <Text color='black' fontSize='md' fontWeight='medium'>Enable order updates and important information on Whatsapp</Text>
              <Checkbox></Checkbox>
            </HStack>
            <Divider orientation='horizontal'/>
            <Box py='10px' px='30px'>
              <Text align ='left' mt='1cm' fontSize='20px' fontWeight='medium'>Payment Details</Text>
              <HStack px='20px' mt='10px'>
              <Text color='grey'>MRP TOTAL</Text>
              <Spacer/>
              <Text  color='black' fontWeight='bold'>₹55</Text>
              </HStack>
              <Divider></Divider>
              <HStack px='20px' mt='10px'>
              <Text color='grey'>PRODUCT DISCOUNT</Text>
              <Spacer/>
              <Text  color='black' fontWeight='bold' >₹-55</Text>
              </HStack>
              <HStack px='20px' mt='10px'>
              <Text color='black' fontWeight='medium'>Total Amount</Text>
              <Spacer/>
              <Text color='black' fontWeight='bold'>₹55</Text>
              </HStack>
               <Button bg='#008ECC' color='white' alignSelf='right'>Make Payment</Button>

            </Box>
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default PaymentPage