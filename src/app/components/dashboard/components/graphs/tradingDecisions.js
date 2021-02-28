import { useDisclosure } from '@chakra-ui/react';
import TradingDecisionsImage from 'assets/graphs/2.png';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';

const TradingDecisions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        title='Trading decisions title'
        description='Trading decisions description'
      >
        <Chart
          width='100%'
          height={'400px'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Buy', 11],
            ['Hold', 6],
            ['Sell', 3],
          ]}
          options={{
            pieHole: 0.4,
            legend: {
              position: 'bottom',
            },
          }}
        />
      </Graph>
    </>
  );
};

export default TradingDecisions;
