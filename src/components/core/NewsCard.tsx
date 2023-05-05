import { Paper, Image, rem, Title, Text, Group, Badge, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(300),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
export const NewsCard = ({ data }: any) => {
  const { classes } = useStyles();
  console.log(data);
  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{
        backgroundImage: `url(${data.urlToImage})`,
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {/* {category} */}
          test
        </Text>
        <Title order={3} className={classes.title}>
          {/* {title} */}
          test
        </Title>
      </div>
      <Button variant='white' color='dark'>
        Read article
      </Button>
    </Paper>
  );
};
