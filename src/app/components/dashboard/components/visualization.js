import { Heading, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useColor } from 'hooks';
import useDimensions from 'react-use-dimensions';
import {
  CoinSearchHistory,
  MostUsedWords,
  TopHashtags,
  TradingDecisions,
} from './graphs';

const Visualization = () => {
  const { pickAlpha } = useColor();
  const [ref, { width }] = useDimensions();

  return (
    <Flex
      borderRadius='30px'
      p={['20px', '30px']}
      w='100%'
      h='100%'
      direction='column'
      overflow='auto'
      ref={ref}
    >
      <Heading
        fontSize={['1.6rem', '1.8rem']}
        mb={['6px', '10px']}
        color={pickAlpha(0.6, 0.8)}
      >
        Visualization
      </Heading>
      <Grid
        borderRadius='30px'
        overflow='hidden'
        templateColumns={`repeat(${width > 782 ? 4 : 1}, 1fr)`}
        flex='1'
        minH='200px'
        gap='1px'
        cursor='pointer'
      >
        <GridItem>
          <MostUsedWords />
        </GridItem>
        <GridItem>
          <TopHashtags />
        </GridItem>
        <GridItem>
          <TradingDecisions />
        </GridItem>
        <GridItem>
          <CoinSearchHistory />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Visualization;
