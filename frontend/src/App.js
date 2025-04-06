import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" mt={10}>
        <Heading>Smart Shift Scheduler</Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;
