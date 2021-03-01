import { Flex, chakra } from '@chakra-ui/react';
import { darken } from 'utils';
import { useInfo } from 'hooks';
import { HashLoader } from 'react-spinners';

const MiniGraph = ({ name, image, onClick }) => {
  const { info } = useInfo();

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
          {info ? name : <HashLoader size='30px' color='#F5B250' />}
        </chakra.span>
      </Flex>
    </>
  );
};

export default MiniGraph;
