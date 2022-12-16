import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'

const Product = () => {
  const fruits = useSelector(store => store.AppReducer.fruitsveg)
  const { jiobrand} = useParams()

  const dispatch = useDispatch()
  // const location = useLocation()
  // const [searchParams] = useSearchParams()
  
  useEffect(() => {
    // if(location || books.length === 0){
      //   const sortBy = searchParams.get("sort")
      //   const getBookParams = {
      //     params: {
      //       category: searchParams.getAll("category"),
      //       _sort: sortBy && "release_year",
      //       _order: sortBy,
      //     }
      //   }
          dispatch(getProducts(jiobrand))
      // }
  }, [jiobrand])
  console.log(fruits)
  return (
    <Box>
        <Box>
            <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg'/>
        </Box>
        <Box mt="30px">
          <Flex justifyContent="right" mr="150px">
            <Text>Sort By :</Text>
            <Button variant='outline'size='sm' mr="10px" ml="10px">High To Low</Button>
            <Button variant='outline'size='sm'>Low To High</Button>
          </Flex>

<Box mt="50px">
        <Flex flexDirection="row" w="95%" m="auto">

          <Box w="800px" border="1px solid teal" position="sticky">
            <Text>Filter</Text>
          <Checkbox >AMUL</Checkbox>
          <br/>
          <Checkbox >GO</Checkbox>
          <br/>
          <Checkbox >PARLE</Checkbox>
          <br/>
          <Checkbox >PATANJALI</Checkbox>
          </Box>

        <Box >
        <Grid templateColumns='repeat(4, 1fr)' gap={6} >
        {fruits.length > 0 && 
      fruits.map(ele => {
        return (
      
          <GridItem key={ele.id} border="1px solid black" w="270px" padding="30px" borderRadius="10px" textAlign="left">
            <Box h="200px">
          <Box>
          <Image src={ele.img} alt="fruits" m="auto" />
        </Box>
        <Box><Heading fontSize="15px" mb="5px"> {ele.title}</Heading> </Box>
        <Flex flexDirection="row"> <Text>M.R.P:</Text> <Text ml="5px" fontSize="15px" fontWeight="bold" > {ele.price}</Text></Flex>
        </Box>
        <Box mt="50px" mb="30x"><Button colorScheme='blue' w="100%">Add To Cart</Button></Box>
      </GridItem>
        )
      })}
</Grid>
</Box>

</Flex>
</Box>

</Box>
    </Box>
  )
}

export default Product