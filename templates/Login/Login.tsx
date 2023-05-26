import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  Text,
  useMediaQuery,
  Icon,
} from '@chakra-ui/react';
import GoogleIcon from 'components/Icons/google';
import Logo from 'components/Icons/logo';
import Layout from 'components/Layout/Layout';
import { Fragment } from 'react';

const arrInput = [
  {
    name: 'Name',
    value: '',
    _placeholder: 'Enter your name',
    _type: 'text',
  },
  {
    name: 'Email',
    value: '',
    _placeholder: 'Enter your Email',
    _type: 'email',
  },
  {
    name: 'Password',
    value: '',
    _placeholder: 'Enter your password',
    _type: 'password',
  },
];

export default function SignUp() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Layout>
      <Stack as="section" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack w={'full'} maxW={'custom.widthInput'}>
            <Box>
              {!isLargerThan768 && (
                <Box pb="24px">
                  <Icon as={Logo} />
                </Box>
              )}
              <Heading fontSize="30px" pb="12px">
                Sign up
              </Heading>
              <Text color="_blue.text">Start your 30-day free trial.</Text>
            </Box>
            <Fragment>
              {arrInput.map((_item) => (
                <>
                  <FormControl key={_item.name} id={_item.name.toLowerCase()} pt="12px">
                    <FormLabel>{_item.name}*</FormLabel>
                    <Input
                      h="custom.heightInput"
                      placeholder={_item._placeholder}
                      borderColor={'_blue.borderColor'}
                      type={_item._type}
                    />
                  </FormControl>
                  {_item.name === 'Password' && (
                    <Text color="_blue.text" fontSize="14px">
                      Must be at least 8 characters.
                    </Text>
                  )}
                </>
              ))}
            </Fragment>
            <Stack pt="24px" spacing="16px">
              <Button colorScheme={'blue'} variant={'solid'}>
                Create account
              </Button>

              <Button
                bg="#fff"
                border={'1px solid #D0D5DD'}
                leftIcon={<GoogleIcon />}
                variant={'solid'}
                color="_blue.text"
              >
                Sign up with Google
              </Button>
            </Stack>
            <Flex align="center" justify="center" gap="4px" pt="24px">
              <Text fontSize="14px" color="_blue.text">
                Already have an account?
              </Text>
              <Text cursor="pointer" fontSize="14px" color="#6941C6" fontWeight="600">
                Login
              </Text>
            </Flex>
          </Stack>
        </Flex>
        {isLargerThan768 && (
          <Flex flex={1} bg="#F9FAFB" justify="center">
            <Image alt={'Login Image'} objectFit={'cover'} src={'/images/bg_login.jpg'} />
          </Flex>
        )}
      </Stack>
    </Layout>
  );
}

// GoogleIcon
