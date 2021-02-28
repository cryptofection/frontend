import {
  Box,
  Heading,
  Flex,
  useDisclosure,
  chakra,
  Image,
  Grid,
  GridItem,
  Skeleton,
} from '@chakra-ui/react';
import { Modal } from 'features';
import { useColor, useInfo } from 'hooks';
import { Tweet } from 'react-twitter-widgets';
import { useState, useEffect } from 'react';
import useDimensions from 'react-use-dimensions';
import TimeAgo from 'react-timeago';

const TweetModal = ({ isOpen, onClose, id }) => {
  const { pickAlpha } = useColor();
  const [loaded, setLoaded] = useState(false);

  console.log(id);
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
  const [ref, { width }] = useDimensions();

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
          <Flex mr='10px'>
            <Box w='44px' h='44px' borderRadius='50%' overflow='hidden'>
              <Image src={src} w='44px' h='44px' />
            </Box>
          </Flex>
          <Flex direction='column' w='100%'>
            <Flex flex='1' fontSize='1.4rem'>
              <chakra.span fontWeight='bold' color={pickAlpha(0.8, 0.8)}>
                {name}
              </chakra.span>
            </Flex>
            <Flex ref={ref} w='100%'>
              <chakra.span
                mr='10px'
                color={pickAlpha(0.6, 0.4)}
                fontSize='1.2rem'
              >
                @{username}
              </chakra.span>
              {width > 200 && (
                <chakra.span color={pickAlpha(0.6, 0.4)} fontSize='1.2rem'>
                  <TimeAgo date={createdAt} />
                </chakra.span>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <TweetModal isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
};

const TopTweets = () => {
  const { info } = useInfo();
  const { color, pickAlpha, pick } = useColor();
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

        {info ? (
          info.topTweets.length !== 0 ? (
            <Grid
              gap='20px'
              templateColumns={width > 490 && width < 894 ? '1fr 1fr' : '1fr'}
            >
              {info.topTweets.map((tweet) => {
                return (
                  <GridItem>
                    <TweetRow
                      id={tweet.id}
                      name={tweet.name}
                      username={tweet.username}
                      createdAt={tweet.created_at}
                      src={tweet.avatar}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          ) : (
            <Flex justify='center' align='center' w='100%' h='100%'>
              <chakra.span
                color={pickAlpha(0.5, 0.5)}
                bgColor={pick('#add1ff', '#333281')}
                borderRadius='100px'
                py='2px'
                px='8px'
                fontSize='1.4rem'
                fontWeight='bold'
              >
                No tweets to show
              </chakra.span>
            </Flex>
          )
        ) : (
          <Grid
            gap='20px'
            templateColumns={width > 490 && width < 894 ? '1fr 1fr' : '1fr'}
          >
            {Array.from({ length: 3 }, (_) => (
              <GridItem>
                <Skeleton
                  pos='relative'
                  borderRadius='15px'
                  mx='auto'
                  userSelect='none'
                  startColor={color('skeletonStart')}
                  endColor={color('skeletonEnd')}
                  isLoaded={info}
                  fadeDuration={0}
                  w='100%'
                  h='44px'
                />
              </GridItem>
            ))}
          </Grid>
        )}
      </Flex>
    </>
  );
};

export default TopTweets;
