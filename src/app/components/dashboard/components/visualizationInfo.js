import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { Modal } from 'features';
import First from 'assets/graphs/1.png';
import Second from 'assets/graphs/2.png';
import Third from 'assets/graphs/3.png';
import Forth from 'assets/graphs/4.png';

const Graph = ({ title, description, src }) => {
  return (
    <Flex direction='column' h='100%'>
      <Heading>{title}</Heading>
      <Text my='10px'>{description}</Text>
      <Flex
        bg={`url(${src})`}
        bgRepeat='no-repeat'
        bgPosition='center center'
        bgSize='cover'
        w={{ base: 'calc(60vw)', md: 'calc(50vw - 45px)' }}
        h={{ base: 'calc(60vw)', md: 'calc(50vw - 45px)' }}
        maxW='400px'
        maxH='400px'
        mx='auto'
        borderRadius='30px'
      />
    </Flex>
  );
};

const VisualizationInfo = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} fullScreen>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap='30px'
        w='100%'
        h='100%'
      >
        <GridItem>
          <Graph
            title='Graph Title #1'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={First}
          />
        </GridItem>
        <GridItem>
          <Graph
            title='Graph Title #2'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Second}
          />
        </GridItem>
        <GridItem>
          <Graph
            title='Graph Title #3'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Third}
          />
        </GridItem>
        <GridItem>
          <Graph
            title='Graph Title #4'
            description='Graph Description #1 Ex aliqua commodo enim cillum magna excepteur
              ullamco nulla magna nostrud nostrud esse aute officia. Consequat'
            src={Forth}
          />
        </GridItem>
      </Grid>
    </Modal>
  );
};

export default VisualizationInfo;
