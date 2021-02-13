import { Flex, Text } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { useDispatch } from 'react-redux';
import { setCoinID } from 'slices/global';

const SearchCoin = ({ coin, onClick }) => {
  const { pickAlpha } = useColor();
  const dispath = useDispatch();

  return (
    <Flex
      borderRadius='15px'
      px='20px'
      py='15px'
      bgColor={pickAlpha(0.15, 0.05)}
      mb='20px'
      align='center'
      cursor='pointer'
      onClick={() => {
        onClick();
        dispath(setCoinID(coin.id));
      }}
    >
      <Text w='340px'>{coin.name}</Text>
      <Flex justify='center' fontWeight='bold'>
        {coin.symbol}
      </Flex>
    </Flex>
  );
};

export default SearchCoin;
