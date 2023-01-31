import { Box, Flex } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import SearchVishnu from "./SearchVishnu"
import { BsCart2 } from "react-icons/bs";
import MenuVishnu from "./MenuVishnu";
import { Link } from "react-router-dom";
import {FaUserAlt} from  "react-icons/fa";
import { useSelector } from "react-redux";
const NavbarVishnu=()=>{
    // const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
    // const token = useSelector((store)=>store.AuthReducer.token)

    return (<div style={{overflow: "visible"}}>
<Flex  color="white" fontWeight={"bold"} border={"2px solid #5ce1e6"} padding="5px" backgroundColor={"#5ce1e6"} justifyContent="space-between">
    <Box  ><Link to="/"><img width="160" height="120" src="PrimeMart.png"/></Link></Box>
    <Box marginTop={"15px"}  borderRadius={"7px"} paddingBottom="-5px"><SearchVishnu  /></Box>
    <Box marginTop={"15px"}>
        <Flex   gap={"2rem"}>
            <Box>
               
                <Link to="/signup"> <Flex  padding={"12px"} > <Box><FaUserAlt size={"25"} color="white" /></Box> <Box marginLeft={"5px"}>Sign in</Box></Flex></Link>
                </Box>
                <Link to="/cart"><Box marginTop="8px" marginLeft={"5px"}><BsCart2 size={30}  /> </Box></Link>
                <Box marginTop="8px" ><MenuVishnu  /></Box>
                </Flex></Box>
   
    
</Flex>
    </div>)
}

export default NavbarVishnu
// isAuth ?<Link> <Flex  padding={"12px"} > <Box><FaUserAlt size={"25"} color="white" /></Box><Box marginLeft={"5px"}>{token.name}</Box> </Flex></Link>:
//                 <Link to="/signup"> <Flex  padding={"12px"} > <Box><FaUserAlt size={"25"} color="white" /></Box> <Box marginLeft={"5px"}>Sign in</Box></Flex></Link>