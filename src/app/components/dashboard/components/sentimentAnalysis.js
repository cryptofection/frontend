import { Heading, Flex } from '@chakra-ui/react';
import { useColor } from 'hooks';

const SentimentAnalysis = () => {
  const { pickAlpha } = useColor();

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
          bgColor='red.300'
          flex='1'
          fontWeight='bold'
          borderRadius='30px' 
        >
          llah yjib lidiro
        </Flex>
      </Flex>
    </>
  );
};

export default SentimentAnalysis;
