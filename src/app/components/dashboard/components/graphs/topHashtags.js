import { useDisclosure } from '@chakra-ui/react';
import TopHashtagsImage from 'assets/graphs/0.png';
import { Chart } from 'react-google-charts';
import MiniGraph from './miniGraph';
import Graph from './graph';

const TopHashtags = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MiniGraph
        name='Top hashtags'
        image={TopHashtagsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Top hashtags title'
        description='Top hashtags description'
      >
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
            ['#Defi', 10, '#f00', null],
            ['#MFT', 15, '#0f0', null],
            ['#mainframe', 40, '#00f', null],
          ]}
          options={{
            bar: { groupWidth: '75%' },
            legend: { position: 'none' },
          }}
        />
      </Graph>
    </>
  );
};

export default TopHashtags;
