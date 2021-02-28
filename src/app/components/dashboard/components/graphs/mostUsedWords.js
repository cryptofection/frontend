import { useDisclosure } from '@chakra-ui/react';
import MostUsedWordsImage from 'assets/graphs/1.png';
import MiniGraph from './miniGraph';
import Graph from './graph';
import ReactWordcloud from 'react-wordcloud';
import { countWords } from 'utils';

const wordcloud = `jbthecryptoking mft fix rate lending defi space rt mcuban mention holding mft gt hififinance future finance ceo already rt taekwonkrypto for think slow deliver remember beta live today build rt taekwonkrypto for think slow deliver remember beta live today build bradlaurie hififinance mainframehq hifi finance moon fill bag mft rt mainframe mft hifi finance go fly jump board rt taekwonkrypto for think slow deliver remember beta live today build for think slow deliver remember beta live today chocolatemastr mft hifi rt kriptogeneral binanceturkish rsk infrastructure framework aragon polymath orchid numeraire dent tomochain st binanceturkish rsk infrastructure framework aragon polymath orchid numeraire dent tomocha potential wave mainframe hififinance retrace bullish divergence cha coinspotau i hope merch pack include mft fix rate lending protocol and taxation theft rt mft hifi mft hifi finance officially staed rt smoperson i think mft hifi finance previously mainframe token gon na go big cup handle pattern ive ever see rt smoperson i think mft hifi finance previously mainframe token gon na go big cup handle pattern ive ever see i think mft hifi finance previously mainframe token gon na go big cup handle pattern ive eve rt mft hifi mft hifi finance officially staed hifi finance mft token great one long term benefit just suffer panic sell r rt mft hifi mft hifi finance officially staed mft hifi finance officially staed mft hifi finance officially staed mft hifi finance officially staed rt mft hifi mft hifi finance officially staed mft hifi mft hifi finance officially staed`;

const MostUsedWords = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          words={countWords(wordcloud)}
        />
      </Graph>
    </>
  );
};

export default MostUsedWords;
