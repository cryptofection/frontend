import { useDisclosure, Text } from '@chakra-ui/react';
import TopHashtagsImage from 'assets/graphs/0.png';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';
import { useInfo } from 'hooks';

const TopHashtags = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();

  return (
    <>
      <MiniGraph
        name='Top Hashtags'
        image={TopHashtagsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Top Hashtags'
        description={
          <Text>
            Afficher les hashtags les plus utilisés dans le monde du crypto
            Currency dans un graphe a bar horizontal et en spécifiant pour
            chaque hashtag sa fréquence. <br />
            Le hashtag le plus utilisé est <b>{info?.hashtags[0][0]}</b>.
          </Text>
        }
      >
        {info && (
          <Chart
            width='100%'
            height={'400px'}
            chartType='BarChart'
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Element',
                'Frequency',
                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify',
                },
              ],
              ...info.hashtags.map(([hashtag, count], index) => {
                const colors = [
                  '#00bcd4',
                  '#ff9800',
                  '#8bc34a',
                  '#9e9e9e',
                  '#f44336',
                ];
                return [hashtag, count, colors[index], null];
              }),
            ]}
            options={{
              bar: { groupWidth: '75%' },
              legend: { position: 'none' },
            }}
          />
        )}
      </Graph>
    </>
  );
};

export default TopHashtags;
