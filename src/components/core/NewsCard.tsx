import { Paper, Box, rem, Title, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    position: "absolute",
    top: 20,
    left: 10,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.md,
  },
  overlay: { backgroundColor: "black", width: "100%", height: "100%", borderRadius: 10, opacity: 0.5, "&:hover": { opacity: 0.2 } },
}));
export const NewsCard = ({ data }: any) => {
  const { classes } = useStyles();

  return (
    <Paper
      radius='md'
      sx={{
        backgroundImage: `url(${data.urlToImage})`,
        position: "relative",
      }}
      className={classes.card}
    >
      <Box className={classes.overlay} />

      <Title order={3} className={classes.title}>
        {/* {title} */}
        {data.title}
      </Title>
    </Paper>
  );
};
