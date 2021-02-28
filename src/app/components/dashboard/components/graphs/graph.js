import { Heading, Flex, Text } from '@chakra-ui/react';
import { Modal } from 'features';

const Graph = ({ isOpen, onClose, title, description, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxH='auto'>
      <Flex direction='column' h='100%'>
        <Heading>{title}</Heading>
        <Text my='10px'>{description}</Text>
        <Flex borderRadius='30px' bgColor='white' flex='1' p='30px'>
          <Flex
            w='100%'
            h='100%'
            overflow='hidden'
            justify='center'
            align='center'
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default Graph;
