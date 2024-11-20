'use client'; // For interactivity (React state)

import { useState, useEffect } from 'react';
import { Button, Spinner, HStack, Text, Box } from "@chakra-ui/react";

export default function Home() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/test');
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <Box
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      textAlign="center"
      bg="gray.100"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      {/* Heading */}
      <Text as="h1" fontSize="4xl" fontWeight="bold" color="gray.800" mb={4}>
        Waterpolo :)
      </Text>

      {/* Subheading with Backend Message */}
      <Text as="p" fontSize="lg" color="gray.600" mb={6}>
        Backend says:{' '}
        <Text as="span" fontSize="md" fontWeight="medium" color="gray.800" suppressHydrationWarning>
          {message === null ? <Spinner size="sm" color="gray.500" suppressHydrationWarning/> : message}
        </Text>
      </Text>

      {/* Buttons */}
      <HStack spacing="4">
        <Button
          fontSize="md"
          fontWeight="semibold"
          bg="white"
          color="gray.800"
          border="1px solid"
          borderColor="gray.300"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
          borderRadius="lg"
          shadow="md"
        >
          Click Me 1
        </Button>
        <Button
          fontSize="md"
          fontWeight="semibold"
          bg="white"
          color="gray.800"
          border="1px solid"
          borderColor="gray.300"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
          borderRadius="lg"
          shadow="md"
        >
          Click Me 2
        </Button>
      </HStack>
    </Box>
  );
}
