import { PropsWithChildren } from "react";
import { Container } from "@mantine/core";
export const SiteWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Container fluid p={0}>
      {children}
    </Container>
  );
};
