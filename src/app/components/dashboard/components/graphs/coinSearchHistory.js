import { useDisclosure, Text } from '@chakra-ui/react';
import CoinSearchHistoryImage from 'assets/graphs/3.jpg';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';
import { useInfo } from 'hooks';

const CoinSearchHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();

  return (
    <>
      <MiniGraph
        name='Top 10'
        image={CoinSearchHistoryImage}
        onClick={onOpen}
      />

      {info && (
        <Graph
          isOpen={isOpen}
          onClose={onClose}
          title='Historique Top 10'
          description={
            <Text>
              Parmi les 10 coins on retrouve les 3 coins avec le plus grand
              nombre de recherche sont:{' '}
              <b>{info.search_history[0] && info.search_history[0][0]}</b>,{' '}
              <b>{info.search_history[1] && info.search_history[1][0]}</b> et{' '}
              <b>{info.search_history[2] && info.search_history[2][0]}</b>.
            </Text>
          }
        >
          <Chart
            width='100%'
            height={'400px'}
            chartType='Bar'
            loader={<div>Loading Chart</div>}
            data={[['Coins', 'Frequency'], ...info.search_history]}
            options={{
              legend: 'none',
            }}
          />
        </Graph>
      )}
    </>
  );
};

export default CoinSearchHistory;
