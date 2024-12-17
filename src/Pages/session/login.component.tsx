import { 
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react"
import { useNavigate } from "react-router"

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                    <Box textAlign="center">
                        <Heading>Iniciar sesión</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit"
                            onClick={() => navigate('/singup')}>
                            INICIAR SESIÓN
                        </Button>
                    </form>
                    </Box>
                </Box>
    </Flex>
        </>
    )
}

export default Login