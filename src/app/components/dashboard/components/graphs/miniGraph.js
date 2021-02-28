import { Flex, chakra } from '@chakra-ui/react';
import { darken } from 'utils';

const MiniGraph = ({ name, image, onClick }) => {
  return (
    <>
      <Flex
        w='100%'
        h='100%'
        justify='center'
        align='center'
        fontSize='1.6rem'
        fontWeight='bold'
        position='relative'
        color={darken('white', 0.1)}
        onClick={onClick}
      >
        <Flex
          bg={`url(${image})`}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='cover'
          w='100%'
          h='100%'
          position='absolute'
          top='0'
          left='0'
        />
        <Flex
          bgColor='black'
          w='100%'
          h='100%'
          position='absolute'
          top='0'
          left='0'
          opacity='0.5'
        />
        <chakra.span position='relative' zIndex={1}>
          {name}
        </chakra.span>
      </Flex>
    </>
  );
};

export default MiniGraph;
