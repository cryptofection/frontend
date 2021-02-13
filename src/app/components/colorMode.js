import { FaSun, FaMoon } from 'react-icons/fa';
import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useColor } from 'hooks';

const MotionButton = motion.custom(chakra.button);

const ColorMode = () => {
  const { color, pick, toggle } = useColor();

  return (
    <MotionButton
      pos='absolute'
      top='0'
      right='0'
      borderRadius='0 30px 0 30px'
      aria-label='Change Color Mode Button'
      w='50px'
      h='50px'
      boxShadow={`0 0 0 2px ${color('background')}`}
      onClick={toggle}
      whileHover={{ width: 47, height: 47 }}
      transition={{ duration: 0.2 }}
      whileTap={{ originX: 0, originY: 0 }}
      color={pick('#8e8e8c', '#F5B250')}
      bgColor={color('primary')}
      zIndex={2}
      _focus={{ outline: 0 }}
      d='flex'
      justifyContent='center'
      alignItems='center'
    >
      {pick(<FaMoon />, <FaSun />)}
    </MotionButton>
  );
};

export default ColorMode;
