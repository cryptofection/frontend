import React, { useEffect, useState } from 'react';
import { Box, Flex, CloseButton, Modal } from '@chakra-ui/react';
import { useColor } from 'hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { alpha } from 'utils';

const MotionBox = motion.custom(Box);

const CustomModal = ({
  isOpen,
  onClose,
  children,
  maxW = '840px',
  maxH = '511px',
  w = '90%',
  p = '30px',
  noCloseButton = false,
}) => {
  const { color, pickAlpha } = useColor();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(true);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isModalOpen} onClose={() => null}>
      <AnimatePresence onExitComplete={() => setIsModalOpen(false)}>
        {isOpen && (
          <Flex
            justify='center'
            align='start'
            pos='absolute'
            top='0'
            right='0'
            pt={['0', '200px', '220px']}
            w='100%'
            h='100%'
            zIndex={2}
            overflow='hidden'
          >
            <MotionBox
              pos='absolute'
              top='0'
              left='0'
              w='100%'
              height='100%'
              bgColor={['transparent', alpha('black', 0.7)]}
              onClick={() => onClose()}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
            <MotionBox
              pos='relative'
              bgColor={color('primary')}
              p={p}
              w={['100%', w]}
              h={['100%', 'auto']}
              maxW={maxW}
              maxH={['auto', maxH]}
              // overflow='auto'
              borderRadius={['0px', '30px']}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'tween',
                  duration: 0.35,
                  ease: 'easeInOut',
                },
              }}
              exit={{
                opacity: 0,
                y: 100,
                transition: {
                  type: 'tween',
                  duration: 0.35,
                  ease: 'easeInOut',
                },
              }}
            >
              {children}
              {!noCloseButton && (
                <CloseButton
                  onClick={onClose}
                  pos='absolute'
                  top='20px'
                  right='20px'
                  bgColor={pickAlpha(0.15, 0.15)}
                  color={pickAlpha(0.5, 0.5)}
                  borderRadius='full'
                />
              )}
            </MotionBox>
          </Flex>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default CustomModal;
