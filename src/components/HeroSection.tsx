import { BackgroundImage, Box, Text, createStyles } from "@mantine/core";
import newsJson from "../news.json";

const useStyles = createStyles((theme) => ({
  backgroundImage: {
    height: 650,
    zIndex: 2,
    position: "relative",
    clipPath: "ellipse(100% 100% at 20% 0%);",
    [theme.fn.smallerThan("md")]: {
      clipPath: "ellipse(100% 100% at 50% 0%);",
    },
  },
  overlay: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  headlines: {
    width: "60%",
    color: "white",
    position: "absolute",
    bottom: "30%",
    left: "10%",
    cursor: "pointer",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      textAlign: "center",
      left: 0,
    },
  },
  title: {
    fontSize: "5rem",
    fontWeight: 600,
    [theme.fn.smallerThan("md")]: {
      fontSize: 40,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 100,
    [theme.fn.smallerThan("md")]: {
      fontSize: 20,
    },
  },
}));
export const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <BackgroundImage src={newsJson[3].urlToImage} className={classes.backgroundImage}>
      <Box className={classes.overlay} />
      <Box className={classes.headlines}>
        <Text className={classes.title}> {newsJson[0].title}</Text>
        <Text className={classes.subtitle}>Author: {newsJson[0].author}</Text>
        <Text className={classes.subtitle}>Published at: {new Date(newsJson[0].publishedAt).toLocaleDateString()}</Text>
      </Box>
    </BackgroundImage>
  );
};
