import { Box } from '@chakra-ui/react';
import { useColor, useCoin } from 'hooks';
import { useSelector } from 'react-redux';
import { selectCoinID } from 'slices/global';

const Dashboard = () => {
  const { color } = useColor();
  const coinID = useSelector(selectCoinID);

  const { coin } = useCoin(coinID);

  return (
    <Box mt='140px' flex='1' p='40px'>
      <Box
        borderRadius='30px'
        bgColor={color('secondary')}
        w='100%'
        h='100%'
        fontSize='16px'
        fontWeight='bold'
      >
        {JSON.stringify(coin || [])}
      </Box>
    </Box>
  );
};

export default Dashboard;
