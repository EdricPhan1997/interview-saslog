import { Box, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import Logo from 'components/Icons/logo';
import Mail from 'components/Icons/mail';
import LogoText from 'components/Icons/logo-text';
import React, { Fragment } from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Box position="relative" w="100%" h="100%">
      {isLargerThan768 && (
        <Flex
          as="nav"
          w="100%"
          align="center"
          position="absolute"
          p="32px"
          gap="9px"
          top="0"
          left="0"
          cursor="pointer"
        >
          <Icon as={Logo} />
          <Icon as={LogoText} />
        </Flex>
      )}

      <Fragment>{children}</Fragment>
      <Flex
        as="footer"
        w={['100%', '100%', '50%', '50%']}
        align="center"
        justify="space-between"
        position="absolute"
        p="32px"
        bottom="0"
        left="0"
      >
        <Text
          cursor="pointer"
          color="_blue.text"
          fontSize="14px"
          lineHeight="20px"
          fontWeight="400"
        >
          {'© Untitled UI 2077'}
        </Text>
        <Flex align="center" justify="center" gap="8px" cursor="pointer">
          <Icon as={Mail} />
          <Text color="_blue.text" fontSize="14px" lineHeight="20px" fontWeight="400">
            {'help@untitledui.com'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

// Mail
