import { Flex, Heading, Text } from '@chakra-ui/react';
import { Modal } from 'features';
import { useColor, useInfo } from 'hooks';
import { Chart } from 'react-google-charts';
import { lighten } from 'utils';

const SentimentAnalysisInfo = ({ isOpen, onClose, description, src }) => {
  const { info } = useInfo();

  const { pick, pickAlpha } = useColor();

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxH='auto'>
      <Flex direction='column' h='100%'>
        <Heading>Sentiment Analysis</Heading>
        <Text my='10px'>
          Visualisation des sentiments en pourcentage « positive, négative &
          neutre » des utilisateurs à partir de leurs tweets et en affichant
          cela dans un graphe circulaire animé.
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
