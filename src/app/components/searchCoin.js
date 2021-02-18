import { Flex, Text } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { useDispatch } from 'react-redux';
import { setCoinID } from 'slices/global';
import { alpha } from 'utils';

const SearchCoin = ({ coin, onClick }) => {
  const { pick, pickAlpha } = useColor();
  const dispath = useDispatch();

  return (
    <Flex
      borderRadius='15px'
      px={['10px', '20px']}
      py={['10px', '15px']}
      color={pickAlpha(0.5, 0.5)}
      bgColor={alpha('white', pick(0.5, 0.05))}
      mb={['10px', '20px']}
      align='center'
      cursor='pointer'
      onClick={() => {
        onClick();
        dispath(setCoinID(coin.id));
      }}
      justify='space-between'
    >
      <Text fontWeight='500'>{coin.name}</Text>
      <Flex justify='center' fontWeight='bold'>
        {coin.symbol}
      </Flex>
    </Flex>
  );
};

export default SearchCoin;
