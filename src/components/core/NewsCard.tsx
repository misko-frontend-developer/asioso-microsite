import { useContext } from "react";
import NewsContext from "context/NewsContext";
import { Paper, Box, Title, Text, createStyles } from "@mantine/core";
import { useNavigate } from "react-router";
const useStyles = createStyles((theme) => ({
  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  content: {
    position: "absolute",
    padding: 10,
    top: 20,
    left: 10,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.md,
    cursor: "pointer",
  },
  date: {
    fontWeight: 100,
    fontSize: theme.fontSizes.sm,
  },
  category: { fontWeight: 100, fontSize: theme.fontSizes.sm, marginTop: 50 },
  overlay: { backgroundColor: "black", width: "100%", height: "100%", borderRadius: 10, opacity: 0.5, "&:hover": { opacity: 0.2 } },
}));
export const NewsCard = ({ data }: any) => {
  const { classes } = useStyles();
  const { category, handleSelected } = useContext(NewsContext);
  const navigate = useNavigate();

  const handleClick = (data: any) => {
    handleSelected(data);
    navigate(data.title.replace(/\s+/g, "&").toLowerCase());
  };
  return (
    <Paper
      radius='md'
      sx={{
        backgroundImage: `url(${data.urlToImage})`,
      }}
      className={classes.card}
    >
      <Box className={classes.overlay} />
      <Box className={classes.content}>
        <Text className={classes.date}>{new Date(data.publishedAt).toDateString()}</Text>
        <Title order={3} onClick={() => handleClick(data)}>
          {data.title}
        </Title>
        <Text className={classes.category}> #{category}</Text>
      </Box>
    </Paper>
  );
};
