import { useDisclosure, Text, chakra } from '@chakra-ui/react';
import TradingDecisionsImage from 'assets/graphs/2.png';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';
import { useInfo } from 'hooks';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from 'slices/global';

const roundIt = (x) => Math.round(x * 100) / 100;

let buyPerc = 0;
let holdPerc = 0;
let sellPerc = 0;

const TradingDecisions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();
  const searchQuery = useSelector(selectSearchQuery);

  const total =
    info?.buyDecision.buy + info?.buyDecision.hold + info?.buyDecision.sell;

  if (total) {
    buyPerc = roundIt(info?.buyDecision.buy / total);
    holdPerc = roundIt(info?.buyDecision.hold / total);
    sellPerc = roundIt(info?.buyDecision.sell / total);
  }

  return (
    <>
      <MiniGraph
        name="Décisions d'Achats"
        image={TradingDecisionsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Décisions d’Achats'
        description={
          <Text>
            Visualiser la prédiction des tweets en retournant les différentes
            valeurs{' '}
            <chakra.span fontWeight='500' color='rgb(51, 102, 204)'>
              buy
            </chakra.span>
            ,{' '}
            <chakra.span fontWeight='500' color='rgb(220, 57, 18)'>
              hold
            </chakra.span>{' '}
            et{' '}
            <chakra.span fontWeight='500' color='rgb(255, 153, 0)'>
              sell
            </chakra.span>{' '}
            ainsi que leurs pourcentages en utilisant un graphe donut. <br />
            Dans celle-ci on retrouve que{' '}
            <chakra.span fontWeight='500' color='rgb(51, 102, 204)'>
              {buyPerc}%
            </chakra.span>{' '}
            décide d'acheter le <b>{searchQuery}</b>,{' '}
            <chakra.span fontWeight='500' color='rgb(220, 57, 18)'>
              {holdPerc}%
            </chakra.span>{' '}
            décide de le conserver et{' '}
            <chakra.span fontWeight='500' color='rgb(255, 153, 0)'>
              {sellPerc}%
            </chakra.span>{' '}
            décide de vendre.
          </Text>
        }
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
