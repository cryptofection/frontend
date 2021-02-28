import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { Rate, Coin } from './components';
import { useSelector } from 'react-redux';
import { selectCoinID } from 'slices/global';
import { CoinInfo } from 'features';
import { TopTweets, Visualization, SentimentAnalysis } from './components';

const Dashboard = () => {
  const { color } = useColor();
  const coinID = useSelector(selectCoinID);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt={['120px', '180px']} mb={['20px', '40px']} flex='1' overflow='auto'>
      <Grid
        w='100%'
        h='100%'
        templateColumns={{
          base: '1fr',
          lg: 'repeat(7, 1fr) 280px',
          xl: 'repeat(4, 1fr) 280px repeat(3, 1fr)',
        }}
        templateRows={['230px', '280px']}
        gap={['20px', '40px']}
        overflow='auto'
        px={['20px', '40px']}
        minH='0'
      >
        <GridItem
          borderRadius='30px'
          bgColor={color('secondary')}
          colSpan={{ base: 1, lg: 7, xl: 4 }}
        >
          <Rate />
        </GridItem>
        <GridItem
          fontSize={['20px', '40px']}
          borderRadius='30px'
          bgColor={color('secondary')}
          colSpan={{ base: 1 }}
        >
          <Coin onOpen={onOpen} />
        </GridItem>
        <GridItem
          borderRadius='30px'
          bgColor={color('secondary')}
          colSpan={{ base: 1, lg: 3, xl: 3 }}
          overflow='auto'
          minH='280px'
        >
          <TopTweets />
        </GridItem>
        <GridItem
          borderRadius='30px'
          bgColor={color('secondary')}
          colSpan={{ base: 1, lg: 4, xl: 5 }}
        >
          <Visualization />
        </GridItem>
        <GridItem
          borderRadius='30px'
          bgColor={color('secondary')}
          colSpan={{ base: 1, lg: 1, xl: 3 }}
        >
          <SentimentAnalysis />
        </GridItem>
      </Grid>
      <CoinInfo id={coinID} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Dashboard;
