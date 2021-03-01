import { useDisclosure, Text } from '@chakra-ui/react';
import MostUsedWordsImage from 'assets/graphs/1.png';
import MiniGraph from './miniGraph';
import Graph from './graph';
import ReactWordcloud from 'react-wordcloud';
import { countWords } from 'utils';
import { useInfo } from 'hooks';

const MostUsedWords = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();

  const words = countWords(info?.wordcloud || '');

  return (
    <>
      <MiniGraph
        name='Word Cloud'
        image={MostUsedWordsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Word Cloud'
        description={
          <Text>
            Le terme le plus répété est{' '}
            <b>{words[0].text}</b> et le moins répété est{' '}
            <b>{words[words.length - 1].text}</b>.
          </Text>
        }
      >
        {info && (
          <ReactWordcloud
            options={{
              enableTooltip: true,
              deterministic: false,
              fontFamily: 'Montserrat',
              fontSizes: [14, 60],
              fontWeight: '500',
              padding: 1,
              rotations: 3,
              rotationAngles: [0, 90],
              scale: 'sqrt',
              spiral: 'archimedean',
              transitionDuration: 1000,
            }}
            words={words}
          />
        )}
      </Graph>
    </>
  );
};

export default MostUsedWords;
