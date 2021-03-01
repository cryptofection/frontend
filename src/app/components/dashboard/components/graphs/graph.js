import { Heading, Flex, Text } from '@chakra-ui/react';
import { Modal } from 'features';
import { useColor } from 'hooks';

const Graph = ({ isOpen, onClose, title, description, children }) => {
  const { pickAlpha } = useColor();

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxH='auto'>
      <Flex direction='column' h='100%'>
        <Heading color={pickAlpha(0.8, 0.8)}>{title}</Heading>
        <Text my='10px' color={pickAlpha(0.7, 0.7)}>
          {description}
        </Text>
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
