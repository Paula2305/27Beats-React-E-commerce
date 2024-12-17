
import CardList from "../../components/card/card.list.component"
import {Stack, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
    <Flex w="100%" h={{ base: "300px", md: "600px" }}backgroundImage={'/hero-editadp.jpg'} backgroundSize={'cover'} backgroundPosition={"center"} >
      <Stack px={{ base: 40 }} >
        <Text fontSize="3xl" color="white"> Descubre y crea música con los mejores BEATS </Text>
      </Stack>
      
    </Flex>
    <CardList/>
    </>
  );
};

export default Home;
