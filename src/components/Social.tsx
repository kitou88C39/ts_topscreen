import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/react';

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w='100%'
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      {/* <Box alignSelf='center' px='32' py='16'>
        <Heading fontWeight='extrabold' color='green.500' size='2xl'>
          建物の情報を共有しよう　!
        </Heading>
        <Heading fontWeight='extrabold' color='green.500' size='2xl'>
          建物内の入居者をつなぐ情報共有プラットホーム
        </Heading>
        <Text fontSize='3xl' color='gray.900'>
          建物情報共有アプリ『kairanban』
        </Text>
        <Text fontSize='3xl' color='gray.900'>
          このサイトの使い方
        </Text>
      </Box> */}

      <Box alignSelf='center' px='32' py='16'>
        <Text color='gray.700' p='4' fontWeight='bold' fontSize='xl'>
          1. 新規登録及びログインしよう
        </Text>
        <Box boxSize='sm'>
          <Image
            src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
            alt='Dan Abramov'
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Profile;
