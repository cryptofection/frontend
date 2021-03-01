import { useDisclosure } from '@chakra-ui/react';
import TradingDecisionsImage from 'assets/graphs/2.png';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';
import { useInfo } from 'hooks';

const TradingDecisions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();

  return (
    <>
      <MiniGraph
        name='Trading decisions'
        image={TradingDecisionsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Décisions d’Achats'
        description='Visualiser la prédiction des tweets en retournant les différentes valeurs « buy, hold & sell » ainsi que leurs pourcentages en utilisant un graphe donut.'
      >
        {info && (
          <Chart
            width='100%'
            height={'400px'}
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['Trade Type', 'Count'],
              ['Buy', info.buyDecision.buy],
              ['Hold', info.buyDecision.hold],
              ['Sell', info.buyDecision.sell],
            ]}
            options={{
              pieHole: 0.4,
              legend: {
                position: 'bottom',
              },
            }}
          />
        )}
      </Graph>
    </>
  );
};

export default TradingDecisions;
