import { VStack, Flex, Heading } from '@chakra-ui/layout';
import Profile from './components/Profile';
import Social from './components/Social';

//import { useColorMode } from '@chakra-ui/color-mode';
//import { FaSun, FaMoon } from 'react-icons/fa';
//import { IconButton } from '@chakra-ui/react';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === 'dark';
  return (
    <VStack p={5}>
      {/* <Flex w='100%'>
        <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
          kairanban
        </Heading>
      </Flex> */}
      {/* <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound='true'
        onClick={toggleColorMode}
      ></IconButton> */}
      <Profile />
      <Social />
    </VStack>
  );
}

export default App;
