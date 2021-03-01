import { useDisclosure } from '@chakra-ui/react';
import MostUsedWordsImage from 'assets/graphs/1.png';
import MiniGraph from './miniGraph';
import Graph from './graph';
import ReactWordcloud from 'react-wordcloud';
import { countWords } from 'utils';
import { useInfo } from 'hooks';

const MostUsedWords = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { info } = useInfo();

  return (
    <>
      <MiniGraph
        name={'Most used words'}
        image={MostUsedWordsImage}
        onClick={onOpen}
      />
      <Graph
        isOpen={isOpen}
        onClose={onClose}
        title='Most used words title'
        description='Most used words description'
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
            words={countWords(info.wordcloud)}
          />
        )}
      </Graph>
    </>
  );
};

export default MostUsedWords;
