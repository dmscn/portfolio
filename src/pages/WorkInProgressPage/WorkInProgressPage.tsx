import React, { ReactNode } from "react";
import { Box } from "rebass";

export default function WorkInProgressPage() {
  return (
    <Box p={5} width={1} bg="black" color="white">
      <Title>Work In Progress</Title>
    </Box>
  );
}

const Title = (props: { children: ReactNode }) => <h1>{props.children}</h1>;
