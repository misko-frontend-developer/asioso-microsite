import { Container } from "@mantine/core";
export const SiteWrapper = ({ children }: any) => {
  return (
    <Container fluid p={0}>
      {children}
    </Container>
  );
};
