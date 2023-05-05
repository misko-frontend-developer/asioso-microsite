import { Box, Container, Text, TextInput, Button } from "@mantine/core";
export const Subscription = () => {
  return (
    <Container
      fluid
      my={100}
      sx={{
        height: 400,
        display: "flex",
        justifyContent: "space-evenly",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(147,189,50,1) 0%, rgba(147,189,50,1) 41%, rgba(97,129,23,1) 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "start",
          width: 550,
          color: "white",
          display: "flex",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Text sx={{ fontSize: "2.5rem", fontWeight: 600 }}>Subscribe to our Newsletter!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      </Box>
      <Box sx={{ display: "flex", width: 400, alignItems: "center" }}>
        <TextInput w='100%' placeholder='Your email address' />
        <Button radius='sm' sx={{ backgroundColor: "#93bd32", fontWeight: 500, letterSpacing: 1 }} mx={20}>
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};
