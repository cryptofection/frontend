import { Box, Flex, chakra, useDisclosure } from '@chakra-ui/react';
import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');
import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';
import { useCoins, useColor } from 'hooks';
import { alpha, lighten } from 'utils';
import { AnimatePresence, motion } from 'framer-motion';
import SearchCoin from './searchCoin';

const SearchIconChakra = chakra(SearchIcon);
const MotionBox = motion.custom(Box);

const Search = () => {
  const { color, pick, pickAlpha } = useColor();
  const [searcher, setSearcher] = useState(null);
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { coins } = useCoins();

  useEffect(() => {
    if (coins) {
      setSearcher(
        new FuzzySearch(
          coins.sort((a, b) => a.rank - b.rank),
          ['name', 'symbol'],
          {
            caseSensitive: false,
          },
        ),
      );
    }
  }, [coins]);

  useEffect(() => {
    if (searcher) {
      // setResult(searcher.search(search));
      onOpen();
      setResult(search ? searcher.search(search) : []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Flex
      align='center'
      position='relative'
      top={['100px', '140px']}
      px={['20px', '40px']}
      direction='column'
    >
      <Box position='relative' h={['60px', '80px']} w='100%' maxW='700px'>
        <chakra.input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          h='100%'
          w='100%'
          borderRadius='100px'
          fontSize={['24px', '30px']}
          placeholder='Search Coin...'
          color={pickAlpha(0.5, 0.8)}
          bgColor={color('secondary')}
          _placeholder={{
            color: pickAlpha(0.5, 0.5),
          }}
          _focus={{ outline: 0 }}
          px={['20px', '40px']}
        />
        <SearchIconChakra
          position='absolute'
          top='50%'
          right={['20px', '40px']}
          h={['24px', '34px']}
          w={['24px', '34px']}
          transform='translateY(-50%)'
          fill={pickAlpha(0.5, 0.5)}
        />
      </Box>
      <AnimatePresence>
        {result.length !== 0 && isOpen && (
          <MotionBox
            boxShadow={`0 0 30px ${alpha('black', 0.1)}`}
            bgColor={pick(color('secondary'), lighten(color('secondary'), 0.2))}
            p={['10px', '20px']}
            pb='0px !important'
            position='absolute'
            top={['70px', '80px']}
            borderRadius='30px'
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
            }}
            w={['60%']}
            maxW='520px'
            zIndex={6}
          >
            {result.slice(0, 4).map((coin) => (
              <SearchCoin
                key={coin.id}
                coin={coin}
                onClick={() => {
                  setSearch('');
                  onClose();
                }}
              />
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Search;
