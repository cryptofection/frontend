import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const useWidth = (ref, width) => {
  const { isOpen: isShown, onOpen: show, onClose: hide } = useDisclosure();

  useEffect(() => {
    const handleResize = () =>
      (ref?.current?.offsetWidth ?? 0) > width ? show() : hide();

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isShown };
};

export default useWidth;
