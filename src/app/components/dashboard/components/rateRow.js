import {
  Flex,
  chakra,
  useDisclosure,
  Tr,
  Td,
  useBreakpointValue,
  Skeleton,
} from '@chakra-ui/react';
import { useColor, useCoin, useQuote, useCoins } from 'hooks';
import { formatPrice, formatChange } from 'utils';
import { CoinInfo } from 'features';

const RateRow = ({ index }) => {
  const { color, pickAlpha } = useColor();

  const { coins } = useCoins();
  const id = coins && coins[index].id;
  const { quote } = useQuote(id);
  const { coin } = useCoin(id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue([true, false]);

  const isLoaded = coins && quote && coin;

  return isLoaded ? (
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
  ) : (
    <Tr
      cursor='pointer'
      h='50px'
      align='center'
      fontSize={['0.9rem', '1.4rem']}
      fontWeight='bold'
      color={pickAlpha(0.6, 0.8)}
    >
      {!isMobile && (
        <Td>
          <Skeleton
            pos='relative'
            borderRadius={8}
            mx='auto'
            userSelect='none'
            startColor={color('skeletonStart')}
            endColor={color('skeletonEnd')}
            isLoaded={isLoaded}
            fadeDuration={0}
          >
            <chakra.span color={pickAlpha(0.6, 0.8)} mr='8px'>
              0
            </chakra.span>
          </Skeleton>
        </Td>
      )}
      <Td>
        <Skeleton
          pos='relative'
          borderRadius={8}
          mx='auto'
          userSelect='none'
          startColor={color('skeletonStart')}
          endColor={color('skeletonEnd')}
          isLoaded={isLoaded}
          fadeDuration={0}
        >
          <Flex align='center' fontWeight='bold'>
            <chakra.img
              src=''
              w='14px'
              h='14px'
              borderRadius='100%'
              mr='10px'
            />
            <chakra.span color={pickAlpha(0.6, 0.8)} mr='8px'>
              loading
            </chakra.span>
            <chakra.span color={pickAlpha(0.3, 0.4)}>XXX</chakra.span>
          </Flex>
        </Skeleton>
      </Td>
      <Td color={pickAlpha(0.6, 0.7)} fontWeight='500'>
        <Skeleton
          pos='relative'
          borderRadius={8}
          mx='auto'
          userSelect='none'
          startColor={color('skeletonStart')}
          endColor={color('skeletonEnd')}
          isLoaded={isLoaded}
          fadeDuration={0}
        >
          loading
        </Skeleton>
      </Td>
      <Td fontWeight='bold'>
        <Skeleton
          pos='relative'
          borderRadius={8}
          mx='auto'
          userSelect='none'
          startColor={color('skeletonStart')}
          endColor={color('skeletonEnd')}
          isLoaded={isLoaded}
          fadeDuration={0}
        >
          0.00
        </Skeleton>
      </Td>
    </Tr>
  );
};

export default RateRow;
