import { Image, Text, Box, Flex, chakra } from '@chakra-ui/react';
import { useColor, useCoin, useQuote } from 'hooks';
import { formatPrice, formatChange, alpha, formatDate } from 'utils';
import { Modal } from 'features';
import { BiCodeAlt } from 'react-icons/bi';
import { BiLinkAlt } from 'react-icons/bi';
import { AiFillRedditCircle } from 'react-icons/ai';
import { RiExternalLinkLine } from 'react-icons/ri';

// TODO coin rank up down information

const Link = ({ name, link, Icon }) => {
  const { pickAlpha } = useColor();
  return link ? (
    <Flex
      mr='10px'
      bgColor={pickAlpha(0.1, 0.3)}
      color={pickAlpha(0.6, 0.7)}
      px='6px'
      py='4px'
      borderRadius='8px'
      align='center'
    >
      <Icon size='16px' />
      <Text mx='6px' fontSize='12px'>
        {name}
      </Text>
      <Box position='relative' title={link}>
        <RiExternalLinkLine size='16px' />
        <chakra.a
          position='absolute'
          d='block'
          href={link}
          w='100%'
          h='100%'
          top='0'
          left='0'
          target='_blank'
        />
      </Box>
    </Flex>
  ) : null;
};

const CoinInfo = ({ id, isOpen, onClose }) => {
  const { pickAlpha } = useColor();
  const { quote } = useQuote(id);
  const { coin } = useCoin(id);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {coin && quote && (
        <Box>
          <Flex>
            <Flex align='center' pos='relative'>
              <Image w='32px' h='32px' src={coin.logo} />
              <Text
                color={pickAlpha(0.6, 0.8)}
                fontWeight='bold'
                fontSize='32px'
                mx='10px'
              >
                {coin.name}
              </Text>
              <Box
                fontWeight='bold'
                fontSize='12px'
                bgColor={pickAlpha(0.1, 0.3)}
                color={pickAlpha(0.6, 0.6)}
                px='6px'
                py='2px'
                borderRadius='8px'
              >
                {coin.symbol}
              </Box>
              <Flex pos='absolute' top='85%' left='42px' w='100%'>
                <Box
                  fontSize='10px'
                  bgColor={pickAlpha(0.1, 0.3)}
                  color={pickAlpha(0.6, 0.6)}
                  px='6px'
                  py='2px'
                  borderRadius='6px'
                  fontWeight='bold'
                  mr='4px'
                >
                  Rank #{quote.cmc_rank}
                </Box>
                <Box
                  fontSize='10px'
                  bgColor={pickAlpha(0.1, 0.3)}
                  color={pickAlpha(0.6, 0.6)}
                  px='6px'
                  py='2px'
                  borderRadius='6px'
                  fontWeight='bold'
                >
                  {formatDate(coin.date_added)}
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify='flex-end' pos='relative' mt='-20px'>
            <Text
              fontSize='12px'
              fontWeight='bold'
              py='2px'
              color={pickAlpha(0.6, 0.4)}
            >
              {coin.name} Price ({coin.symbol})
            </Text>
            <Flex pos='absolute' top='100%' align='center'>
              <Text
                color={pickAlpha(0.6, 0.8)}
                fontWeight='bold'
                fontSize='24px'
                mr='10px'
              >
                {formatPrice(quote.quote.USD.price)}
              </Text>
              <Box
                fontSize='12px'
                bgColor={`${
                  Math.round(quote.quote.USD.percent_change_24h * 100) < 0
                    ? 'red'
                    : Math.round(quote.quote.USD.percent_change_24h * 100) > 0
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
              </Box>
            </Flex>
          </Flex>
          <Flex fontWeight='bold' fontSize='14px' mt='40px'>
            <Link
              name={coin.urls.website[0] && new URL(coin.urls.website[0]).host}
              link={coin.urls.website[0]}
              Icon={BiLinkAlt}
            />
            <Link
              name='Source code'
              link={coin.urls.source_code[0]}
              Icon={BiCodeAlt}
            />
            <Link
              name='Reddit'
              link={coin.urls.reddit[0]}
              Icon={AiFillRedditCircle}
            />
          </Flex>
          <Box
            mx='auto'
            my='20px'
            h='1px'
            w='80%'
            bgColor={pickAlpha(0.1, 0.1)}
          />
          <Flex fontSize='16px' color={pickAlpha(0.6, 0.8)}>
            {coin.description.slice(
              coin.description.indexOf(`${coin.name} has a current supply of`),
            )}
          </Flex>
          <Box
            mx='auto'
            my='20px'
            h='1px'
            w='80%'
            bgColor={pickAlpha(0.1, 0.1)}
          />
          <Text fontWeight='bold' mb='6px' color={pickAlpha(0.6, 0.8)}>
            Tags:
          </Text>
          <Flex fontWeight='bold' fontSize='10px' flexFlow='wrap'>
            {coin['tag-names'].map((name) => (
              <Box
                key={name}
                mr='10px'
                mb='10px'
                bgColor={pickAlpha(0.1, 0.3)}
                color={pickAlpha(0.6, 0.6)}
                px='6px'
                py='2px'
                borderRadius='6px'
              >
                {name}
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Modal>
  );
};

export default CoinInfo;
