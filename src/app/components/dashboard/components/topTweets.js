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

const TweetRow = ({ name, username, src, createdAt, id, isLoading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { color, pickAlpha } = useColor();
  const [ref, { width }] = useDimensions();

  return isLoading ? (
    <>
      <Box>
        <Flex>
          <Flex mr='10px'>
            <Skeleton
              pos='relative'
              userSelect='none'
              startColor={color('skeletonStart')}
              endColor={color('skeletonEnd')}
              isLoaded={false}
              fadeDuration={0}
              borderRadius='50%'
              w='44px'
              h='44px'
            />
          </Flex>
          <Flex direction='column' w='100%'>
            <Flex flex='1' fontSize='1.4rem'>
              <Skeleton
                pos='relative'
                userSelect='none'
                startColor={color('skeletonStart')}
                endColor={color('skeletonEnd')}
                isLoaded={false}
                fadeDuration={0}
                h='14px'
              >
                <chakra.span fontWeight='bold' color={pickAlpha(0.8, 0.8)}>
                  loading
                </chakra.span>
              </Skeleton>
            </Flex>
            <Flex ref={ref} w='100%'>
              <Skeleton
                pos='relative'
                userSelect='none'
                startColor={color('skeletonStart')}
                endColor={color('skeletonEnd')}
                isLoaded={false}
                fadeDuration={0}
                h='14px'
                w='100px'
              >
                <chakra.span
                  mr='10px'
                  color={pickAlpha(0.6, 0.4)}
                  fontSize='1.2rem'
                >
                  @loading
                </chakra.span>
              </Skeleton>
              {width > 200 && (
                <Skeleton
                  pos='relative'
                  userSelect='none'
                  startColor={color('skeletonStart')}
                  endColor={color('skeletonEnd')}
                  isLoaded={false}
                  fadeDuration={0}
                  h='14px'
                  w='40px'
                  ml='10px'
                >
                  <chakra.span
                    mr='10px'
                    color={pickAlpha(0.6, 0.4)}
                    fontSize='1.2rem'
                  >
                    <chakra.span color={pickAlpha(0.6, 0.4)} fontSize='1.2rem'>
                      <TimeAgo date={Date.now()} />
                    </chakra.span>
                  </chakra.span>
                </Skeleton>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <TweetModal isOpen={isOpen} onClose={onClose} id={id} />
    </>
  ) : (
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
  const { pickAlpha, pick } = useColor();
  const [ref, { width }] = useDimensions();

  return (
    <>
      <Flex
        borderRadius='30px'
        pt={['20px', '30px']}
        pb={['20px', '20px']}
        w='100%'
        h='100%'
        direction='column'
        ref={ref}
      >
        <Heading
          pl={['20px', '30px']}
          fontSize={['1.6rem', '1.8rem']}
          mb={['6px', '10px']}
          color={pickAlpha(0.6, 0.8)}
        >
          Top Tweets
        </Heading>
        <Flex
          pl={['20px', '30px']}
          overflow='auto'
          w='100%'
          h='100%'
        >
          {info ? (
            info.topTweets.length !== 0 ? (
              <Grid
                gap='20px'
                templateColumns={width > 490 && width < 894 ? '1fr 1fr' : '1fr'}
                w='100%'
              >
                {info.topTweets.map((tweet) => {
                  return (
                    <GridItem key={tweet.id}>
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
              <Flex
                justify='center'
                align='center'
                w='100%'
                h='100%'
                ml={['-10px', '-15px']}
              >
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
              width='100%'
            >
              {Array.from({ length: 10 }, (_) => (
                <GridItem>
                  <TweetRow isLoading={true} />
                </GridItem>
              ))}
            </Grid>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default TopTweets;
