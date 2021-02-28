import {
  Heading,
  Flex,
  Grid,
  Text,
  GridItem,
  useDisclosure,
} from '@chakra-ui/react';
import { useColor } from 'hooks';
import { Modal } from 'features';
import First from 'assets/graphs/1.png';
import Second from 'assets/graphs/2.png';
import Third from 'assets/graphs/3.png';
import Forth from 'assets/graphs/4.png';

const Graph = ({ isOpen, onClose, title, description, src }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxH='auto'>
      <Flex direction='column' h='100%'>
        <Heading>{title}</Heading>
        <Text my='10px'>{description}</Text>
        <Flex
          bg={`url(${src})`}
          bgRepeat='no-repeat'
          bgPosition='center center'
          bgSize='cover'
          w='80vw'
          h='80vw'
          maxW='360px'
          maxH='360px'
          mx='auto'
          borderRadius='30px'
        />
      </Flex>
    </Modal>
  );
};

const MiniGraph = ({ title, description, src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg={`url(${src})`}
        bgRepeat='no-repeat'
        bgPosition='center center'
        bgSize='cover'
        flex='1'
        h='100%'
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        description={description}
        src={src}
      />
    </>
  );
};

const Visualization = () => {
  const { pickAlpha } = useColor();

  return (
    <Flex
      borderRadius='30px'
      p={['20px', '30px']}
      w='100%'
      h='100%'
      direction='column'
      overflow='auto'
    >
      <Heading
        fontSize={['1.6rem', '1.8rem']}
        mb={['6px', '10px']}
        color={pickAlpha(0.6, 0.8)}
      >
        Visualization
      </Heading>
      <Grid
        borderRadius='30px'
        overflow='hidden'
        templateColumns='repeat(4, 1fr)'
        flex='1'
        minH='200px'
        gap='1px'
        cursor='pointer'
      >
        <GridItem>
          <MiniGraph
            title='Graph Title #1'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={First}
          />
        </GridItem>
        <GridItem>
          <MiniGraph
            title='Graph Title #2'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Second}
          />
        </GridItem>
        <GridItem>
          <MiniGraph
            title='Graph Title #3'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Third}
          />
        </GridItem>
        <GridItem>
          <MiniGraph
            title='Graph Title #4'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Forth}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Visualization;
