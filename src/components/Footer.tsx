import { Box, Text } from "@mantine/core";

export const Footer = () => {
  const testLinks = ["Link1", "Link2", "Link3"];

  return (
    <Box sx={{ fontSize: 16, display: "flex", height: 400, justifyContent: "center" }}>
      <Box sx={{ width: "40%", marginTop: "auto", marginBottom: "auto" }}>
        <Text sx={{ fontSize: "2.5rem", fontWeight: 700 }}>Contact us.</Text>
        <Text sx={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: "1em" }}>Let's Talk</Text>
      </Box>
      <Box sx={{ width: "40%", marginTop: "auto", marginBottom: "auto", display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Text sx={{ fontWeight: 600 }}>Resource</Text>
          {testLinks.map((d: any) => (
            <Text my={10}>{d}</Text>
          ))}
        </Box>
        <Box>
          <Text sx={{ fontWeight: 600 }}>Where we are</Text>
          <Text my={10}>Test Location</Text>
        </Box>
        <Box>
          <Text sx={{ fontWeight: 600 }}>Out contact info</Text>
          <Text my={10}>Number: +61548489485</Text>
          <Text my={10}>Email: random@email.com</Text>
        </Box>
      </Box>
    </Box>
  );
};
