import {
  Flex,
  chakra,
  useDisclosure,
  Tr,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useColor, useCoin, useQuote } from 'hooks';
import { formatPrice, formatChange } from 'utils';
import { CoinInfo } from 'features';

const RateRow = ({ id }) => {
  const { pickAlpha } = useColor();
  const { quote } = useQuote(id);
  const { coin } = useCoin(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue([true, false]);

  return coin && quote ? (
    <>
      <Tr
        cursor='pointer'
        _hover={{
          backgroundColor: pickAlpha(0.05, 0.05),
          transition: 'background-color 1s',
        }}
        onClick={() => onOpen()}
        h='50px'
        align='center'
        fontSize={['0.9rem', '1.4rem']}
        fontWeight='bold'
        color={pickAlpha(0.6, 0.8)}
      >
        {!isMobile && (
          <Td>
            <chakra.span color={pickAlpha(0.6, 0.8)} mr='8px'>
              {quote.cmc_rank}
            </chakra.span>
          </Td>
        )}
        <Td>
          <Flex align='center' fontWeight='bold'>
            <chakra.img
              src={coin.logo}
              w='14px'
              h='14px'
              borderRadius='100%'
              mr='10px'
            />
            <chakra.span color={pickAlpha(0.6, 0.8)} mr='8px'>
              {coin.name}
            </chakra.span>
            <chakra.span color={pickAlpha(0.3, 0.4)}>{coin.symbol}</chakra.span>
          </Flex>
        </Td>
        <Td color={pickAlpha(0.6, 0.7)} fontWeight='500'>
          {formatPrice(quote.quote.USD.price)}
        </Td>
        <Td
          fontWeight='bold'
          color={`${
            Math.round(quote.quote.USD.percent_change_24h * 100) < 0
              ? 'red'
              : Math.round(quote.quote.USD.percent_change_24h * 100) > 0
              ? 'green'
              : 'gray'
          }.400`}
        >
          {formatChange(
            Math.round(quote.quote.USD.percent_change_24h * 100) / 100,
          )}
        </Td>
      </Tr>
      <CoinInfo id={id} isOpen={isOpen} onClose={onClose} />
    </>
  ) : null;
};

export default RateRow;
