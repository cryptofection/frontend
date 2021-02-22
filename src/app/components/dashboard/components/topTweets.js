import {
  Box,
  Heading,
  Flex,
  useDisclosure,
  chakra,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Modal } from 'features';
import { useColor } from 'hooks';
import { Tweet } from 'react-twitter-widgets';
import { useState, useEffect } from 'react';
import useDimensions from 'react-use-dimensions';

const TweetModal = ({ isOpen, onClose, id }) => {
  const { pickAlpha } = useColor();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [isOpen]);

  return (
    <Modal w='auto' isOpen={isOpen} onClose={onClose}>
      <Heading
        fontSize={['1.8rem', '2.4rem']}
        mb={['6px', '10px']}
        color={pickAlpha(0.6, 0.8)}
      >
        Tweet
      </Heading>
      {!loaded && <Box>Loading...</Box>}
      <Box w={['100%', '550px']} justify='center' align='center' mt='50px'>
        <Tweet
          onLoad={() => setLoaded(true)}
          tweetId={id}
          options={{ width: '100%' }}
        />
      </Box>
    </Modal>
  );
};

const TweetRow = ({ name, username, src, createdAt, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pickAlpha } = useColor();

  return (
    <>
      <Box>
        <Flex
          cursor='pointer'
          _hover={{
            backgroundColor: pickAlpha(0.05, 0.05),
            transition: 'background-color 1s',
          }}
          onClick={onOpen}
        >
          <Box
            w='44px'
            h='44px'
            bgColor='yellow.500'
            borderRadius='50%'
            mr='10px'
            overflow='hidden'
          >
            <Image src={src} w='100%' h='100%' />
          </Box>
          <Flex direction='column'>
            <Flex flex='1' fontSize='1.4rem'>
              <chakra.span fontWeight='bold' color={pickAlpha(0.8, 0.8)}>
                {name}
              </chakra.span>
            </Flex>
            <Flex fontSize='1.4rem'>
              <chakra.span mr='10px' color={pickAlpha(0.6, 0.4)}>
                {username}
              </chakra.span>
              <chakra.span color={pickAlpha(0.6, 0.4)}>{createdAt}</chakra.span>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <TweetModal isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
};

const TopTweets = () => {
  const { pickAlpha } = useColor();
  const [ref, { width }] = useDimensions();

  return (
    <>
      <Flex
        borderRadius='30px'
        p={['20px', '30px']}
        w='100%'
        h='100%'
        direction='column'
        ref={ref}
        overflow='auto'
      >
        <Heading
          fontSize={['1.6rem', '1.8rem']}
          mb={['6px', '10px']}
          color={pickAlpha(0.6, 0.8)}
        >
          Top Tweets
        </Heading>
        <Grid
          gap='20px'
          templateColumns={width > 490 && width < 894 ? '1fr 1fr' : '1fr'}
        >
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
          <GridItem>
            <TweetRow
              name='Elon Musk'
              username='@elonmusk'
              createdAt='22h'
              src='https://pbs.twimg.com/profile_images/1363228426094538754/3ncXqbh-_400x400.jpg'
              id='1363230177002622976'
            />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default TopTweets;
