import { useDisclosure } from '@chakra-ui/react';
import CoinSearchHistoryImage from 'assets/graphs/3.jpg';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';

const CoinSearchHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MiniGraph
        name='Coin search history'
        image={CoinSearchHistoryImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Coin search history title'
        description='Coin search history description'
      >
        <Chart
          width='100%'
          height={'400px'}
          chartType='Bar'
          loader={<div>Loading Chart</div>}
          data={[
            ['Coins', 'Frequency'],
            ['BTC', 10],
            ['MFT', 20],
            ['DOGE', 13],
            ['USDT', 60],
            ['ADA', 180],
          ]}
          options={{
            legend: 'none',
          }}
        />
      </Graph>
    </>
  );
};

export default CoinSearchHistory;
