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
import { ChangeEvent, useState } from "react" //Importamos ChangeEvent desde react
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => { //Tipamos el evento en handleSubmit
        e.preventDefault();
        login(email, password);
    };
    
    return (
        <>
            <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                    <Box textAlign="center">
                        <Heading>Iniciar sesión</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="test@test.com" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="*******" />
                        </FormControl>
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
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