// import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
// import { useMediaQuery } from '@chakra-ui/media-query';
// import { Image } from '@chakra-ui/react';

// const Profile = () => {
//   //const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

//   return (
//     <Flex
//       //direction={isNotSmallerScreen ? 'row' : 'column'}
//       w='100%'
//       //maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
//     >
//       <Box alignSelf='center' px='32' py='16'>
//         {/* <Heading fontWeight='extrabold' color='green.500' size='2xl'>
//           建物の情報を共有しよう　!
//         </Heading> */}
//         <Heading fontWeight='extrabold' color='green.500' size='2xl'>
//           建物内の情報と入居者をつなぐ情報共有プラットホーム
//         </Heading>
//         <Text fontSize='3xl' color='gray.900'>
//           建物情報共有アプリ『kairanban』
//         </Text>
//         {/* <Text fontSize='3xl' color='gray.900'>
//           このサイトの使い方
//         </Text> */}
//       </Box>

//       {/* <Box alignSelf='center' px='32' py='16'>
//         <Text color='gray.700' p='4' fontWeight='bold' fontSize='xl'>
//           1. 新規登録及びログインしよう
//         </Text>
//         <Box boxSize='sm'>
//           <Image
//             src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
//             alt='Dan Abramov'
//           />
//         </Box>
//       </Box> */}
//     </Flex>
//   );
// };

// export default Profile;
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import image from '../image/work_chat.png';

const Profile = () => {
  return (
    <Stack
      bg='green.300'
      minH={'60vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading
            color='gray.100'
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}
            >
              Kairanban
            </Text>
            <br />
            <Text
              color={'gray.100'}
              as={'span'}
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              建物内の情報と入居者をつなぐ情報共有プラットホーム
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.100'}>
            A kairanban is a circular that is designed to be read by residents
            of a particular area of a municipality to communicate
            localinformation. The municipality prepares the circular, and
            information is transmitted by circulating the circular among local
            residents.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <img src={image} alt='image' />
      </Flex>
    </Stack>
  );
};
export default Profile;
