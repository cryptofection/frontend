import { chakra, Heading, Flex, Image, Text } from '@chakra-ui/react';
import { useColor, useCoin, useQuote } from 'hooks';
import { useSelector } from 'react-redux';
import { selectCoinID } from 'slices/global';
import { formatPrice, formatChange, alpha } from 'utils';
import { BiDetail } from 'react-icons/bi';

const BiDetailChakra = chakra(BiDetail);

const Coin = ({ onOpen }) => {
  const { pickAlpha } = useColor();
  const coinID = useSelector(selectCoinID);
  const { coin } = useCoin(coinID);
  const { quote } = useQuote(coinID);

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
        Coin Info
      </Heading>
      {coin && quote && (
        <>
          <Flex
            direction={{ base: 'row', lg: 'column' }}
            justify='space-between'
          >
            <Flex fontWeight='bold'>
              <Image src={coin.logo} w='16px' h='16px' mt='7px' mr='8px' />
              <Flex direction='column'>
                <Text
                  fontSize={['1.6rem', '2.4rem']}
                  color={pickAlpha(0.6, 0.8)}
                >
                  {coin.name.split(' ')[0]}
                </Text>
                <Flex mt='2px'>
                  <Text
                    fontWeight='bold'
                    fontSize={['0.8rem', '1rem']}
                    bgColor={pickAlpha(0.1, 0.3)}
                    color={pickAlpha(0.6, 0.6)}
                    px={['4px', '6px']}
                    py={['1px', '2px']}
                    mr={['6px', '8px']}
                    borderRadius='8px'
                  >
                    Rank #{quote.cmc_rank}
                  </Text>
                  <Text
                    fontWeight='bold'
                    fontSize={['0.8rem', '1rem']}
                    bgColor={pickAlpha(0.1, 0.3)}
                    color={pickAlpha(0.6, 0.6)}
                    px={['4px', '6px']}
                    py={['1px', '2px']}
                    mr={['6px', '8px']}
                    borderRadius='8px'
                  >
                    {coin.symbol}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction={{ base: 'row', lg: 'column' }}>
              <Flex direction='column'>
                <Flex
                  fontWeight='bold'
                  justify='center'
                  fontSize={['0.8rem', '1.4rem']}
                  mb={{ base: '0px', lg: '14px' }}
                  color={pickAlpha(0.6, 0.4)}
                >
                  {coin.name.split(' ')[0]} Price ({coin.symbol})
                </Flex>
                <Flex
                  fontWeight='bold'
                  justify='center'
                  fontSize={['1.6rem', '2.4rem']}
                  color={pickAlpha(0.6, 0.8)}
                >
                  {formatPrice(quote.quote.USD.price)}
                </Flex>
                <Flex
                  fontWeight='bold'
                  justify='center'
                  fontSize={['0.8rem', '1.4rem']}
                  mt='3px'
                  mb={{ base: '0px', lg: '10px' }}
                >
                  <Flex
                    fontSize={['0.8rem', '1.2rem']}
                    bgColor={`${
                      Math.round(quote.quote.USD.percent_change_24h * 100) < 0
                        ? 'red'
                        : Math.round(quote.quote.USD.percent_change_24h * 100) >
                          0
                        ? 'green'
                        : 'gray'
                    }.400`}
                    color={alpha('white', 0.9)}
                    px='6px'
                    py='2px'
                    borderRadius='6px'
                    fontWeight='bold'
                  >
                    {formatChange(quote.quote.USD.percent_change_24h)}
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                fontWeight='bold'
                justify='center'
                align={{ base: 'center', lg: 'flex-end' }}
                fontSize={['0.8rem', '1.4rem']}
                flex={{ base: 'none', lg: '1' }}
                ml={{ base: '10px', sm: '20px', lg: '0px' }}
              >
                <Flex
                  cursor='pointer'
                  onClick={onOpen}
                  title='Coin Info'
                  fontWeight='bold'
                  fontSize={['0.8rem', '1.4rem']}
                  bgColor={pickAlpha(0.1, 0.3)}
                  color={pickAlpha(0.6, 0.6)}
                  w={['20px', '36px']}
                  h={['20px', '36px']}
                  justify='center'
                  align='center'
                  borderRadius='100%'
                >
                  <BiDetailChakra
                    title='Coin Info'
                    w={['14px', '20px']}
                    h={['14px', '20px']}
                    color={pickAlpha(0.5, 0.6)}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Coin;
