import "./App.css";
import CartL from "./Cartpage/CartL";
import Navbar from "./Components/Navbar";
import Footer from "./HomePageVishnu/FooterVishnu/FooterVishnu";
import MainRoutes from "./Pages/MainRoutes";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />

      {/* <Product/> */}
    </div>
  );
}

export default App;
/*const navigate = useNavigate('')
  const [number,setNumber] = useState(false)
  const [text,setText] = useState('')
  const [otp,setOtp] = useState('')
  const [otpalert,setAlert] = useState('')
  const [errorv,setErrorv]=useState(false)
  const isError = text.length<9 || text.length==0
  const fruitss = useSelector(store => store.AppReducer.fruitsveg)
  console.log("dadad",fruitss)
  var random
  const change=()=>{
    random = 9999-Math.ceil(Math.random()*1000)
    random=String(random)
    setAlert(random)
    console.log('ins',random)
    alert(`Your OTP is'${random}`)
    !isError&&setNumber(!number)
  }
  console.log('state',otpalert)
  const check=()=>{
   console.log(typeof(otpalert))
    if(otp!==otpalert){
      setErrorv(true)

     console.log("hello")
    }
    else{
      navigate('/login')
    }
  }
  return (
    <div>
      <SimpleGrid w={['90%','90%','95%','80%']} h='auto' columns={[1,1,2,2]}    margin='auto' mt='2cm'  >
        <Box>
        <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' borderRadius='10px' alt='jio'></Image>
        </Box>
        <Box>
          <Box ml={['none','none','2cm','5cm']}  w={['10cm','10cm','8cm','auto']} mt={['1cm','1cm','2cm','2cm']} mr={['2cm','2cm','1cm','1cm']}>
          <FormControl>
            <FormLabel>
            <Text fontWeight='medium' fontSize='2xl'>Sign In </Text>
              <Text>Sign In, to access to your Orders,Offers and Wishlist</Text>
            </FormLabel>
            <InputGroup>
            <InputLeftAddon children='+91' mt='1cm'/>
            <Input mt='1cm' type='tel' borderColor='gray' maxLength={10} value={text} onChange={(e)=>setText(e.target.value)} placeholder='Mobile Number'/>
            </InputGroup>
           {!number &&<Circle mt={4} bg='#008ECC' ml='4cm' size='50px' as='button' onClick={change}>
              <ChevronRightIcon size='20px'/>
            </Circle>
          }
            {number &&<Box>
            <Input mt={5} placeholder='Enter Your OTP' type="number" onChange={(e)=>setOtp(e.target.value)} maxLength={4}/>
            <Button mt={4} w='full' color='white' _hover={"green"} bg='#008ECC' onClick={check} >Verify</Button>
            {errorv? <Text color="red"> Enter correct otp !</Text>:<h1></h1>}
            </Box>
            }
          </FormControl>
          </Box>
          
        </Box>
      </SimpleGrid>
    </div>
  )*/