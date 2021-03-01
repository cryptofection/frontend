import { useDisclosure } from '@chakra-ui/react';
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
        name='Coin search history'
        image={CoinSearchHistoryImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Historique'
        description='Afficher les 10 des coins les plus recherchées dans notre application et pour visualiser cela on a utilisé un graphe a bar vertical.'
      >
        {info && (
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
        )}
      </Graph>
    </>
  );
};

export default CoinSearchHistory;
