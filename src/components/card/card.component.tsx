// components/card.component.tsx
import { Card, Heading, CardBody, CardFooter, Image, Stack, Text, Divider, Button, Flex } from '@chakra-ui/react';

interface Beat {
  author: string;
  bpm: number;
  genre: string;
  image: string;
  price: number;
  name: string;
}

const CardContainer = ({ beat }: { beat: Beat })  => {
  const { bpm, genre, price, name, image} = beat;
  return (
    <Card w={{ base: "80%", md: "300px" }} h={{ base: "auto", md: "400px" }} boxShadow="none">
      <CardBody>
        
        <Image
          src={image}  // Usamos la imagen que viene de los props
          alt={`${name} cover`}
          borderRadius='lg'
        />
        <Text>{bpm} BPM</Text>
        <Stack mt='3' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>{genre}</Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
        <Divider />
      </CardBody>
      <CardFooter>       
        <Flex w='100%' display='flex' justify='space-between'>
          <Button variant='solid' colorScheme='blue'>
            Comprar ahora
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardContainer;
