import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorCompoNent = ({ message }) => {
  return (
    <Alert
      pos={"fixed"}
      left={"50%"}
      bottom={4}
      status="error"
      transform={"translateX(-50%)"}
      w={'container.lg'}
      fontWeight={'bold'}
      borderRadius={'10px'}
      justifyContent={['center','flex-start']}
    >
      <AlertIcon></AlertIcon>
      {message}
    </Alert>
  );
};

export default ErrorCompoNent;
