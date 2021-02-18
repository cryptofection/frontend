import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useCoins } from 'hooks';
import RateRow from './rateRow';
import { useColor } from 'hooks';

const Rate = () => {
  const { coins } = useCoins();
  const { pickAlpha } = useColor();
  const isMobile = useBreakpointValue([true, false]);

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
        Top Coins
      </Heading>
      <Flex flex='1' mb='-17px'>
        {coins && (
          <Table
            height='100%'
            sx={{
              'td, th': {
                borderColor: pickAlpha(0.1, 0.1),
              },
              'tr:last-of-type td': {
                borderColor: 'transparent',
              },
            }}
          >
            <Thead>
              <Tr>
                {!isMobile && <Th>Rank</Th>}
                <Th>Currency</Th>
                <Th>Price</Th>
                <Th>24h +/-</Th>
              </Tr>
            </Thead>
            <Tbody>
              {coins.slice(0, 3).map((coin) => (
                <RateRow id={coin.id} />
              ))}
            </Tbody>
          </Table>
        )}
      </Flex>
    </Flex>
  );
};

export default Rate;
