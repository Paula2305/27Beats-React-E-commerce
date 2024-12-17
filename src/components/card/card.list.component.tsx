import { Flex } from '@chakra-ui/react';
import CardContainer from './card.component';

const CardList = () => {
  const beats = [
    { author: "Author 1", bpm: 120, genre: "Hip Hop", image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 10, name: "Beat 1" },
    { author: "Author 2", bpm: 140, genre: "Rock", image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 15, name: "Beat 2" },
    // otros beats
  ];

  return (
    <Flex display='flex' flexDirection='row' gap='6' px={{ base: 40 }}>
      {beats.map((beat, index) => (
        <CardContainer key={index} beat={beat} />
      ))}
    </Flex>
  );
};

export default CardList;
