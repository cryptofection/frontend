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
        name='Historique'
        image={CoinSearchHistoryImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Historique'
        description={
          <Text>
            Afficher les 10 coins les plus recherchées dans notre application et
            pour visualiser cela on a utilisé un graphe a bar vertical. <br />
            Parmi les 10 coins on retrouve les 3 coin avec le plus grand nombre
            de recherche sont: <b>{info?.search_history[0][0]}</b>,{' '}
            <b>{info?.search_history[1][0]}</b> et{' '}
            <b>{info?.search_history[2][0]}</b>.
          </Text>
        }
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
