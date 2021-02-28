import { Flex, Heading, useDisclosure, Skeleton } from '@chakra-ui/react';
import { useColor, useInfo } from 'hooks';
import { Chart } from 'react-google-charts';
import { lighten } from 'utils';
import { AiOutlineFullscreen } from 'react-icons/ai';
import SentimentAnalysisInfo from './sentimentAnalysisInfo';
import { motion } from 'framer-motion';

const FlexMotion = motion.custom(Flex);

const SentimentAnalysis = () => {
  const { info } = useInfo();
  const { color, pick, pickAlpha } = useColor();
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

        {info ? (
          <>
            <FlexMotion
              position='absolute'
              bottom={['10px', '15px']}
              right={['10px', '15px']}
              onClick={() => onOpen()}
              cursor='pointer'
              zIndex={5}
              whileHover={{ opacity: 0.6 }}
              whileTap={{ scale: 0.8 }}
            >
              <AiOutlineFullscreen size='24px' color={pickAlpha(0.5, 0.6)} />
            </FlexMotion>
            <Chart
              width='280px'
              height='290px'
              chartType='PieChart'
              loader={<div>Loading Chart</div>}
              data={[
                ['Sentiment', 'Count'],
                ['Positive', info.score.positive],
                ['Negative', info.score.negative],
                ['Neutral', info.score.neutral],
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
          </>
        ) : (
          <Flex
            w='100%'
            h='100%'
            p={['20px', '30px']}
            pt={['60px', '70px']}
            minH='250px'
          >
            <Skeleton
              pos='relative'
              borderRadius='30px'
              mx='auto'
              userSelect='none'
              startColor={color('skeletonStart')}
              endColor={color('skeletonEnd')}
              isLoaded={info}
              fadeDuration={0}
              w='100%'
              h='100%'
            />
          </Flex>
        )}
      </Flex>
      <SentimentAnalysisInfo isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SentimentAnalysis;
