import { useState, useContext } from "react";
import { BackgroundImage, Box, Text, Image, createStyles } from "@mantine/core";
import newsJson from "../news.json";
import CoreModal from "./core/CoreModal";
import NewsContext from "context/NewsContext";

const useStyles = createStyles((theme) => ({
  backgroundImage: {
    height: 650,
    zIndex: 2,
    position: "relative",
    clipPath: "ellipse(100% 100% at 20% 0%);",
    [theme.fn.smallerThan("md")]: {
      clipPath: "ellipse(100% 90% at 50% 0%);",
    },
  },
  overlay: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  headlines: {
    cursor: "pointer",
    width: "60%",
    height: 300,
    color: "white",
    position: "absolute",
    bottom: "40%",
    left: "10%",
    textOverflow: "ellipsis",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      textAlign: "center",
      left: 0,
      bottom: "30%",
      overflow: "hidden",
    },
  },
  logo: {
    position: "absolute",
    top: 10,
    left: 20,
  },

  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 600,
    transition: "transform 0.2s ease-in-out",
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.xl,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.lg,
    },
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  subtitle: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 200,
    [theme.fn.smallerThan("md")]: {
      fontSize: 20,
    },
  },
}));
export const HeroSection = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  const { heroDisplay } = useContext(NewsContext);

  return (
    <>
      {heroDisplay && (
        <BackgroundImage src={heroDisplay.urlToImage} className={classes.backgroundImage}>
          <CoreModal opened={!!open} onClose={() => setOpen(false)} title={""}>
            <Box h={400}>
              <iframe
                style={{ width: "100%", height: "100%" }}
                src='https://www.youtube.com/embed/mychEecFJgU'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </Box>
          </CoreModal>

          <Box className={classes.overlay} />

          <Image className={classes.logo} maw={130} mr='auto' src='/logo-white.png' alt='Random image' />

          <Box className={classes.headlines} onClick={() => setOpen(true)}>
            <Text className={classes.title}> {heroDisplay.title}</Text>
            <Text className={classes.subtitle}> {new Date(heroDisplay.publishedAt).toDateString()}</Text>
          </Box>
        </BackgroundImage>
      )}
    </>
  );
};
