import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { Chart } from 'react-google-charts';
import { lighten } from 'utils';
import { AiOutlineFullscreen } from 'react-icons/ai';
import SentimentAnalysisInfo from './sentimentAnalysisInfo';

const SentimentAnalysis = () => {
  const { pick, pickAlpha } = useColor();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        borderRadius='30px'
        w='100%'
        h='100%'
        justify='center'
        align='center'
        position='relative'
      >
        <Heading
          fontSize={['1.6rem', '1.8rem']}
          color={pickAlpha(0.6, 0.8)}
          position='absolute'
          top={['20px', '30px']}
          left={['20px', '30px']}
        >
          Sentiment Analysis
        </Heading>
        <Flex
          position='absolute'
          bottom={['10px', '15px']}
          right={['10px', '15px']}
          onClick={() => onOpen()}
          cursor='pointer'
          zIndex={5}
        >
          <AiOutlineFullscreen size='24px' color={pickAlpha(0.5, 0.6)} />
        </Flex>
        <Chart
          width='280px'
          height='290px'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Positive', 11],
            ['Negative', 4],
            ['Neutral', 4],
          ]}
          options={{
            is3D: true,
            legend: 'none',
            pieSliceText: 'label',
            backgroundColor: 'transparent',
            colors: [
              pick('#4caf50', lighten('#4caf50', 0.15)),
              pick('#f44336', lighten('#f44336', 0.15)),
              pick('#9e9e9e', lighten('#9e9e9e', 0.15)),
            ],
          }}
        />
      </Flex>
      <SentimentAnalysisInfo isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SentimentAnalysis;
