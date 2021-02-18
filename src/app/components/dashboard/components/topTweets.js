import { Heading, Flex } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { useSelector } from 'react-redux';
import { selectCoinID } from 'slices/global';
const Coin = ({ onOpen }) => {
  const { pickAlpha } = useColor();
  const coinID = useSelector(selectCoinID);

  return (
    <Flex
      borderRadius='30px'
      p={['20px', '30px']}
      w='100%'
      h='100%'
      direction='column'
    >
      <Heading
        fontSize={['1.6rem', '1.8rem']}
        mb={['6px', '10px']}
        color={pickAlpha(0.6, 0.8)}
      >
        Top Tweets
      </Heading>
    </Flex>
  );
};

export default Coin;
