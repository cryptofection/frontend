import { Flex, Heading, Text, chakra } from '@chakra-ui/react';
import { Modal } from 'features';
import { useColor, useInfo } from 'hooks';
import { Chart } from 'react-google-charts';
import { lighten } from 'utils';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from 'slices/global';

const roundIt = (x) => Math.round(x * 100 * 100) / 100;

let positivePerc = 0;
let negativePerc = 0;
let neutralPerc = 0;

const SentimentAnalysisInfo = ({ isOpen, onClose }) => {
  const { info } = useInfo();
  const searchQuery = useSelector(selectSearchQuery);
  const { pick, pickAlpha } = useColor();
  const total = info
    ? info.score.positive + info.score.negative + info.score.neutral
    : 0;

  if (total && info) {
    positivePerc = roundIt(info.score.positive / total);
    negativePerc = roundIt(info.score.negative / total);
    neutralPerc = roundIt(info.score.neutral / total);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxH='auto'>
      <Flex direction='column' h='100%'>
        <Heading color={pickAlpha(0.8, 0.8)}>Sentiment Analysis</Heading>
        <Text my='10px' color={pickAlpha(0.7, 0.7)}>
          Pour le <b>{searchQuery}</b> on a{' '}
          <chakra.b color='#4caf50'>{positivePerc}%</chakra.b> de sentiments positifs,{' '}
          <chakra.b color='#f44336'>{negativePerc}%</chakra.b> négatifs et{' '}
          <chakra.b color='#9e9e9e'>{neutralPerc}%</chakra.b> sont neutres.
        </Text>
        <Flex
          justify='center'
          align='center'
          sx={{
            'g[column-id] text': {
              fill: pickAlpha(0.6, 0.8),
            },
          }}
        >
          {info && (
            <Chart
              chartType='PieChart'
              loader={<div>Loading Chart</div>}
              data={[
                ['Sentiment', 'Count'],
                ['Positive', info.score.positive],
                ['Negative', info.score.negative],
                ['Neutral', info.score.neutral],
              ]}
              options={{
                height: '300px',
                is3D: true,
                legend: { position: 'bottom' },
                pieSliceText: 'label',
                backgroundColor: 'transparent',
                colors: [
                  pick('#4caf50', lighten('#4caf50', 0.15)),
                  pick('#f44336', lighten('#f44336', 0.15)),
                  pick('#9e9e9e', lighten('#9e9e9e', 0.15)),
                ],
              }}
            />
          )}
        </Flex>
      </Flex>
    </Modal>
  );
};

export default SentimentAnalysisInfo;
