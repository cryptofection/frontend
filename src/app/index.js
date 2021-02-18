import { Flex, Text } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { ColorMode, Dashboard, Search } from './components';
import { ReactComponent as BrandIcon } from 'assets/brand-icon.svg';

const App = () => {
  const { color, pickAlpha } = useColor();

  return (
    <Flex
      pos='relative'
      bgColor={color('primary')}
      w='100%'
      h='100%'
      borderRadius='30px'
      overflow='hidden'
      direction='column'
    >
      <ColorMode />
      <Flex
        position='absolute'
        top={['20px', '40px']}
        left={['20px', '40px']}
        color={pickAlpha(0.5, 0.7)}
        userSelect='none'
        cursor='pointer'
        sx={{
          svg: {
            w: ['30px', '60px'],
            h: ['21px', '42px'],
          },
        }}
      >
        <BrandIcon fill={pickAlpha(0.5, 0.7)} />
        <Text
          fontWeight='bold'
          fontSize={['18px', '36px']}
          ml={['6px', '10px']}
        >
          Cryptofection
        </Text>
      </Flex>
      <Search />
      <Dashboard />
    </Flex>
  );
};

export default App;
