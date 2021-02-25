import { Heading, Flex, chakra } from '@chakra-ui/react';
import { useColor } from 'hooks';
import GaugeChart from 'react-gauge-chart';

const GaugeChartChakra = chakra(GaugeChart);

const SentimentAnalysis = () => {
  const { pick, pickAlpha } = useColor();

  return (
    <>
      <Flex
        borderRadius='30px'
        p={['20px', '30px']}
        w='100%'
        h='100%'
        direction='column'
        overflow='auto'
      >
        <Heading
          fontSize={['1.6rem', '1.8rem']}
          mb={['6px', '10px']}
          color={pickAlpha(0.6, 0.8)}
        >
          Sentiment Analysis
        </Heading>
        <Flex
          justify='center'
          align='center'
          flex='1'
          fontWeight='bold'
          borderRadius='30px'
          bgColor={pickAlpha(0.05, 0.05)}
        >
          <GaugeChartChakra
            sx={{
              svg: {
                w: '100%',
                h: '100%',
              },
              text: {
                fill: `${pick('#5b5d61', '#b8b8c4')} !important`,
              },
              '.needle > *': {
                fill: pick('#878a8e', '#a9a8b8'),
              },
            }}
            id='gauge-chart5'
            nrOfLevels={5}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.37}
            arcPadding={0.02}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default SentimentAnalysis;
