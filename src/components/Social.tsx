import { Flex, Box, Stack, Text, WrapItem } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Avatar } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Stack
      //bg='gray.100'
      minH={'20vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w='100%'
        maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
      >
        <Box alignSelf='start' px='1' py='32'>
          <Text color='gray.700' p='8' fontWeight='bold' fontSize='md'>
            1. 新規登録及びログインしよう
          </Text>

          <WrapItem>
            <Avatar
              size='2xl'
              src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
            />
          </WrapItem>
        </Box>
        <ArrowRightIcon w={8} h={8} color='gray.700' alignSelf='center' />
        <Box alignSelf='center' px='16' py='32'>
          <Text color='gray.700' p='8' fontWeight='bold' fontSize='md'>
            2. タイトルと内容を投稿しよう
          </Text>

          <WrapItem>
            <Avatar
              size='2xl'
              src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
            />
          </WrapItem>
        </Box>
        <ArrowRightIcon w={8} h={8} color='gray.700' alignSelf='center' />
        <Box alignSelf='center' px='16' py='32'>
          <Text color='gray.700' p='8' fontWeight='bold' fontSize='md'>
            3. 他の人の投稿を読んだら、既読チェックしよう
          </Text>

          <WrapItem>
            <Avatar
              size='2xl'
              src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
            />
          </WrapItem>
        </Box>
        <ArrowRightIcon w={8} h={8} color='gray.700' alignSelf='center' />
        <Box alignSelf='center' px='16' py='32'>
          <Text color='gray.700' p='8' fontWeight='bold' fontSize='md'>
            4. ログアウトしよう
          </Text>
          <WrapItem>
            <Avatar
              size='2xl'
              src='https://d1.awsstatic.com/AWS%20Amplify/amplify-authenticator-login.acfb39db1603aa778743741089d93b8153fb3c4b.png'
            />
          </WrapItem>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Profile;
