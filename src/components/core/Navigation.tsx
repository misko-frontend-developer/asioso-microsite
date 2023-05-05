import { Box, Badge } from "@mantine/core";

const Navigation = () => {
  const navigation = ["popular", "health", "business", "politics"];
  return (
    <Box mb={40}>
      {navigation.map((n) => (
        <Badge size='lg' radius='sm' mx={20}>
          #{n}
        </Badge>
      ))}
    </Box>
  );
};

export default Navigation;
