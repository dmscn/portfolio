import React, { ReactNode } from "react";

export default function WorkInProgressPage() {
  return <Title>Work In Progress</Title>;
}

const Title = (props: { children: ReactNode }) => <h1>{props.children}</h1>;
